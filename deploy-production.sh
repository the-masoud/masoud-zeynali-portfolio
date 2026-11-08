#!/usr/bin/env bash
# Deploy one verified portfolio revision without changing DNS, Caddy, or other services.
set -Eeuo pipefail
APP="masoud-portfolio"
LIVE="/var/www/masoud-portfolio"
REPO="https://github.com/the-masoud/masoud-zeynali-portfolio.git"
RELEASE="29ac62623ff114ac91b64d4b773d3e85b1dfd6d5"
PORT="3000"
PARENT="/var/www"
STAGE=""
BACKUP=""
SWITCHED=0

fail() { printf 'DEPLOY_FAIL: %s\n' "$*" >&2; exit 1; }
on_exit() {
  local rc="$?"
  trap - EXIT
  if (( rc != 0 )) && (( SWITCHED == 1 )); then
    printf 'ROLLBACK: Restoring the previous release...\n' >&2
    if [[ -d "$LIVE" ]]; then mv -- "$LIVE" "${BACKUP}.failed-new" || true; fi
    if [[ -d "$BACKUP" ]]; then
      mv -- "$BACKUP" "$LIVE" || true
      pm2 restart "$APP" --update-env || true
    fi
  fi
  if [[ -n "$STAGE" && -d "$STAGE" && "$STAGE" == /var/www/.masoud-portfolio-stage.* ]]; then
    rm -rf -- "$STAGE"
  fi
  if (( rc != 0 )); then
    printf 'DEPLOY_UNSUCCESSFUL (exit=%s). Other services were not modified.\n' "$rc" >&2
  fi
  exit "$rc"
}
trap on_exit EXIT

[[ "$(id -u)" -eq 0 ]] || fail "Run this from the VPS console as root (same PM2 owner)."
for dep in git node npm pm2 curl flock; do
  command -v "$dep" >/dev/null 2>&1 || fail "Required tool missing: $dep"
done
[[ -d "$LIVE" && -f "$LIVE/package.json" ]] || fail "Existing portfolio folder not found: $LIVE"
[[ -d "$LIVE/.next" ]] || fail "Existing compiled portfolio missing; refusing to replace an unknown installation."
pm2 describe "$APP" >/dev/null 2>&1 || fail "PM2 process '$APP' is not registered for this user."
mkdir -p /var/lock
exec 9>/var/lock/masoud-portfolio-deploy.lock
flock -n 9 || fail "Another portfolio deployment is already running."

STAGE="$(mktemp -d "$PARENT/.masoud-portfolio-stage.XXXXXXXX")"
BACKUP="$PARENT/.masoud-portfolio-backup-$(date -u +%Y%m%dT%H%M%SZ)-$$"
[[ ! -e "$BACKUP" ]] || fail "Backup collision: $BACKUP"

printf 'STAGE: Fetching verified release %s\n' "$RELEASE"
git clone -q --depth 1 --branch main "$REPO" "$STAGE"
git -C "$STAGE" fetch -q --depth 1 origin "$RELEASE"
git -C "$STAGE" checkout -q --detach "$RELEASE"
[[ "$(git -C "$STAGE" rev-parse HEAD)" == "$RELEASE" ]] || fail "Git revision mismatch."

# Preserve deployment-only environment and files, without overriding tracked assets.
shopt -s nullglob
for env_file in "$LIVE"/.env "$LIVE"/.env.*; do
  if [[ -f "$env_file" ]]; then cp -p -- "$env_file" "$STAGE/"; fi
done
shopt -u nullglob
for config in ecosystem.config.js ecosystem.config.cjs ecosystem.config.mjs .npmrc; do
  if [[ -f "$LIVE/$config" && ! -e "$STAGE/$config" ]]; then
    cp -p -- "$LIVE/$config" "$STAGE/$config"
  fi
done
if [[ -d "$LIVE/public" ]]; then cp -an -- "$LIVE/public/." "$STAGE/public/"; fi
chmod 755 "$STAGE"

printf 'BUILD: Installing dependencies and compiling the site in staging...\n'
(
  cd "$STAGE"
  npm ci --no-audit --no-fund
  npm run build
)
[[ -f "$STAGE/.next/BUILD_ID" ]] || fail "Build artifact missing."
[[ -f "$STAGE/public/images/projects/access-road-designer.webp" ]] || fail "Road Designer cover missing."
[[ -f "$STAGE/public/images/projects/pamenar.webp" ]] || fail "Pamenar cover missing."

printf 'SWITCH: Keeping the old site in %s\n' "$BACKUP"
mv -- "$LIVE" "$BACKUP"
SWITCHED=1
mv -- "$STAGE" "$LIVE"
STAGE=""
printf 'RESTART: Only the PM2 process %s\n' "$APP"
pm2 restart "$APP" --update-env

printf 'VERIFY: Checking both pages and their new content on localhost...\n'
for path in / /fa; do
  page="$(curl -fsS --retry 3 --retry-delay 1 --retry-connrefused --connect-timeout 3 --max-time 15 "http://127.0.0.1:$PORT$path")" || fail "HTTP check failed: $path"
  [[ "$page" == *'access-road-designer'* ]] || fail "Road Designer missing from $path"
  [[ "$page" == *'sewerpilot'* ]] || fail "SewerPilot missing from $path"
  [[ "$page" == *'pamenar'* ]] || fail "Pamenar missing from $path"
done
curl -fsS --connect-timeout 3 --max-time 12 -o /dev/null "http://127.0.0.1:$PORT/images/projects/access-road-designer.webp" || fail "Road Designer asset check failed."
SWITCHED=0
printf 'DEPLOY_PASS: %s\n' "$RELEASE"
printf 'BACKUP_KEPT: %s\n' "$BACKUP"
printf 'NOTE: DNS, Caddy, and WhiteDNS were untouched.\n'
