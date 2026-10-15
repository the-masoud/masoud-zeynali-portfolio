import type { Locale } from "@/lib/i18n/types";

export interface PortfolioGame {
  id: "yadmana" | "blocky-adventures";
  title: string;
  genre: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  devScreenshot: string;
  devScreenshotAlt: string;
  devScreenshotCaption: string;
  technologies: string[];
  gameplay: string[];
  engineering: string;
  currentEvidence: string;
  limitation: string;
}

export interface GamePortfolioCopy {
  eyebrow: string;
  heading: string;
  introduction: string;
  processTitle: string;
  processBadge: string;
  processDescription: string;
  gameplayLabel: string;
  detailsLabel: string;
  engineeringLabel: string;
  evidenceLabel: string;
  limitationsLabel: string;
  screenshotLabel: string;
  conceptArtLabel: string;
  visualStatusNote: string;
  statusLabel: string;
  games: PortfolioGame[];
}

export const gamePortfolioData: Record<Locale, GamePortfolioCopy> = {
  en: {
    eyebrow: "INTERACTIVE PRODUCTS / 02",
    heading: "GAME DEVELOPMENT",
    introduction: "Two independent games in active development: one Persian-first Android cognitive-training experience and one child-friendly 3D voxel adventure.",
    processTitle: "Engineered with AI & MCP",
    processBadge: "AI + MCP-ASSISTED DEVELOPMENT",
    processDescription: "Both games use AI coding agents and Model Context Protocol (MCP)–assisted tooling during planning, implementation and engineering review. This describes the development workflow—not a claim of cloud-dependent gameplay, an in-game AI assistant or a built-in MCP server.",
    gameplayLabel: "GAMEPLAY & SYSTEMS",
    detailsLabel: "Explore technical details",
    engineeringLabel: "ENGINEERING APPROACH",
    evidenceLabel: "IMPLEMENTATION EVIDENCE",
    limitationsLabel: "CURRENT BOUNDARY",
    screenshotLabel: "Actual development capture",
    conceptArtLabel: "Concept artwork · Final visuals in development",
    visualStatusNote: "Work-in-progress capture from active prototype. Production art direction, assets and shaders remain in development.",
    statusLabel: "IN DEVELOPMENT",
    games: [
      {
        id: "yadmana",
        title: "YadMana",
        genre: "PERSIAN COGNITIVE-TRAINING GAME · ANDROID",
        headline: "A Persian-first memory garden built around daily play",
        description: "A native Android game combining a persistent Memory Garden with four short exercises for memory, attention and flexible thinking. Local adaptive difficulty, daily missions and progress feedback are designed for accessible, low-pressure play.",
        image: "/images/games/yadmana-concept-cover.webp",
        imageAlt: "Original Achaemenid-inspired fantasy concept artwork for YadMana featuring Persepolis-style columns, double-headed animal capitals, ancient stone reliefs and a magical memory garden",
        devScreenshot: "/images/games/yadmana.webp",
        devScreenshotAlt: "Actual YadMana Android development capture showing the playable Memory Garden screen with trees, pathways and interactive zones",
        devScreenshotCaption: "Playable Android prototype build capture (Jetpack Compose / Canvas) demonstrating the persistent Memory Garden flow.",
        technologies: ["Kotlin", "Jetpack Compose", "Android", "Offline-first", "AI + MCP development"],
        gameplay: ["Pattern Recall", "Card Pairs", "Target Hunt", "Rule Switch", "Daily missions & rewards"],
        engineering: "Modular Kotlin game logic, deterministic training and progression, local encrypted storage, Persian RTL interface and reduced-motion/accessibility provisions. AI agents and MCP-connected developer tooling support the engineering workflow, not gameplay decisions.",
        currentEvidence: "Software and emulator acceptance has covered the four game modes, Memory Garden flow and local progression. Closed-alpha planning is complete.",
        limitation: "Physical-device accessibility, participant-based closed alpha, medical/expert review and public release remain pending. No diagnosis, treatment or prevention claims.",
      },
      {
        id: "blocky-adventures",
        title: "Blocky Adventures",
        genre: "3D VOXEL SANDBOX · EXPLORATION & BUILDING",
        headline: "Explore, gather, build—and restore a colorful world",
        description: "A child-friendly voxel sandbox/adventure in Godot, combining block interaction, crafting, friendly creatures, quests and environmental restoration. The art direction is a bright, stylized 3D fantasy rather than a direct clone of an existing block-building game.",
        image: "/images/games/blocky-adventures-concept-cover.webp",
        imageAlt: "Original fantasy concept artwork for Blocky Adventures showing a young explorer planting a sapling as a dry voxel landscape transforms into a thriving green world",
        devScreenshot: "/images/games/blocky-adventures.webp",
        devScreenshotAlt: "Actual Blocky Adventures Godot 4 development capture showing voxel terrain generation, foliage, slime and restoration effects",
        devScreenshotCaption: "Playable Godot 4 prototype build capture showing 3D voxel terrain streaming, world restoration systems and creature spawning.",
        technologies: ["Godot 4.7.2", "GDScript", "Voxel Tools", "3D gameplay", "AI + MCP development"],
        gameplay: ["Voxel exploration & building", "Gathering & crafting", "Friendly animals & slime", "Quests", "World restoration"],
        engineering: "Godot/GDScript architecture with voxel streaming, typed gameplay modules, scene-based QA and desktop/mobile performance constraints. AI agents and MCP-connected tools assist implementation and review; the game itself does not require an MCP connection.",
        currentEvidence: "Adventure/Creative gameplay phases, production art integration and a desktop mobile-budget analysis have documented acceptance. A later stylized visual upgrade was evaluated in Godot.",
        limitation: "In development; Android-device validation, final release acceptance and production distribution are not established. Known baseline startup/terrain collider race is still tracked.",
      },
    ],
  },
  fa: {
    eyebrow: "محصولات تعاملی / ۰۲",
    heading: "بازی‌سازی",
    introduction: "دو بازی مستقل در حال توسعه: یک بازی اندرویدی فارسی برای تمرین حافظه و توجه، و یک بازی ماجراجویی سه‌بعدی با دنیای مکعبی.",
    processTitle: "توسعه با هوش مصنوعی و MCP",
    processBadge: "AI + MCP-ASSISTED DEVELOPMENT",
    processDescription: "هر دو بازی با کمک عامل‌های کدنویسی هوش مصنوعی و ابزارهای مبتنی بر Model Context Protocol (MCP) در برنامه‌ریزی، پیاده‌سازی و بازبینی مهندسی توسعه می‌یابند. این ویژگی مربوط به فرایند توسعه است، نه ادعای وجود هوش مصنوعی آنلاین یا سرور MCP در خود بازی.",
    gameplayLabel: "بازی‌ها و سامانه‌های پیاده‌سازی‌شده",
    detailsLabel: "مشاهده جزئیات فنی",
    engineeringLabel: "رویکرد مهندسی",
    evidenceLabel: "شواهد پیاده‌سازی",
    limitationsLabel: "وضعیت و محدودیت فعلی",
    screenshotLabel: "تصویر واقعی از نسخه در حال توسعه",
    conceptArtLabel: "طرح مفهومی · جلوه‌های بصری نهایی در حال توسعه است",
    visualStatusNote: "تصویر ثبت‌شده از نسخه آزمایشی در حال توسعه. سبک بصری، دارایی‌های گرافیکی و سایه‌زن‌های نهایی همچنان در دست ارتقا هستند.",
    statusLabel: "در حال توسعه (In Development)",
    games: [
      {
        id: "yadmana",
        title: "YadMana | یادمانا",
        genre: "بازی تمرین حافظه و توجه · اندروید",
        headline: "باغ یادآوری؛ تمرین روزانه حافظه و توجه به زبان فارسی",
        description: "بازی بومی اندروید با محیط باغ یادآوری و چهار تمرین کوتاه برای حافظه، توجه و انعطاف‌پذیری شناختی. تنظیم تدریجی دشواری، مأموریت روزانه و نمایش پیشرفت برای تجربه‌ای آرام و دسترس‌پذیر طراحی شده‌اند.",
        image: "/images/games/yadmana-concept-cover.webp",
        imageAlt: "طرح مفهومی فانتزی یادمانا با الهام از معماری هخامنشی، ستون‌های تخت جمشید، سرستون‌های دو‌سر، نقش‌برجسته‌های سنگی و باغ یادآوری",
        devScreenshot: "/images/games/yadmana.webp",
        devScreenshotAlt: "تصویر واقعی ثبت‌شده از نسخه در حال توسعه بازی یادمانا در اندروید و محیط باغ یادآوری",
        devScreenshotCaption: "تصویر ثبت‌شده از نسخه آزمایشی قابل اجرا در اندروید (Jetpack Compose / Canvas) نشان‌دهنده جریان باغ یادآوری.",
        technologies: ["Kotlin", "Jetpack Compose", "Android", "Offline-first", "AI + MCP development"],
        gameplay: ["یادآوری الگو", "جفت‌کارت‌ها", "پیداکردن هدف", "تغییر قانون", "مأموریت روزانه و پاداش"],
        engineering: "معماری ماژولار Kotlin، منطق تمرین قطعی، ذخیره‌سازی رمزگذاری‌شده محلی، رابط فارسی راست‌به‌چپ و پشتیبانی از دسترس‌پذیری. عامل‌های هوشمند و ابزارهای متصل از طریق MCP در توسعه کمک می‌کنند و جایگزین منطق بازی نیستند.",
        currentEvidence: "پذیرش نرم‌افزاری و اجرای شبیه‌ساز برای چهار بازی، مسیر باغ یادآوری و پیشرفت محلی انجام شده است. آماده‌سازی آلفای بسته تکمیل شده است.",
        limitation: "آزمون دسترس‌پذیری روی دستگاه واقعی، آلفای انسانی، بازبینی تخصصی و انتشار عمومی هنوز انجام نشده‌اند. بازی ابزار تشخیص، درمان یا پیشگیری پزشکی نیست.",
      },
      {
        id: "blocky-adventures",
        title: "Blocky Adventures",
        genre: "ماجراجویی و ساخت‌وساز سه‌بعدی · Voxel",
        headline: "کاوش، جمع‌آوری، ساخت‌وساز و بازسازی یک دنیای رنگارنگ",
        description: "بازی ماجراجویی و ساخت‌وساز کودک‌پسند در Godot با تعامل با بلوک‌ها، ساخت ابزار، موجودات دوستانه، مأموریت و احیای طبیعت. هویت بصری آن فانتزی سه‌بعدی و مستقل از بازی‌های مشابه است.",
        image: "/images/games/blocky-adventures-concept-cover.webp",
        imageAlt: "طرح مفهومی فانتزی بازی Blocky Adventures با ماجراجویی که درخت می‌کارد و سرزمین مکعبی خشک را به دنیایی سرسبز و زنده تبدیل می‌کند",
        devScreenshot: "/images/games/blocky-adventures.webp",
        devScreenshotAlt: "تصویر واقعی نسخه در حال توسعه Blocky Adventures، دنیای سه‌بعدی مکعبی، پوشش گیاهی و جلوه‌های احیای محیط",
        devScreenshotCaption: "تصویر ثبت‌شده از نسخه اولیه قابل اجرا در Godot 4 شامل بارگذاری دنیای وکسل، سامانه‌های احیای محیط و موجودات بازی.",
        technologies: ["Godot 4.7.2", "GDScript", "Voxel Tools", "3D gameplay", "AI + MCP development"],
        gameplay: ["اکتشاف و ساخت‌وساز", "گردآوری منابع و ساخت ابزار", "حیوانات دوستانه و اسلایم", "مأموریت‌ها", "احیای محیط"],
        engineering: "معماری Godot/GDScript با مدیریت دنیای Voxel، ماژول‌های گیم‌پلی، آزمون‌های صحنه و محدودیت‌های عملکرد دسکتاپ و موبایل. عامل‌های هوش مصنوعی و ابزارهای مبتنی بر MCP به پیاده‌سازی و بازبینی کمک می‌کنند؛ اجرای بازی به اتصال MCP وابسته نیست.",
        currentEvidence: "فازهای گیم‌پلی ماجراجویی و ساخت‌وساز، یکپارچه‌سازی تصاویر محصول و تحلیل بودجه عملکرد دسکتاپ مستند شده‌اند. ارتقای ظاهری بعدی نیز در Godot بررسی شده است.",
        limitation: "در حال توسعه؛ پذیرش روی دستگاه واقعی Android و انتشار نهایی تأیید نشده‌اند. یک مسئله پیشین در راه‌اندازی و برخورد زمین همچنان پیگیری می‌شود.",
      },
    ],
  },
};

export const getGamePortfolio = (locale: Locale): GamePortfolioCopy => gamePortfolioData[locale];
