import type { Locale } from "@/lib/i18n/types";

export type ProjectStatus = "verified" | "in-progress" | "blocked";

export interface PortfolioProject {
  id: string;
  name: string;
  domain: string;
  tagline: string;
  overview: string;
  status: string;
  statusTone: ProjectStatus;
  architecture: string[];
  technologies: string[];
  challenge: string;
  engineering: string;
  evidence: string;
}

export interface PortfolioProjectPresentation {
  eyebrow: string;
  heading: string;
  introduction: string;
  countLabel: string;
  architectureLabel: string;
  stackLabel: string;
  challengeLabel: string;
  decisionLabel: string;
  evidenceLabel: string;
  disclosure: string;
  projects: PortfolioProject[];
}

export const projectPortfolio: Record<Locale, PortfolioProjectPresentation> = {
  en: {
    eyebrow: "PROJECT INDEX / 02—08",
    heading: "MORE SYSTEMS. REAL ENGINEERING BOUNDARIES.",
    introduction:
      "Seven additional projects across on-prem operations, observability, engineering applications and document workflows. Statuses describe verified milestones—not a claim that every feature is production-ready. MCP is used across the engineering workflows; dedicated product MCP interfaces are described as implemented only where repository evidence supports them.",
    countLabel: "07 / ADDITIONAL PROJECTS",
    architectureLabel: "SYSTEM FLOW",
    stackLabel: "TECHNOLOGIES & DOMAIN",
    challengeLabel: "ENGINEERING PROBLEM",
    decisionLabel: "ARCHITECTURAL APPROACH",
    evidenceLabel: "VERIFIED MILESTONE / LIMITATION",
    disclosure: "Public engineering summaries only. Private source code, infrastructure identifiers, client models and operational secrets are intentionally excluded.",
    projects: [
      {
        id: "oasisops",
        name: "Ops",
        domain: "ON-PREM IT OPERATIONS",
        tagline: "An offline-first operations and diagnostic control plane",
        overview:
          "A single-server operations platform bringing infrastructure diagnostics, asset context and gated automation into a controlled on-prem environment. Server health is sourced through a separate monitoring service; endpoint integrations remain independently scoped. MCP-assisted development and review are used for this project; operational access remains bounded by on-prem APIs, authorization and audit.",
        status: "IN DEVELOPMENT",
        statusTone: "in-progress",
        architecture: ["Operator / API", "On-prem service", "PostgreSQL & audit", "Gated diagnostics"],
        technologies: ["Go", "PostgreSQL", "REST API", "Linux", "RBAC", "MCP-assisted development"],
        challenge:
          "Bring together operational context without giving an automation agent unrestricted access or making cloud connectivity a requirement.",
        engineering:
          "Separate server monitoring from endpoint collection; require explicit authorization, durable audit and fail-closed diagnostic behavior.",
        evidence:
          "On-prem PostgreSQL migrations, repeatability and audit / denial tests passed acceptance. Additional integrations remain part of ongoing engineering work.",
      },
      {
        id: "probe",
        name: "Probe",
        domain: "INFRASTRUCTURE OBSERVABILITY",
        tagline: "Independent server monitoring through a controlled API",
        overview:
          "A dedicated monitoring service for Linux infrastructure with structured health data, persistence and operational history. Designed to remain independent while exposing infrastructure context to permitted REST consumers. MCP-assisted development and review are part of this project; the monitoring product continues to expose its data through controlled REST APIs.",
        status: "LINUX PILOT · ACCEPTED",
        statusTone: "verified",
        architecture: ["Linux targets", "Probe collection", "Persisted history", "REST consumers"],
        technologies: ["Linux", "PostgreSQL", "REST", "Monitoring", "Audit", "MCP-assisted development"],
        challenge:
          "Collect useful operational evidence without coupling the monitoring lifecycle to a larger IT management product.",
        engineering:
          "Treat monitoring as a separate service with controlled access, history retention and tested backup / restore behavior.",
        evidence:
          "Linux-only pilot acceptance closed successfully. Windows pilot coverage was deferred and is not presented as validated.",
      },
      {
        id: "sewerpilot",
        name: "SewerPilot",
        domain: "ENGINEERING SOFTWARE INTEGRATION",
        tagline: "A version-tolerant interface to OpenFlows Sewer models",
        overview:
          "A desktop engineering workbench that interacts with OpenFlows Sewer through a guarded adapter layer. The confirmed real-runtime path reads conduit and structure information without modifying the source model. A local read-only MCP server over stdio exposes stored project metadata to AI clients without opening Bentley models, invoking solvers or modifying project files.",
        status: "IN DEVELOPMENT",
        statusTone: "in-progress",
        architecture: ["OpenFlows runtime", "Capability adapter", "Read-only model intake", "Desktop workspace"],
        technologies: ["C# / .NET", "OpenFlows Sewer", "Adapter Contracts", "Desktop UI", "Model Integrity", "MCP / stdio (read-only)"],
        challenge:
          "Integrate with a specialized engineering runtime without binding the product to one fixed vendor assembly shape or risking a live model.",
        engineering:
          "Discover capabilities at runtime, gate unproven write and solver operations, and validate model integrity with unchanged source hashes.",
        evidence:
          "Real-runtime read-only model access was proven; intake and automated regression checks also passed. Full graphical workflows and live engineering execution are separately validated before release.",
      },
      {
        id: "dccsentry",
        name: "DccSentry",
        domain: "DOCUMENT ENGINEERING / COMPLIANCE",
        tagline: "Offline document compliance and review workflow",
        overview:
          "A Windows desktop tool for checking engineering document packages against numbering, register and compliance rules, then presenting traceable findings for human review. MCP-assisted development and engineering review are part of this project; document processing and OCR remain entirely offline.",
        status: "DESKTOP CORE · VALIDATED",
        statusTone: "verified",
        architecture: ["Document packages", "Local parsers / OCR", "Compliance checks", "Findings & review"],
        technologies: ["C# / .NET", "WPF", "Tesseract", "PDFium", "Excel / PDF", "MCP-assisted development"],
        challenge:
          "Detect document-control issues in mixed PDF and spreadsheet inputs without relying on remote OCR or external SaaS.",
        engineering:
          "Prefer native text extraction, use offline OCR only as fallback, and keep findings reviewable with explicit provenance.",
        evidence:
          "Offline OCR and core desktop workflows have recorded passing acceptance and release milestones; this does not imply that every later release gate passed.",
      },
      {
        id: "engisentry",
        name: "EngiSentry",
        domain: "CAD QUALITY ASSURANCE",
        tagline: "Read-first engineering checks for complex AutoCAD drawings",
        overview:
          "An AutoCAD-oriented engineering validation suite covering drawing inspection, equipment association, semantic checks and plotting-related QA. Ambiguous relationships are surfaced for review instead of silently resolved. A local read-only MCP host exposes report, AutoCAD session and Plot QA readiness inspection through a secured named-pipe bridge; it does not execute QA.",
        status: "REAL-DWG PILOT · REVIEW-GATED",
        statusTone: "in-progress",
        architecture: ["AutoCAD drawing", "Read-only inspection", "Semantic / QA engine", "Review evidence"],
        technologies: ["AutoCAD 2021", "C# / .NET", "DWG", "Semantic QA", "Drawing Validation", "MCP Host (read-only)"],
        challenge:
          "Turn inconsistent drawing geometry and annotations into actionable engineering findings without making unsafe assumptions.",
        engineering:
          "Apply fail-closed checks and human review for uncertain equipment associations; protect source drawings during inspection.",
        evidence:
          "Regression suites and real-DWG pilot checks ran successfully. The pilot still exposed incomplete and ambiguous associations requiring review.",
      },
      {
        id: "baravardyar",
        name: "BaravardYar",
        domain: "CONSTRUCTION ESTIMATION",
        tagline: "A Persian desktop estimator grounded in official price books",
        overview:
          "A Windows estimation application built around packaged 1404 construction and roadwork price-book data, with rule-driven calculations and a Persian operator interface. MCP-assisted development and review are used in this project; estimation remains based on packaged price books and deterministic calculation rules.",
        status: "v1.0.5 · RELEASE VERIFIED",
        statusTone: "verified",
        architecture: ["Official price books", "Rules & coefficients", "Estimate calculation", "Persian desktop UI"],
        technologies: [".NET", "Windows Desktop", "1404 Price Books", "Rules Engine", "Persian UI", "MCP-assisted development"],
        challenge:
          "Make estimates reproducible and inspectable while keeping reference data and calculation rules explicit.",
        engineering:
          "Package source datasets with the application, separate rules from UI behavior and run deterministic regression checks.",
        evidence:
          "Version 1.0.5 Windows release and a 576-test regression run passed. Optional regional factors remain a separately tracked scope.",
      },
      {
        id: "plotwise",
        name: "PlotWise",
        domain: "CAD PLOTTING AUTOMATION",
        tagline: "Controlled plotting workflows for engineering DWG files",
        overview:
          "An AutoCAD plot-planning project intended to reduce manual print preparation and improve repeatability across drawing-based deliverables. MCP-assisted development and review support the engineering workflow; drawing operations retain their documented validation and acceptance gates.",
        status: "IN DEVELOPMENT",
        statusTone: "in-progress",
        architecture: ["DWG source", "Plot planning rules", "Controlled operations", "Pilot validation"],
        technologies: ["AutoCAD 2021", "DWG", "Plot Planning", "QA", "Desktop Automation", "MCP-assisted development"],
        challenge:
          "Translate drawing-specific plotting decisions into a repeatable, inspectable workflow rather than a fragile series of manual operations.",
        engineering:
          "Break delivery into bounded acceptance stages and keep an explicit distinction between completed phases and blocked pilot work.",
        evidence:
          "Multiple scoped implementation phases closed successfully. Plot-planning behavior continues through controlled pilot acceptance; no general-availability release is claimed.",
      },
    ],
  },
  fa: {
    eyebrow: "فهرست پروژه‌ها / ۰۲ تا ۰۸",
    heading: "سامانه‌های بیشتر، با مرزبندی فنی واقعی",
    introduction:
      "هفت پروژه دیگر در حوزه عملیات زیرساخت، پایش، نرم‌افزارهای مهندسی و کنترل مدارک. وضعیت هر پروژه بر اساس مراحل تأییدشده نوشته شده است، نه ادعای آماده‌بودن همه قابلیت‌ها برای تولید. MCP در فرایند مهندسی پروژه‌ها استفاده می‌شود؛ رابط‌های اختصاصی آن تنها در مواردی قابلیت محصول محسوب می‌شوند که در کد و مستندات تأیید شده باشند.",
    countLabel: "۷ پروژه تکمیلی",
    architectureLabel: "مسیر معماری سامانه",
    stackLabel: "فناوری‌ها و حوزه فنی",
    challengeLabel: "چالش مهندسی",
    decisionLabel: "رویکرد معماری",
    evidenceLabel: "مرحله تأییدشده / محدودیت فعلی",
    disclosure: "این معرفی‌ها صرفاً فنی و عمومی‌اند؛ سورس خصوصی، نشانی‌های زیرساخت، مدل‌های کارفرما و اطلاعات محرمانه منتشر نمی‌شوند.",
    projects: [
      {
        id: "oasisops",
        name: "Ops",
        domain: "عملیات فناوری اطلاعات درون‌سازمانی",
        tagline: "مرکز کنترل عملیات و عیب‌یابی بدون وابستگی به ابر",
        overview:
          "سکوی عملیات روی یک سرور داخلی برای یکپارچه‌سازی زمینه دارایی‌ها، عیب‌یابی و اتوماسیون کنترل‌شده. پایش سرورها از سرویس مستقل دریافت می‌شود و پوشش کلاینت‌ها مرز اجرایی جداگانه دارد. در فرایند توسعه و بازبینی این پروژه از MCP استفاده می‌شود؛ دسترسی عملیاتی همچنان تحت کنترل API داخلی، مجوزها و ممیزی است.",
        status: "در حال توسعه (In Development)",
        statusTone: "in-progress",
        architecture: ["اپراتور / API", "سرویس داخلی", "پایگاه داده و ممیزی", "عیب‌یابی کنترل‌شده"],
        technologies: ["Go", "PostgreSQL", "REST API", "Linux", "RBAC", "MCP-assisted development"],
        challenge:
          "گردآوری زمینه عملیاتی بدون اعطای دسترسی نامحدود به عامل هوشمند و بدون نیاز عملیاتی به سرویس ابری.",
        engineering:
          "تفکیک پایش سرورها از گردآوری داده کلاینت‌ها، کنترل مجوزها، ثبت رویدادهای قابل ممیزی و توقف ایمن عملیات نامعتبر.",
        evidence:
          "مهاجرت‌ها و آزمون‌های واقعی PostgreSQL، تکرارپذیری و کنترل‌های ممیزی و رد دسترسی تأیید شده‌اند. یکپارچه‌سازی‌های دیگر در مسیر توسعه مهندسی قرار دارند.",
      },
      {
        id: "probe",
        name: "Probe",
        domain: "پایش زیرساخت",
        tagline: "سرویس مستقل پایش سرورها با API کنترل‌شده",
        overview:
          "سامانه مستقل پایش زیرساخت لینوکسی با اطلاعات سلامت ساخت‌یافته، تاریخچه عملیاتی و ذخیره‌سازی پایدار که می‌تواند داده سرورها را از طریق REST به مصرف‌کنندگان مجاز ارائه کند. از MCP در فرایند توسعه و بازبینی استفاده می‌شود؛ ارائه داده‌های پایش همچنان از طریق REST کنترل‌شده انجام می‌گیرد.",
        status: "پایلوت لینوکس · تأییدشده",
        statusTone: "verified",
        architecture: ["سرورهای لینوکس", "گردآوری Probe", "تاریخچه پایدار", "مصرف‌کنندگان REST"],
        technologies: ["Linux", "PostgreSQL", "REST", "Monitoring", "Audit", "MCP-assisted development"],
        challenge:
          "ثبت شواهد مفید عملیاتی بدون وابسته‌کردن چرخه عمر پایش به یک محصول مدیریت فناوری اطلاعات دیگر.",
        engineering:
          "استقلال سرویس، کنترل دسترسی، نگهداری سوابق و آزمون بازیابی از نسخه پشتیبان.",
        evidence:
          "پذیرش پایلوت مختص لینوکس با موفقیت بسته شده است. پوشش ویندوز به بعد موکول شد و تأییدشده محسوب نمی‌شود.",
      },
      {
        id: "sewerpilot",
        name: "SewerPilot",
        domain: "یکپارچه‌سازی نرم‌افزار مهندسی",
        tagline: "رابط سازگار با نسخه‌های مختلف مدل‌های OpenFlows Sewer",
        overview:
          "محیط کاری مهندسی دسکتاپ با لایه آداپتور کنترل‌شده برای OpenFlows Sewer. مسیر اثبات‌شده در اجرای واقعی، اطلاعات لوله‌ها و سازه‌ها را بدون تغییر مدل مبدأ می‌خواند. سرور محلی و فقط‌خواندنی MCP از طریق stdio فراداده ذخیره‌شده پروژه را به کلاینت هوشمند ارائه می‌کند، بدون بازکردن مدل Bentley، اجرای حل‌گر یا تغییر فایل‌های پروژه.",
        status: "در حال توسعه (In Development)",
        statusTone: "in-progress",
        architecture: ["موتور OpenFlows", "آداپتور قابلیت‌ها", "خواندن مدل", "محیط کاری دسکتاپ"],
        technologies: ["C# / .NET", "OpenFlows Sewer", "Adapter Contracts", "Desktop UI", "Model Integrity", "MCP / stdio (read-only)"],
        challenge:
          "اتصال به موتور تخصصی بدون قفل‌شدن به یک نسخه از اسمبلی‌های سازنده یا ایجاد خطر برای مدل واقعی.",
        engineering:
          "کشف قابلیت‌ها در زمان اجرا، مسدودسازی عملیات نوشتن و حل‌گرِ تأییدنشده و کنترل تغییرنکردن هش مدل مبدأ.",
        evidence:
          "خواندن فقط‌خواندنی مدل در موتور واقعی اثبات شد و آزمون‌های دریافت مدل و رگرسیون نیز موفق بودند. مسیرهای کامل گرافیکی و اجرای زنده مهندسی پیش از انتشار به‌طور مستقل ارزیابی می‌شوند.",
      },
      {
        id: "dccsentry",
        name: "DccSentry",
        domain: "کنترل و انطباق مدارک",
        tagline: "کنترل مدارک مهندسی و گردش بازبینی کاملاً آفلاین",
        overview:
          "برنامه دسکتاپ ویندوز برای ارزیابی بسته‌های مدارک بر اساس قواعد شماره‌گذاری، رجیستر و انطباق و نمایش یافته‌های قابل پیگیری برای بازبینی انسانی. در توسعه و بازبینی مهندسی این پروژه از MCP استفاده می‌شود؛ پردازش مدارک و OCR همچنان کاملاً آفلاین هستند.",
        status: "هسته دسکتاپ · تأییدشده",
        statusTone: "verified",
        architecture: ["بسته مدارک", "استخراج متن و OCR محلی", "قواعد انطباق", "یافته‌ها و بازبینی"],
        technologies: ["C# / .NET", "WPF", "Tesseract", "PDFium", "Excel / PDF", "MCP-assisted development"],
        challenge:
          "شناسایی مغایرت در PDF و اکسل بدون استفاده از OCR اینترنتی یا سرویس اشتراکی.",
        engineering:
          "اولویت استخراج متن بومی، OCR آفلاین به‌عنوان مسیر جایگزین و حفظ منشأ قابل بررسی هر یافته.",
        evidence:
          "برای OCR آفلاین و مسیرهای اصلی دسکتاپ، مراحل پذیرش و انتشار موفق ثبت شده‌اند؛ این به معنی گذر از تمام گیت‌های انتشار بعدی نیست.",
      },
      {
        id: "engisentry",
        name: "EngiSentry",
        domain: "کنترل کیفیت نقشه‌های CAD",
        tagline: "بررسی مهندسی نقشه‌های AutoCAD با رویکرد خواندن‌محور",
        overview:
          "مجموعه بررسی نقشه در AutoCAD، شامل بازرسی، ارتباط تجهیزات، کنترل‌های معنایی و ارزیابی مرتبط با چاپ. ارتباط‌های مبهم برای تصمیم انسانی علامت‌گذاری می‌شوند. میزبان MCP محلی و فقط‌خواندنی از طریق پل امن Named Pipe، مشاهده گزارش‌ها، وضعیت نشست AutoCAD و آمادگی Plot QA را فراهم می‌کند؛ اجرای QA از این مسیر مجاز نیست.",
        status: "پایلوت DWG واقعی · نیازمند بازبینی",
        statusTone: "in-progress",
        architecture: ["نقشه AutoCAD", "بازرسی فقط‌خواندنی", "کنترل معنایی و QA", "شواهد بازبینی"],
        technologies: ["AutoCAD 2021", "C# / .NET", "DWG", "Semantic QA", "Drawing Validation", "MCP Host (read-only)"],
        challenge:
          "تبدیل هندسه و یادداشت‌های ناسازگار نقشه به یافته‌های قابل اقدام بدون حدس‌های خطرناک.",
        engineering:
          "کنترل‌های محافظه‌کارانه، بازبینی انسانی ارتباط‌های نامطمئن و حفظ نقشه مبدأ هنگام ارزیابی.",
        evidence:
          "رگرسیون و پایلوت روی DWG واقعی اجرا شده‌اند؛ موارد ناقص و مبهم شناسایی‌شده همچنان به بازبینی نیاز دارند.",
      },
      {
        id: "baravardyar",
        name: "BaravardYar",
        domain: "برآورد هزینه ساخت",
        tagline: "نرم‌افزار فارسی برآورد بر پایه فهرست‌بهای رسمی",
        overview:
          "برنامه برآورد دسکتاپ ویندوز بر پایه داده‌های بسته‌بندی‌شده فهرست‌بهای ابنیه و راه سال ۱۴۰۴، محاسبات قاعده‌محور و رابط فارسی. از MCP در فرایند توسعه و بازبینی استفاده می‌شود؛ محاسبات برآورد همچنان بر فهرست‌بهای محلی و قواعد قطعی متکی هستند.",
        status: "نسخه ۱.۰.۵ · انتشار تأییدشده",
        statusTone: "verified",
        architecture: ["فهرست‌بهای رسمی", "قواعد و ضرایب", "موتور محاسبه", "رابط فارسی"],
        technologies: [".NET", "Windows Desktop", "1404 Price Books", "Rules Engine", "Persian UI", "MCP-assisted development"],
        challenge:
          "تولید برآورد قابل بازتولید و بررسی با داده مرجع و قواعد محاسباتی شفاف.",
        engineering:
          "بسته‌بندی داده مرجع با برنامه، جداسازی قواعد از رابط کاربر و رگرسیون محاسبات قطعی.",
        evidence:
          "انتشار ویندوز نسخه ۱.۰.۵ و مجموعه ۵۷۶ تست رگرسیون موفق بوده است. برخی ضرایب منطقه‌ای در دامنه توسعه جداگانه پیگیری می‌شوند.",
      },
      {
        id: "plotwise",
        name: "PlotWise",
        domain: "اتوماسیون چاپ نقشه",
        tagline: "فرایند کنترل‌شده آماده‌سازی چاپ فایل‌های DWG",
        overview:
          "پروژه برنامه‌ریزی چاپ در AutoCAD با هدف کاهش تنظیمات دستی، افزایش تکرارپذیری و کنترل خروجی نقشه‌های مهندسی. از MCP در توسعه و بازبینی فازهای مهندسی استفاده می‌شود؛ عملیات روی نقشه همچنان تابع کنترل‌های اعتبارسنجی و گیت‌های پذیرش پروژه است.",
        status: "در حال توسعه (In Development)",
        statusTone: "in-progress",
        architecture: ["فایل DWG", "قواعد برنامه‌ریزی چاپ", "عملیات کنترل‌شده", "پایلوت پذیرش"],
        technologies: ["AutoCAD 2021", "DWG", "Plot Planning", "QA", "Desktop Automation", "MCP-assisted development"],
        challenge:
          "تبدیل تصمیم‌های وابسته به نقشه به فرایندی قابل تکرار و قابل بررسی به‌جای مراحل دستی شکننده.",
        engineering:
          "تقسیم اجرا به مراحل پذیرش محدود و تفکیک صریح فازهای تکمیل‌شده از موارد مسدود.",
        evidence:
          "چندین فاز محدود پیاده‌سازی با موفقیت تکمیل شدند. رفتار برنامه‌ریزی چاپ در چرخه پذیرش پایلوت ارزیابی می‌شود و هنوز انتشار عمومی آماده تولید اعلام نشده است.",
      },
    ],
  },
};

export function getProjectPortfolio(locale: Locale): PortfolioProjectPresentation {
  return projectPortfolio[locale];
}
