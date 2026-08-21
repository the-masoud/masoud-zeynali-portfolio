import { PortfolioDictionary } from "../types";
import { SHARED_FACTS } from "../constants";

export const faDictionary: PortfolioDictionary = {
  locale: "fa",
  dir: "rtl",
  metadata: {
    title: "مسعود زینالی — مهندس ارشد هوش مصنوعی، زیرساخت و امنیت",
    description:
      "پورتفولیوی تخصصی و مهندسی مسعود زینالی، مهندس ارشد هوش مصنوعی با تمرکز بر AI Agents، پروتکل کانتکست مدل (MCP)، اتوماسیون زیرساخت، امنیت شبکه و عملیات هوشمند زیرساخت.",
    ogTitle: "مسعود زینالی — مهندس ارشد هوش مصنوعی، زیرساخت و امنیت",
    ogDescription:
      "پورتفولیوی تخصصی و مهندسی مسعود زینالی، مهندس ارشد هوش مصنوعی با تمرکز بر AI Agents، پروتکل کانتکست مدل (MCP)، اتوماسیون زیرساخت، امنیت شبکه و عملیات هوشمند زیرساخت.",
    ogLocale: "fa_IR",
    siteName: "مسعود زینالی",
    skipLinkText: "پرش به محتوای اصلی",
  },
  navbar: {
    navLinks: [
      { label: "درباره من", href: "#about" },
      { label: "تخصص‌ها", href: "#expertise" },
      { label: "سوابق کاری", href: "#experience" },
      { label: "پروژه‌ها", href: "#work" },
      { label: "تماس و مدارک", href: "#contact" },
    ],
    resumeLabel: "رزومه (EN)",
    resumeAriaLabel: "دانلود رزومه انگلیسی (فایل PDF)",
    mobileMenuOpenAriaLabel: "باز کردن منوی ناوبری",
    mobileMenuCloseAriaLabel: "بستن منوی ناوبری",
    currentLocale: "fa",
    langSwitch: {
      enHref: "/",
      faHref: "/fa",
      enAriaLabel: "تغییر به زبان انگلیسی",
      faAriaLabel: "زبان فارسی",
    },
    commandPalette: {
      triggerLabel: "COMMAND",
      triggerAriaLabel: "باز کردن Agent Console",
      title: "AGENT CONSOLE",
      subtitle: "LOCAL COMMAND INDEX",
      badge: "NO EXTERNAL REQUESTS",
      placeholder: "در پورتفولیو جستجو کنید یا یک دستور اجرا کنید...",
      noResultsText: "دستور مرتبطی پیدا نشد",
      quickAccessHeading: "دسترسی سریع",
      actionsHeading: "عملیات",
      footerLegend: {
        navigate: "ناوبری",
        open: "اجرا",
        close: "بستن",
      },
      commands: {
        about: {
          label: "درباره من",
          description: "سوابق حرفه‌ای و اصول مهندسی سیستم‌ها",
          keywords: ["درباره من", "داستان حرفه‌ای", "بیوگرافی", "اصول", "about", "bio"],
        },
        experience: {
          label: "سوابق کاری",
          description: "دو دهه تجربه مدیریت IT و مراحل حرفه‌ای زیرساخت",
          keywords: ["سوابق کاری", "تجربه", "مدیریت", "سابقه", "مسیر شغلی", "experience", "career"],
        },
        expertise: {
          label: "تخصص‌های فنی",
          description: "ماتریس قابلیت‌ها، معماری سیستم‌ها و تخصص‌های اصلی",
          keywords: ["تخصصهای فنی", "تخصص‌های فنی", "مهارت‌ها", "معماری", "قابلیت‌ها", "expertise", "skills"],
        },
        "ai-engineering": {
          label: "مهندسی هوش مصنوعی",
          description: "عامل‌های هوشمند، پروتکل MCP، گردش‌های کاری LLM و مهندسی کانتکست",
          keywords: [
            "هوش مصنوعی",
            "عاملهای هوشمند",
            "عامل‌های هوشمند",
            "عامل",
            "MCP",
            "AI",
            "AI Engineering",
            "AI Agents",
            "Agentic Workflows",
            "LLM",
            "Model Context Protocol",
            "Context Engineering",
          ],
        },
        infrastructure: {
          label: "زیرساخت فناوری اطلاعات",
          description: "سرورهای سازمانی، مجازی‌سازی، اکتیو دایرکتوری و سیستم‌های ترکیبی",
          keywords: [
            "زیرساخت",
            "سرور",
            "شبکه",
            "اکتیو دایرکتوری",
            "داکر",
            "Infrastructure",
            "IT Infrastructure",
            "Systems",
            "Windows Server",
            "Linux",
            "Active Directory",
            "Docker",
          ],
        },
        security: {
          label: "امنیت",
          description: "امنیت شبکه، راهبری فایروال Sophos، دسترسی امن SSH و تانلینگ",
          keywords: [
            "امنیت",
            "فایروال",
            "سوفوس",
            "Security",
            "Network Security",
            "Sophos",
            "Firewall",
            "SSH",
            "VLESS",
            "V2Ray",
          ],
        },
        infraforge: {
          label: "InfraForge",
          description: "سرور MCP توسعه‌یافته با Go برای اتوماسیون عملیات زیرساخت",
          keywords: ["InfraForge", "پروژه", "اتوماسیون", "سرور", "MCP", "server", "automation", "infrastructure"],
        },
        "reasoning-lab": {
          label: "آزمایشگاه استدلال عملیاتی",
          description: "شبیه‌سازی تعاملی اعتبارسنجی مرزهای قطعی هوش مصنوعی",
          keywords: ["آزمایشگاه", "استدلال", "شبیه سازی", "شبیه‌سازی", "امنیت عملیاتی", "lab", "reasoning"],
        },
        resume: {
          label: "دانلود رزومه",
          description: "دانلود فایل رزومه رسمی و تاییدشده به زبان انگلیسی (PDF)",
          keywords: ["دانلود رزومه", "رزومه", "سی وی", "پی دی اف", "resume", "cv", "pdf"],
        },
        contact: {
          label: "تماس",
          description: "راه‌های ارتباط مستقیم و مدارک رسمی حرفه‌ای",
          keywords: ["تماس", "ارتباط", "ایمیل", "مدارک", "contact", "email"],
        },
        github: {
          label: "گیت‌هاب",
          description: "مشاهده مخازن عمومی کد و پروژه‌های متن‌باز در گیت‌هاب",
          keywords: ["گیتهاب", "گیت هاب", "کد", "مخزن", "github", "the-masoud"],
        },
        "microsoft-transcript": {
          label: "کارنامه رسمی مایکروسافت",
          description: "مشاهده کارنامه تاییدشده مدارک رسمی مایکروسافت (Learn)",
          keywords: ["کارنامه رسمی مایکروسافت", "مایکروسافت", "مدارک", "mcse", "ترنسکریپت", "microsoft", "transcript"],
        },
        email: {
          label: "ارسال ایمیل",
          description: "ارسال مستقیم ایمیل به zeynali@outlook.com",
          keywords: ["ارسال ایمیل", "ایمیل", "پیام", "email", "mail", "outlook"],
        },
        "language-en": {
          label: "English",
          description: "Switch interface to English language",
          keywords: ["english", "en", "language", "انگلیسی"],
        },
        "language-fa": {
          label: "فارسی",
          description: "مشاهده سایت به زبان فارسی",
          keywords: ["فارسی", "fa", "farsi", "language"],
        },
      },
    },
  },
  hero: {
    badgeText: "معماری سیستم‌های سازمانی",
    securityText: "سیستم‌های مبتنی بر امنیت",
    aiAgentsText: "عامل‌های هوشمند (AI Agents) و MCP",
    nameLine1: "مسعود زینالی",
    nameLine2: "",
    specialtyAi: "مهندسی هوش مصنوعی",
    specialtyInfra: "زیرساخت فناوری اطلاعات",
    specialtySecurity: "امنیت",
    specializationRole: "مهندس ارشد هوش مصنوعی — عامل‌ها، MCP و زیرساخت",
    statement:
      "نزدیک به دو دهه تجربه مهندسی زیرساخت و فناوری اطلاعات سازمانی، در کنار تخصص مهندسی ارشد هوش مصنوعی با تمرکز بر عامل‌های هوشمند (AI Agents)، پروتکل کانتکست مدل (MCP)، اتوماسیون زیرساخت و عملیات امن مبتنی بر هوش مصنوعی.",
    ctaPrimary: {
      label: "مشاهده پروژه‌ها",
      href: "#work",
      ariaLabel: "مشاهده پروژه‌ها",
    },
    ctaSecondary: {
      label: "درباره من",
      href: "#about",
      ariaLabel: "درباره من",
    },
    metricsHeader: "شاخص‌های مقیاس و رهبری فنی",
    metricsSubheader: "مقیاس سازمانی",
    metrics: [
      {
        id: "exp",
        value: `${SHARED_FACTS.metrics.itExperienceYears} سال`,
        label: "زیرساخت و فناوری اطلاعات",
        annotation: "مهندسی مستمر سیستم‌ها و عملیات زیرساخت سازمانی",
        tag: "DOMAIN::INFRA_SYSTEMS",
      },
      {
        id: "team",
        value: SHARED_FACTS.metrics.teamSupervisedCount,
        label: "هدایت و نظارت بر تیم فنی",
        annotation: "سرپرستی مستقیم مهندسان، مدیران سیستم و متخصصان IT",
        tag: "LEADERSHIP::TEAM_GOV",
      },
      {
        id: "endpoints",
        value: SHARED_FACTS.metrics.endpointsCount,
        label: "مدیریت ایستگاه‌های کاری ویندوز",
        annotation: "مدیریت متمرکز اکتیو دایرکتوری، Group Policy و کلاینت‌ها",
        tag: "SCALE::ENDPOINT_OPS",
      },
    ],
  },
  story: {
    sectionMarker: "01 / معرفی حرفه‌ای",
    technicalMarker: "معماری سیستم‌ها",
    heading: "مسیر رشد مهندسی و راهبری فنی",
    subheading: "از پایه‌های عملیاتی تا هدایت و مدیریت فناوری اطلاعات سازمانی.",
    domainMarker: "DOMAIN::SYSTEMS_ENGINEERING",
    governanceMarker: "GOVERNANCE::ENTERPRISE_IT",
    focusMarker: "FOCUS::RESILIENT_OPERATIONS",
    paragraphs: [
      "مسیر حرفه‌ای مسعود از پشتیبانی عملیاتی IT، عیب‌یابی و عملیات شبکه آغاز شد؛ پایه‌ای مستحکم در محیط‌های کلاینت ویندوز، پشتیبانی اکتیو دایرکتوری، Group Policy و رفع اختلالات در سطح سازمان. با گسترش مسئولیت‌ها، او به طراحی و مدیریت زیرساخت شبکه سازمانی، امنیت و مدیریت سرورهای سازمان، و راهبری متمرکز بیش از 300 ایستگاه کاری ویندوز پرداخت.",
      "با ارتقای نقش حرفه‌ای، مسعود به مدیریت و هدایت دپارتمان فناوری اطلاعات وارد شد؛ راهبری توسعه زیرساخت، تدوین نقشه راه فناوری، نظارت بر پروژه‌های کلیدی، و هدایت بیش از 15 کارشناس و متخصص در حوزه‌های شبکه، امنیت، هلپ‌دسک و زیرساخت. امروزه، نزدیک به دو دهه تجربه در فناوری اطلاعات سازمانی و امنیت شبکه، شالوده مسیر مهندسی او به عنوان مهندس ارشد هوش مصنوعی با تمرکز بر عامل‌های هوشمند (AI Agents)، پروتکل کانتکست مدل (MCP)، اتوماسیون زیرساخت و جریان‌های کاری هوشمند است.",
    ],
    principlesHeader: "اصول و رویکردهای مهندسی",
    principlesSubheader: "اصول کلیدی",
    principles: [
      {
        id: "reliability",
        label: "پایداری (Reliability)",
        description: "زیرساخت باید همواره پایدار، قابل اتکا و در دسترس باقی بماند.",
        tag: "INFRA::RELIABILITY",
      },
      {
        id: "security",
        label: "امنیت (Security)",
        description: "تصمیمات شبکه و زیرساخت باید بر مبنای تفکر امنیتی اتخاذ شوند.",
        tag: "SECURITY::DESIGN",
      },
      {
        id: "automation",
        label: "اتوماسیون (Automation)",
        description: "فرآیندهای تکرارشونده عملیاتی باید به صورت استاندارد خودکارسازی شوند.",
        tag: "OPS::AUTOMATION",
      },
      {
        id: "leadership",
        label: "رهبری فنی (Leadership)",
        description: "تصمیمات فنی باید به دستاوردهای ملموس و راهبردی برای سازمان منتهی شوند.",
        tag: "LEADERSHIP::OUTCOMES",
      },
    ],
  },
  career: {
    sectionMarker: "02 / سوابق شغلی",
    technicalMarker: "مسیر حرفه‌ای",
    heading: "مسیر شغلی و پیشرفت در رهبری فنی",
    subheading:
      "تداوم پیشرفت در طول نزدیک به دو دهه تجربه حرفه‌ای در فناوری اطلاعات؛ ارتقا از پشتیبانی و شبکه تا مدیریت زیرساخت و هدایت دپارتمان IT.",
    employer: {
      name: "مهندسین مشاور تهران رایمند",
      tenure: "2007 — تاکنون",
      location: "تهران، ایران",
    },
    verifiedScaleLabel: "مقیاس تأییدشده:",
    verifiedContextLabel: "اطلاعات تأییدشده",
    stages: [
      {
        id: "help-desk-specialist",
        stageNumber: "01",
        stageCategory: "پایه عملیاتی",
        title: "کارشناس هلپ‌دسک و پشتیبانی شبکه",
        duration: "6 سال",
        narrative:
          "ایجاد پایه‌های عمیق فنی از طریق عیب‌یابی سیستم‌ها، پشتیبانی زیرساخت شبکه، سرویس‌های اکتیو دایرکتوری و محیط‌های کلاینت ویندوز.",
        responsibilitiesHeader: "شرح وظایف و محدوده مسئولیت:",
        responsibilities: [
          "پشتیبانی فنی و عیب‌یابی پیشرفته زیرساخت شبکه، سرویس‌های اکتیو دایرکتوری و محیط‌های کلاینت ویندوز.",
          "پیاده‌سازی و مدیریت متمرکز Group Policy (GPO) و رفع ریشه‌ای حوادث سخت‌افزاری و نرم‌افزاری در سطح سازمان.",
          "رسیدگی به تیکت‌های پشتیبانی کاربران همزمان با ارتقای پایداری، سرعت پاسخ‌دهی و کیفیت خدمات IT.",
        ],
        tag: "ROLE::SUPPORT_FOUNDATION",
      },
      {
        id: "network-manager",
        stageNumber: "02",
        stageCategory: "مدیریت زیرساخت",
        title: "مدیر شبکه",
        duration: "7 سال",
        narrative:
          "طراحی، پیاده‌سازی و مدیریت معماری شبکه شرکت همگام با تضمین دسترسی‌پذیری، پایداری و امنیت سرویس‌های حیاتی داخلی.",
        responsibilitiesHeader: "شرح وظایف و محدوده مسئولیت:",
        responsibilities: [
          "مدیریت و تأمین امنیت سرورهای سازمانی از جمله Microsoft Exchange و MDaemon.",
          "مدیریت فایروال سوفوس (Sophos Firewall) جهت کنترل ترافیک، مانیتورینگ، NAT، اعمال سیاست‌ها و حفاظت پیرامونی.",
          "مدیریت متمرکز بیش از 300 ایستگاه کاری ویندوز شامل مدیریت وصله‌ها (Patch Management)، توزیع نرم‌افزار و اتوماسیون با ManageEngine Endpoint Central.",
        ],
        scaleHighlight: "بیش از 300 کلاینت ویندوز",
        tag: "ROLE::NETWORK_INFRA",
      },
      {
        id: "deputy-head",
        stageNumber: "03",
        stageCategory: "رهبری فناوری اطلاعات",
        title: "معاون دپارتمان فناوری اطلاعات",
        duration: "5 سال اخیر — تاکنون",
        narrative:
          "هدایت دپارتمان IT، برنامه‌ریزی توسعه زیرساخت، تدوین نقشه راه فناوری، نظارت بر پروژه‌های حیاتی، و مشارکت در بودجه‌بندی و چرخه عمر تجهیزات فناوری.",
        responsibilitiesHeader: "شرح وظایف و محدوده مسئولیت:",
        responsibilities: [
          "سرپرستی مستقیم، ارزیابی و هدایت بیش از 15 کارشناس و متخصص فنی در بخش‌های شبکه، امنیت، هلپ‌دسک و زیرساخت.",
          "برنامه‌ریزی توسعه زیرساخت، تدوین نقشه راه فناوری و نظارت بر اجرای پروژه‌های حیاتی فناوری اطلاعات.",
          "تخصیص منابع، مشارکت در بودجه‌بندی IT، نظارت بر چرخه عمر دارایی‌های فناوری و ارتقای توانمندی‌های تخصصی تیم.",
        ],
        scaleHighlight: "بیش از 15 متخصص و کارشناس فنی",
        tag: "ROLE::IT_LEADERSHIP",
      },
    ],
  },
  expertise: {
    sectionMarker: "03 / تخصص‌ها",
    technicalMarker: "ماتریس فنی",
    heading: "چشم‌انداز فناوری و تخصص‌ها",
    subheading:
      "ماتریس ساختاریافته مهندسی شامل پلتفرم‌های سازمانی، امنیت شبکه، سرویس‌های ارتباطی، زیرساخت ابری و Edge، راهبری کلاینت‌ها، و مهندسی ارشد هوش مصنوعی در حوزه عامل‌ها و پروتکل MCP.",
    matrixHeaders: {
      domain: "حوزه / شاخه تخصصی",
      capability: "تمرکز قابلیتی",
      technologies: "فناوری‌های تأییدشده",
    },
    verifiedScaleLabel: "مقیاس تأییدشده:",
    domains: [
      {
        id: "infrastructure-platforms",
        index: "01",
        title: "زیرساخت و پلتفرم‌ها",
        capability:
          "مدیریت و عملیات سرورهای Windows Server و Linux همراه با Active Directory، Group Policy، Docker و سرویس‌های پشتیبان سازمانی.",
        technologies: [
          "Windows Server",
          "Linux",
          "Active Directory",
          "Group Policy",
          "Docker",
        ],
      },
      {
        id: "networking-security",
        index: "02",
        title: "شبکه و امنیت",
        capability:
          "امنیت شبکه و مدیریت ترافیک شامل سیاست‌های فایروال، NAT، DNS، SSH، مکانیزم‌های دفاعی، مانیتورینگ شبکه و راهکارهای ارتباطی امن.",
        technologies: [
          "Sophos Firewall",
          "NAT",
          "DNS",
          "SSH",
          "Fail2ban",
          "Network Monitoring",
          "V2Ray / VLESS",
        ],
      },
      {
        id: "messaging-collaboration",
        index: "03",
        title: "سرویس‌های ایمیل و ارتباطی",
        capability:
          "مدیریت زیرساخت ایمیل و ارتباطات امن سازمانی در Microsoft Exchange، MDaemon، Mailcow و مدیریت گواهی‌های SSL/TLS.",
        technologies: [
          "Microsoft Exchange",
          "MDaemon",
          "Mailcow",
          "SSL / TLS",
        ],
      },
      {
        id: "web-cloud",
        index: "04",
        title: "وب و خدمات ابری",
        capability:
          "سرویس‌های وب لینوکسی و مدیریت ترافیک ابری با Nginx، Caddy، Cloudflare DNS، Cloudflare Workers، Redirects و Domain Forwarding.",
        technologies: [
          "Nginx",
          "Caddy",
          "Cloudflare DNS",
          "Cloudflare Workers",
          "Redirects",
          "Domain Forwarding",
        ],
      },
      {
        id: "endpoint-operations",
        index: "05",
        title: "عملیات ایستگاه‌های کاری (Endpoints)",
        capability:
          "مدیریت متمرکز کلاینت‌های ویندوز در مقیاس بیش از 300 سیستم، شامل مدیریت وصله‌ها، توزیع نرم‌افزار، اتوماسیون و کنترل با ManageEngine Endpoint Central.",
        technologies: [
          "ManageEngine Endpoint Central",
          "Windows Endpoints",
          "Patch Management",
          "Software Distribution",
          "Endpoint Automation",
        ],
        scaleMarker: "300+ سیستم ویندوز تحت مدیریت",
      },
      {
        id: "ai-engineering-agents-mcp",
        index: "06",
        title: "مهندسی هوش مصنوعی، عامل‌ها و MCP",
        capability:
          "مهندسی ارشد هوش مصنوعی با تمرکز بر سیستم‌های مبتنی بر عامل (Agentic Workflows)، پروتکل کانتکست مدل (MCP)، عملیات زیرساخت با پشتیبانی LLM، استدلال عملیاتی و اتوماسیون زیرساخت مدرن.",
        technologies: [
          "AI Agents",
          "Agentic Workflows",
          "Model Context Protocol (MCP)",
          "Large Language Models",
          "LLM Integration",
          "Infrastructure Automation",
          "Operational Reasoning",
          "Log Analysis",
          "AI-assisted Troubleshooting",
          "Tool Integration",
          "Context Engineering",
          "Scripting & Automation",
        ],
      },
    ],
  },
  infraForge: {
    sectionMarker: "04 / پروژه‌های منتخب",
    sectionCategory: "مطالعه موردی",
    sectionHeading: "مهندسی در عمل",
    sectionSupporting:
      "نمونه‌ای از پروژه‌های مهندسی در مرز زیرساخت و هوش مصنوعی؛ جایی که عملیات سیستم‌ها، کنترل‌های امنیتی و جریان‌های کاری عامل‌های هوشمند به هم می‌پیوندند.",
    projectMarker: "پروژه 01 / ویژه",
    caseDossierLabel: "پرونده مهندسی",
    projectName: SHARED_FACTS.projects.infraForge.name,
    descriptor:
      "عملیات زیرساخت مبتنی بر عامل‌های هوشمند از طریق پروتکل کانتکست مدل (MCP)",
    classification: "پروژه مهندسی شخصی",
    developmentState: "در حال توسعه فعال",
    repositoryAction: "مشاهده ریپازیتوری",
    repositoryUrl: SHARED_FACTS.projects.infraForge.repositoryUrl,
    repositoryAriaLabel: `مشاهده ریپازیتوری ${SHARED_FACTS.projects.infraForge.name} در گیت‌هاب (در تب جدید باز می‌شود)`,
    problem: {
      heading: "مسئله (The Problem)",
      copy: "ابزارهای زیرساختی مبتنی بر هوش مصنوعی زمانی ارزش واقعی پیدا می‌کنند که بتوانند محیط واقعی سرورها را درک کنند؛ اما دسترسی مستقیم و نامحدود به زیرساخت، مخاطرات جدی امنیتی و عملیاتی در پی دارد. پروژه InfraForge به عنوان یک واسط کنترل‌شده میان ابزارهای هوش مصنوعی و زیرساخت لینوکس طراحی شده است، با تأکید بر اصل حداقل دسترسی، کشف ساختاریافته و مرزهای مشخص عملیاتی.",
    },
    systemIntent: {
      heading: "هدف سیستم (System Intent)",
      copy: "ابزار InfraForge به عنوان یک سرور/ابزار مبتنی بر پروتکل MCP طراحی شده است تا سرورها را بازنمایی کرده، فرآیند کشف و مدیریت موجودی سرورها را تسهیل کند، و بستری ایمن برای تعامل هوش مصنوعی با زیرساخت فراهم سازد بدون اینکه دسترسی نامحدود شل (Shell) پیش‌فرض قرار گیرد.",
    },
    architecture: {
      heading: "معماری مفهومی",
      flowLabel: "جریان یکپارچه‌سازی",
      subLabel: "مرز مفهومی پنج‌مرحله‌ای",
      ariaLabel: "نمودار جریان معماری مفهومی InfraForge",
      nodes: [
        {
          id: "node-01",
          step: "01",
          primaryLabel: "کلاینت هوش مصنوعی / MCP",
          supportingLabel: "جریان کاری کمکی",
        },
        {
          id: "node-02",
          step: "02",
          primaryLabel: "INFRAFORGE",
          supportingLabel: "لایه کنترل و کانتکست",
        },
        {
          id: "node-03",
          step: "03",
          primaryLabel: "دسترسی سرور",
          supportingLabel: "واسط SSH محدودشده",
        },
        {
          id: "node-04",
          step: "04",
          primaryLabel: "زیرساخت لینوکس",
          supportingLabel: "سرورهای مقصد",
        },
        {
          id: "node-05",
          step: "05",
          primaryLabel: "کشف و فهرست‌برداری",
          supportingLabel: "کانتکست ساختاریافته زیرساخت",
        },
      ],
    },
    principles: {
      heading: "اصول مهندسی",
      flowLabel: "مرزهای عملیاتی",
      subLabel: "چهار اصل کلیدی پروژه",
      items: [
        {
          id: "least-privilege",
          number: "01",
          title: "حداقل دسترسی",
          titleLtr: "Least Privilege",
          statement:
            "دسترسی زیرساخت باید منحصراً به قابلیت‌های لازم برای انجام وظیفه عملیاتی موردنظر محدود شود.",
          tag: "PRINCIPLE::01",
        },
        {
          id: "credential-hygiene",
          number: "02",
          title: "حفاظت از کلیدها و اعتبارسنجی",
          statement:
            "اطلاعات احراز هویت، کلیدهای خصوصی و داده‌های حساس دسترسی باید به عنوان داده محافظت‌شده خارج از لاگ‌های عملیاتی قرار گیرند.",
          tag: "PRINCIPLE::02",
        },
        {
          id: "controlled-onboarding",
          number: "03",
          title: "افزودن کنترل‌شده سرورها",
          statement:
            "فرآیند Onboarding سرورها مرزهای دسترسی مشخص و رفتار مانیتورینگ قابل پیش‌بینی ایجاد می‌کند و متکی به دسترسی ادمین نامحدود نیست.",
          tag: "PRINCIPLE::03",
        },
        {
          id: "automation-with-guardrails",
          number: "04",
          title: "اتوماسیون با چارچوب‌های ایمنی",
          statement:
            "جریان‌های کاری تکراری زیرساخت را می‌توان با حفظ کامل مرزهای امنیتی و دامنه مشخص عملیاتی خودکارسازی کرد.",
          tag: "PRINCIPLE::04",
        },
      ],
    },
    developmentScope: {
      heading: "دامنه توسعه و فناوری‌ها",
      flowLabel: "فناوری‌های تأییدشده",
      subLabel: "محدوده کاری",
      ariaLabel: "فناوری‌های تأییدشده و حوزه‌های تمرکز پروژه",
      tags: [
        "Go",
        "Model Context Protocol",
        "SSH",
        "Linux",
        "PowerShell",
        "Infrastructure Inventory",
        "Inventory Reconciliation",
        "Server Onboarding",
        "Automation",
      ],
    },
    engineeringNotes: {
      heading: "یادداشت‌های مهندسی و الزامات امنیتی",
      flowLabel: "تمرکز پیاده‌سازی",
      subLabel: "معماری ایمن",
      serverOnboarding: {
        heading: "افزودن و راه‌اندازی سرور (Server Onboarding)",
        copy: "یک حساب کاربری مانیتورینگ اختصاصی به نام `infra` با کنترل‌های محدودکننده SSH به عنوان بخشی از رویکرد حداقل دسترسی پیکربندی شده است تا اختیارات غیرضروری در نشست‌های ارتباطی کاهش یابد.",
      },
      inventoryReconciliation: {
        heading: "همگام‌سازی موجودی سرورها (Inventory Reconciliation)",
        copy: "همگام‌سازی ساختاریافته بر حفظ بازنمایی یکپارچه و دقیق از زیرساخت‌های شناسایی‌شده با گذر زمان و تغییرات سرورها تمرکز دارد.",
      },
      securityConstraints: {
        heading: "الزامات طراحی امنیتی",
        governanceLabel: "حاکمیت: الزامات و محدودیت‌های طراحی",
        ariaLabel: "الزامات و محدودیت‌های طراحی امنیتی",
        items: [
          "مرزهای احراز هویت مدیریتی و کلاینت MCP",
          "محافظت از اطلاعات احراز هویت SSH و کلیدهای خصوصی",
          "حفظ اطلاعات حساس خارج از لاگ‌های عملیاتی",
          "الگوی دسترسی محدودشده به سرورها بر پایه حداقل دسترسی",
          "محدودیت‌های دسترسی شبکه و مرزهای عملیاتی",
          "فرآیند کنترل‌شده افزودن و مدیریت چرخه عمر سرورها",
        ],
      },
    },
  },
  lab: {
    sectionMarker: "05 / تجربه تعاملی",
    technicalLabel: "شبیه‌سازی صرفاً مرورگری",
    sectionHeading: "آزمایشگاه استدلال عملیاتی (Reasoning Lab)",
    supportingStatement:
      "مشاهده نحوه تبدیل درخواست‌های عامل‌های هوشمند به مرزهای مشخص عملیاتی، رفتارهای قابل پیش‌بینی سیستم و اتوماسیون امن زیرساخت.",
    simulationDisclosureLabel: "دموی تعاملی شبیه‌سازی‌شده",
    simulationDisclosureCopy:
      "شبیه‌سازی صرفاً در مرورگر اجرا می‌شود. هیچ اتصال زنده به سرورها، اجرای راه دور یا درخواست به داده‌های واقعی سرور انجام نمی‌گیرد.",
    selector: {
      header: "انتخاب سناریو",
      countLabel: "3 سناریوی آماده",
    },
    workflow: {
      headerSubLabel: "استدلال ساختاریافته",
      stage1Label: "01 / درخواست (Request)",
      stage2Label: "02 / مرز عملیاتی (Operational Boundary)",
      stage3Label: "03 / رفتار مورد انتظار سیستم (Expected Behavior)",
    },
    scenarios: [
      {
        id: "scenario-01",
        scenarioNumber: "سناریو 01",
        title: "کشف و فهرست‌برداری سرورها (Discover Inventory)",
        category: "شناسایی و کشف",
        request:
          "بازنمایی وضعیت زیرساخت لینوکس به عنوان یک نمای ساختاریافته از موجودی سرورها.",
        boundary:
          "حفظ محدوده در سطح شناسایی و اینونتوری؛ عدم استفاده از دسترسی نامحدود شل به عنوان الگوی پیش‌فرض تعامل.",
        expectedBehavior:
          "نمایش اطلاعات زیرساخت به صورت کانتکست ساختاریافته که پیش از هر اقدام عملیاتی گسترده‌تر قابل بررسی و اعتبارسنجی باشد.",
      },
      {
        id: "scenario-02",
        scenarioNumber: "سناریو 02",
        title: "بررسی مرز دسترسی (Review Access Boundary)",
        category: "کنترل دسترسی",
        request:
          "ارزیابی مرز دسترسی برای یک جریان کاری مانیتورینگ در زیرساخت سرورهای لینوکس.",
        boundary:
          "اولویت دادن به حساب مانیتورینگ اختصاصی infra با دسترسی محدود SSH در مقایسه با دسترسی ادمین نامحدود.",
        expectedBehavior:
          "حفظ فرآیند مانیتورینگ در یک مرز دسترسی مشخص و بر پایه اصل حداقل اختیارات.",
      },
      {
        id: "scenario-03",
        scenarioNumber: "سناریو 03",
        title: "همگام‌سازی موجودی سرورها (Reconcile Inventory)",
        category: "یکپارچگی وضعیت",
        request:
          "وضعیت ساختاریافته اینونتوری با آخرین اطلاعات شناخته‌شده سرورها تطابق ندارد.",
        boundary:
          "همگام‌سازی بازنمایی اطلاعات بدون ایجاد تغییرات خودکار یا اصلاحات کنترل‌نشده در زیرساخت.",
        expectedBehavior:
          "شناسایی اختلاف به عنوان یک مورد همگام‌سازی کنترل‌شده و به‌روزرسانی بازنمایی ساختاریافته به شکلی یکپارچه.",
      },
    ],
  },
  professionalRecord: {
    sectionMarker: "06 / مدارک و ارتباط مستقیم",
    technicalLabel: "سوابق حرفه‌ای تأییدشده",
    sectionHeading: "رزومه، مدارک تخصصی و ارتباط مستقیم",
    supportingStatement:
      "مجموعه‌ای مختصر از سوابق رسمی، مدارک تخصصی تأییدشده مایکروسافت، سوابق تحصیلی و راه‌های ارتباط مستقیم.",
    resume: {
      heading: "رزومه حرفه‌ای",
      supportingCopy:
        "دانلود فایل رزومه انگلیسی تأییدشده که به عنوان منبع موثق برای اطلاعات این وب‌سایت استفاده شده است.",
      formatBadge: "فایل PDF / انگلیسی",
      downloadUrl: SHARED_FACTS.person.resumeUrl,
      fileName: SHARED_FACTS.person.resumeFileName,
      actionLabel: "دانلود رزومه (PDF انگلیسی)",
    },
    transcript: {
      heading: "مدارک تخصصی مایکروسافت",
      actionLabel: "مشاهده کارنامه رسمی در مایکروسافت",
      ariaLabel: "مشاهده کارنامه رسمی در Microsoft Learn (در تب جدید باز می‌شود)",
      url: SHARED_FACTS.person.microsoftTranscriptUrl,
    },
    educationHeading: "سوابق تحصیلی",
    certifications: [
      {
        id: "mcse-server-infra",
        name: "MCSE: Server Infrastructure",
        qualification: "Microsoft Certified Solutions Expert",
        issuer: "Microsoft",
        year: "2012",
      },
      {
        id: "mcse-cloud-infra",
        name: "MCSE: Cloud Platform and Infrastructure",
        qualification: "Microsoft Certified Solutions Expert",
        issuer: "Microsoft",
        year: "2016",
      },
    ],
    education: [
      {
        id: "edu-mba",
        program: "کارشناسی ارشد مدیریت کسب‌وکار (MBA)",
        institution: "دانشگاه تهران",
        status: "در حال تحصیل (In Progress)",
      },
      {
        id: "edu-associate-it",
        program: "کاردانی فناوری اطلاعات (IT)",
        institution: "دانشگاه کرج",
      },
    ],
    contact: {
      heading: "ارتباط مستقیم",
      name: "مسعود زینالی",
      title: "مدیر فناوری اطلاعات | متخصص زیرساخت شبکه و امنیت",
      specialization: "مهندس ارشد هوش مصنوعی — عامل‌ها، MCP و زیرساخت",
      location: "تهران، ایران",
      email: SHARED_FACTS.person.email,
      emailActionLabel: "ارسال ایمیل به مسعود",
      githubDisplay: SHARED_FACTS.person.githubDisplay,
      githubUrl: SHARED_FACTS.person.githubUrl,
      githubActionLabel: "مشاهده گیت‌هاب",
      githubAriaLabel: "مشاهده پروفایل گیت‌هاب (در تب جدید باز می‌شود)",
    },
  },
  footer: {
    brandName: "مسعود زینالی",
    brandTag: "مهندسی سیستم‌ها",
    phaseLabel: "PHASE 1 FOUNDATION",
    domainSummary: "زیرساخت IT · امنیت · اتوماسیون هوش مصنوعی",
    copyrightYear: 2026,
  },
  schema: {
    personJobTitle: "IT Manager | Network Infrastructure & Security Specialist",
    knowsAbout: [
      "Artificial Intelligence Engineering",
      "AI Agents",
      "Model Context Protocol (MCP)",
      "Infrastructure Automation",
      "AI-assisted Infrastructure Operations",
    ],
    infraForgeDescription:
      "پروژه مهندسی شخصی در زمینه کاوش و کنترل عملیات هوشمند زیرساخت از طریق Model Context Protocol.",
    credentialDescriptions: {
      "mcse-server-infra": "Microsoft Certified Solutions Expert — 2012",
      "mcse-cloud-infra": "Microsoft Certified Solutions Expert — 2016",
    },
  },
};
