# SEO and Structured Data Specification (Phase 7)

## 1. Metadata Strategy
The portfolio utilizes Next.js native Metadata API (`app/layout.tsx`) to declare factual, restrained meta tags:
- **Title**: `Masoud Zeynali — Senior AI Engineer, Infrastructure & Security`
- **Description**: `Personal technology portfolio of Masoud Zeynali, a Senior AI Engineer focused on AI Agents, Model Context Protocol (MCP), infrastructure automation, network security, and AI-assisted infrastructure operations.`
- **Author**: `Masoud Zeynali`
- **OpenGraph**: Factual title, description, and `type: "website"` without invented domain URLs.
- **Twitter Card**: `summary` card format matching factual OpenGraph content.
- **Robots**: Default indexing (`index: true, follow: true`) without invented sitemap links.

---

## 2. Schema.org JSON-LD Graph
The site embeds a single server-rendered `<script type="application/ld+json">` containing a top-level `@graph` with exactly two entities:

### Entity 1: `Person` (`@id: "#person"`)
- **Name**: `Masoud Zeynali`
- **Job Title**: `IT Manager | Network Infrastructure & Security Specialist`
- **Address**: `PostalAddress` (`Tehran, Iran`)
- **SameAs**: `["https://github.com/the-masoud"]`
- **knowsAbout**: `["Artificial Intelligence Engineering", "AI Agents", "Model Context Protocol (MCP)", "Infrastructure Automation", "AI-assisted Infrastructure Operations"]`
- **hasCredential**: Exactly two `EducationalOccupationalCredential` items:
  1. `MCSE: Server Infrastructure` (Microsoft Certified Solutions Expert — 2012)
  2. `MCSE: Cloud Platform and Infrastructure` (Microsoft Certified Solutions Expert — 2016)

### Entity 2: `SoftwareSourceCode` (`@id: "#infraforge"`)
- **Name**: `InfraForge`
- **Description**: `Personal engineering project exploring controlled AI-assisted infrastructure operations via Model Context Protocol.`
- **Code Repository**: `https://github.com/the-masoud/InfraForge`
- **Programming Language**: `Go`
- **Author**: `{"@id": "#person"}` (references the top-level Person without entity duplication)

---

## 3. Privacy & Omission Decisions
- **Telephone / Mobile Number**: Excluded from page HTML and JSON-LD schema.
- **Email in JSON-LD**: Omitted from JSON-LD to prevent automated scraping while remaining directly actionable via HTML `mailto:`.
- **Credential Dates**: Only factual graduation/issuance years (`2012`, `2016`) are specified in human descriptions; no fabricated full dates (`2012-01-01`) or validity/expiration fields are included.
- **Education in JSON-LD**: Omitted from JSON-LD to prevent inaccurate representation of in-progress MBA studies (`alumniOf` is not claimed).
- **No Schema Spam**: No fabricated ratings, reviews, offers, products, or job postings.

---

## 4. Production-Domain Items Deferred to Phase 8
The following host-dependent and deployment-dependent configurations are explicitly deferred to Phase 8:
- Final production canonical URL (`canonical`)
- Production `metadataBase`
- Absolute OpenGraph and Twitter image URLs
- Production sitemap (`sitemap.xml`) generation with final hostname
- Production `robots.txt` referencing production sitemap URL
- Search Console and Bing Webmaster verification tokens

---

## 5. Performance & Component Boundaries
- **Server Components**: All Phase 6 and Phase 7 components (`ProfessionalRecord`, `ResumeAccess`, `CredentialsEducation`, `DirectContact`, `StructuredData`) are server-rendered.
- **Client Components**: Isolated exclusively to interactive components where state/events are strictly necessary (e.g., `Navbar` mobile drawer and `OperationalReasoningLab` simulation).
- **Zero Runtime Data Fetching**: No client-side `fetch`, Axios, or third-party tracking scripts.
