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
    eyebrow: "PROJECT INDEX / 02—10",
    heading: "MORE SYSTEMS. REAL ENGINEERING BOUNDARIES.",
    introduction:
      "Nine additional projects spanning AI-assisted strategic management, on-prem operations, observability, road design, engineering software and document workflows. Each status distinguishes tested milestones from capabilities still in development; educational prototypes are not presented as production deployments.",
    countLabel: "09 / ADDITIONAL PROJECTS",
    architectureLabel: "SYSTEM FLOW",
    stackLabel: "TECHNOLOGIES & DOMAIN",
    challengeLabel: "ENGINEERING PROBLEM",
    decisionLabel: "ARCHITECTURAL APPROACH",
    evidenceLabel: "VERIFIED MILESTONE / LIMITATION",
    disclosure: "Public engineering summaries only. Private source code, infrastructure identifiers, client models and operational secrets are intentionally excluded.",
    projects: [
      {
        id: "pamenar",
        name: "Design and Implementation of an Intelligent Strategic Management System",
        domain: "AI-ASSISTED STRATEGIC MANAGEMENT / PAMENAR",
        tagline: "An AI-enabled organizational strategy dashboard and Telegram assistant",
        overview:
          "An educational strategic management prototype for Pamenar, combining a seven-page management dashboard with n8n Cloud workflows, Gemini AI and a Telegram bot. The system presents eight KPIs across four departments, tracks organizational tasks, retrieves market-news headlines and supports management analysis. KPI, task and news views draw on connected data services, while parts of the management content use illustrative sample data.",
        status: "EDUCATIONAL PROTOTYPE · TESTED WORKFLOWS",
        statusTone: "in-progress",
        architecture: ["Connected KPIs / tasks / news", "n8n Cloud automation", "Gemini analysis & RAG", "Dashboard / Telegram alerts"],
        technologies: ["n8n Cloud", "Gemini", "Telegram Bot", "RAG", "HTML Dashboard", "KPI Monitoring", "SWOT"],
        challenge:
          "Bring performance monitoring, strategic analysis, task coordination and timely management alerts together without confusing simulated organizational information with production data.",
        engineering:
          "Combine four departments and eight target-based KPIs in a seven-page dashboard; orchestrate task assignment and scheduled alerts in n8n, generate SWOT and 90-day strategic recommendations with Gemini, and answer document- and news-grounded questions through RAG with source references.",
        evidence:
          "Telegram task assignment, daily KPI-alert scheduling and receipt of a real alert message were reported as tested. Several RAG questions were exercised. The project is an academic demonstration with illustrative organizational data, not a validated production enterprise deployment.",
      },
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
        tagline: "A guarded OpenFlows Sewer workbench with a verified internal software release",
        overview:
          "A Windows engineering assistant for OpenFlows Sewer models. Its version-tolerant adapter supports source-model inspection, controlled native calculation of existing models, results readback, diagnostic exports and engineering review. The software passed its internal acceptance campaign; model-specific hydraulic and design approvals remain independent.",
        status: "PERSONAL / INTERNAL RELEASE · v1.1 BETA",
        statusTone: "verified",
        architecture: ["OpenFlows runtime", "Capability adapter", "Model calculation / readback", "Desktop diagnostics"],
        technologies: ["C# / .NET", "OpenFlows Sewer", "Windows Desktop", "Hydraulic Results", "Model Integrity", "MCP / stdio (read-only)"],
        challenge:
          "Interact with different vendor runtime configurations while retaining the original model, explicit engineering gates and reliable result provenance.",
        engineering:
          "Isolate native runtime interactions, guard write and calculation paths, expose read-only project metadata to MCP clients, and distinguish software acceptance from hydraulic design approval.",
        evidence:
          "Software acceptance: 16/16 tasks PASS. A sealed v1.1.0-beta.1 installer was accepted for PERSONAL_INTERNAL use on 6 November 2026. This is not a public release; qualified execution across every model configuration and project-specific hydraulic design sign-off are not claimed.",
      },
      {
        id: "access-road-designer",
        name: "Automatic Access Road Designer",
        domain: "AUTODESK CIVIL 3D / ACCESS ROAD ENGINEERING",
        tagline: "Operator-driven access-road workflow with native Civil 3D validation gates",
        overview:
          "An installable Autodesk Civil 3D 2021 add-in that accepts operator-supplied project data, binds a native alignment and existing-ground surface, previews geometry and evaluates deterministic assembly choices. Native profile, corridor, surface and earthwork adapters have been demonstrated in controlled working copies. Real-project design remains gated by missing authoritative engineering inputs.",
        status: "OPERATOR PILOT · DESIGN ACCEPTANCE PENDING",
        statusTone: "in-progress",
        architecture: ["Operator project inputs", "Civil 3D alignment / ground", "Profile & corridor adapters", "Native readback / design gates"],
        technologies: ["Autodesk Civil 3D 2021", "C# / .NET Framework 4.8", "AutoCAD API", "DWG", "Road Geometry", "Engineering QA"],
        challenge:
          "Connect real drawing data to automated road-design engines without inventing approved alignments, profiles, assembly requirements or engineering authority.",
        engineering:
          "Validate project and drawing identity, read existing ground with explicit coverage reporting, reuse deterministic assembly resolution, and permit native design writes only through controlled working-copy and approval gates.",
        evidence:
          "The 8 November 2026 native operator demonstration reached verified alignment binding, 306/306 existing-ground samples with no sample gaps, and specific assembly/data blockers. Installer and command smoke checks passed. Full operator-driven end-to-end design and controlled pilot release remain NOT READY pending source-backed engineering authorization.",
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
    eyebrow: "فهرست پروژه‌ها / ۰۲ تا ۱۰",
    heading: "سامانه‌های بیشتر، با مرزبندی فنی واقعی",
    introduction:
      "نه پروژه دیگر در حوزه مدیریت استراتژیک هوشمند، عملیات زیرساخت، پایش، طراحی راه، نرم‌افزارهای مهندسی و کنترل مدارک. وضعیت هر پروژه بر اساس مراحل تأییدشده مشخص شده است؛ نمونه‌های آموزشی با سامانه‌های آماده بهره‌برداری سازمانی یکسان در نظر گرفته نمی‌شوند.",
    countLabel: "۹ پروژه تکمیلی",
    architectureLabel: "مسیر معماری سامانه",
    stackLabel: "فناوری‌ها و حوزه فنی",
    challengeLabel: "چالش مهندسی",
    decisionLabel: "رویکرد معماری",
    evidenceLabel: "مرحله تأییدشده / محدودیت فعلی",
    disclosure: "این معرفی‌ها صرفاً فنی و عمومی‌اند؛ سورس خصوصی، نشانی‌های زیرساخت، مدل‌های کارفرما و اطلاعات محرمانه منتشر نمی‌شوند.",
    projects: [
      {
        id: "pamenar",
        name: "طراحی و پیاده‌سازی سیستم مدیریت استراتژیک هوشمند",
        domain: "هوش مصنوعی استراتژیک در کسب‌وکار / شرکت پامنار",
        tagline: "داشبورد مدیریتی و دستیار هوشمند سازمانی با اتصال به تلگرام",
        overview:
          "نمونه کاربردی و آموزشی سیستم مدیریت استراتژیک شرکت پامنار با استفاده از n8n Cloud، هوش مصنوعی Gemini و ربات تلگرام. داشبورد هفت‌صفحه‌ای، هشت شاخص عملکرد در چهار واحد سازمانی، وظایف، اخبار بازار، تحلیل مدیریتی و دستیار مبتنی بر RAG را یکپارچه می‌کند. داده‌های شاخص‌ها، وظایف و اخبار از سرویس‌های متصل دریافت می‌شوند، اما بخشی از اطلاعات سازمانی و خروجی‌های مدیریتی نمونه و آموزشی‌اند.",
        status: "نمونه آموزشی · گردش‌کارهای عملی آزمایش‌شده",
        statusTone: "in-progress",
        architecture: ["شاخص‌ها / وظایف / اخبار", "اتوماسیون n8n Cloud", "تحلیل Gemini و RAG", "داشبورد / هشدار تلگرام"],
        technologies: ["n8n Cloud", "Gemini", "Telegram Bot", "RAG", "HTML Dashboard", "KPI Monitoring", "SWOT"],
        challenge:
          "یکپارچه‌سازی پایش عملکرد، تحلیل استراتژیک، هماهنگی وظایف و هشدارهای مدیریتی با حفظ مرز روشن بین اطلاعات نمونه و داده‌های عملیاتی.",
        engineering:
          "طراحی داشبورد هفت‌صفحه‌ای و مقایسه هشت KPI هدف‌دار در چهار واحد؛ تخصیص مسئول وظایف و ارسال هشدارهای زمان‌بندی‌شده در تلگرام؛ تحلیل SWOT و برنامه پیشنهادی ۹۰ روزه با Gemini؛ و پاسخ به پرسش‌های مبتنی بر اسناد سازمان و اخبار همراه با ارجاع به منابع.",
        evidence:
          "عملکرد تخصیص وظیفه در تلگرام، اجرای زمان‌بندی روزانه و دریافت واقعی پیام هشدار مدیرعامل آزمایش شده است. چند پرسش RAG نیز بررسی شده‌اند. این پروژه یک نمونه دانشگاهی با بخشی از داده‌های نمایشی است و ادعای استقرار سازمانی در محیط تولید ندارد.",
      },
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
        domain: "یکپارچه‌سازی نرم‌افزار مهندسی و تحلیل هیدرولیکی",
        tagline: "نرم‌افزار مهندسی OpenFlows Sewer با انتشار داخلی تأییدشده",
        overview:
          "دستیار مهندسی ویندوز برای کار با مدل‌های OpenFlows Sewer که از طریق آداپتور سازگار با نسخه‌های مختلف، خواندن مدل، اجرای کنترل‌شده محاسبات موجود، بازخوانی نتایج هیدرولیکی، خروجی عیب‌یابی و بازبینی مهندسی را فراهم می‌کند. پذیرش نرم‌افزاری داخلی تکمیل شده، ولی تأیید محاسبات و طراحی هر مدل واقعی مستقل از آن است.",
        status: "انتشار شخصی و داخلی · نسخه آزمایشی ۱.۱",
        statusTone: "verified",
        architecture: ["موتور OpenFlows", "آداپتور سازگار", "محاسبه و بازخوانی مدل", "گزارش و عیب‌یابی دسکتاپ"],
        technologies: ["C# / .NET", "OpenFlows Sewer", "Windows Desktop", "Hydraulic Results", "Model Integrity", "MCP / stdio (read-only)"],
        challenge:
          "ارتباط مطمئن با نسخه‌ها و پیکربندی‌های مختلف موتور تخصصی بدون تغییر ناخواسته مدل مبدأ و بدون عبور از گیت‌های مهندسی.",
        engineering:
          "جداسازی عملیات موتور واقعی، کنترل مسیرهای نوشتن و محاسبه، ارائه فراداده فقط‌خواندنی پروژه به MCP و تفکیک صریح پذیرش نرم‌افزار از تأیید طراحی هیدرولیکی.",
        evidence:
          "هر ۱۶ مرحله پذیرش نرم‌افزار موفق بوده است. نصب‌کننده نسخه 1.1.0-beta.1 در ۶ نوامبر ۲۰۲۶ برای استفاده شخصی و داخلی تأیید شد. انتشار عمومی صادر نشده و تأیید تمام پیکربندی‌های محاسباتی یا امضای مهندسی مدل‌های واقعی ادعا نمی‌شود.",
      },
      {
        id: "access-road-designer",
        name: "Automatic Access Road Designer",
        domain: "طراحی خودکار راه دسترسی در Autodesk Civil 3D",
        tagline: "گردش‌کار طراحی راه دسترسی با خواندن مدل واقعی و کنترل‌های پذیرش",
        overview:
          "افزونه قابل‌نصب برای Autodesk Civil 3D 2021 که ورودی‌های ارائه‌شده توسط اپراتور را دریافت می‌کند، Alignment و سطح زمین موجود را از نقشه واقعی تشخیص می‌دهد و با استفاده از موتورهای توسعه‌یافته، پیش‌نمایش طراحی و انتخاب کنترل‌شده Assembly را انجام می‌دهد. تولید Native Profile، Corridor، Surface و محاسبات عملیات خاکی در نسخه‌های آزمایشی کنترل‌شده بررسی شده است. طراحی کامل پروژه واقعی همچنان به مدارک و تأییدهای مهندسی وابسته است.",
        status: "پایلوت اپراتوری · پذیرش طراحی در انتظار مدارک",
        statusTone: "in-progress",
        architecture: ["ورودی پروژه و اپراتور", "مسیر و زمین در Civil 3D", "موتور Profile و Corridor", "بازخوانی و گیت پذیرش"],
        technologies: ["Autodesk Civil 3D 2021", "C# / .NET Framework 4.8", "AutoCAD API", "DWG", "Road Geometry", "Engineering QA"],
        challenge:
          "اتصال داده‌های واقعی نقشه به محاسبات خودکار راه بدون ساختن فرض‌های غیرمجاز درباره مسیر، پروفیل طولی، مشخصات مقطع و مرجع تأییدشده طراحی.",
        engineering:
          "اعتبارسنجی هویت پروژه و نقشه، خواندن ارتفاع زمین با ثبت دقیق پوشش نمونه‌ها، انتخاب قطعی Assembly و محدودکردن نوشتن در نقشه به نسخه کاری و مسیرهای دارای مجوز مهندسی.",
        evidence:
          "دموی واقعی ۸ نوامبر ۲۰۲۶ اتصال Alignment و خواندن ۳۰۶ نمونه از ۳۰۶ نمونه سطح زمین را بدون فاصله نمونه‌برداری از دست‌رفته نشان داد و کمبودهای داده برای Assembly را گزارش کرد. نصب و تست بارگذاری موفق بوده‌اند، اما اجرای کامل طراحی توسط اپراتور و پذیرش پایلوت عملیاتی همچنان به داده‌های مهندسی معتبر نیاز دارند.",
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
