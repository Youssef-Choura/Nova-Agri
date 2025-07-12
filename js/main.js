// ==========================
// Translations (FR / AR)
// ==========================
const translations = {
    fr: {
        // ====== Meta & SEO ======
        "meta.title": "Nova'Agri Technologies – Lacto-connect, la solution de gestion laitière intelligente",
        "meta.description": "NovaAgri Technologies accompagne la transformation numérique des entreprises grâce à des solutions informatiques sur mesure, performantes et sécurisées, adaptées à tous les secteurs d’activité.",

        // ====== Statistiques ======
        "stats.support": "24/7",
        "stats.supportLabel": "Support",
        "stats.clients": "10+",
        "stats.clientsLabel": "Clients accompagnés",
        "stats.sectors": "Multi-secteurs",
        "stats.sectorsLabel": "Expertise",

        // ====== Navigation ======
        "nav.brand": "Nova'Agri Technologies",
        "nav.home": "Accueil",
        "nav.services": "Services",
        "nav.solutions": "Solutions",
        "nav.about": "À propos",
        "nav.contact": "Contact",
        "nav.cta": "Obtenir une démo",

        // ====== Hero Section ======
        "hero.line1": "Solutions informatiques",
        "hero.line2": "sur mesure",
        "hero.desc": "NovaAgri Technologies conçoit des systèmes d'information intelligents et performants, alignés sur les besoins concrets de chaque organisation. De l'agriculture aux secteurs privés et publics, nous accompagnons votre innovation numérique.",
        "hero.btn1": "Découvrir nos solutions",
        "hero.btn2": "Nos services",

        // ====== Floating Cards (Hero) ======
        "floating1.title": "Solutions sur mesure",
        "floating1.text": "Développement adapté",
        "floating2.title": "Secteurs variés",
        "floating2.text": "Public & privé",
        "floating3.title": "Oracle APEX",
        "floating3.text": "Applications web",

        // ====== Solutions Section ======
        "sol.title": "Nos solutions verticales",
        "sol.desc": "Solutions spécialisées développées et maintenues par NovaAgri Technologies",
        "sol1.badge": "Solution Vedette",
        "sol1.title": "Lacto-connect",
        "sol1.subtitle": "Plateforme intelligente pour la gestion des centres laitiers",
        "sol1.text": "Optimisez chaque aspect de votre production laitière avec notre plateforme intégrée. Du suivi en temps réel à la gestion financière, Lacto-connect centralise toutes vos opérations.",
        "sol1.f1": "Suivi du lait en temps réel",
        "sol1.f2": "Gestion RH et financière intégrée",
        "sol1.f3": "Contrôle automatisé des stocks",
        "sol1.f4": "Interface intuitive et facile d'utilisation",
        "sol1.f5": "Sécurité garantie des données",
        "sol1.btn": "Essayer gratuitement",
        "sol2.title": "Insem-connect",
        "sol2.subtitle": "Outil digital pour le suivi des inséminations",
        "sol2.text": "Solution spécialisée pour la gestion intelligente de l’insémination animale et le suivi de la reproduction au sein de votre élevage.",
        "sol2.f1": "Gestion des cycles de reproduction",
        "sol2.f2": "Planification et suivi des inséminations",
        "sol2.f3": "Alertes automatiques pour les périodes clés",
        "sol2.f4": "Historique et traçabilité des interventions",
        "common.learn": "En savoir plus",

        // ====== Features Section ======
        "lacto.title": "Pourquoi choisir NovaAgri Technologies ?",
        "lacto.desc": "Expertise, innovation et accompagnement sur mesure pour la transformation digitale de votre activité.",
        "lacto.f1.title": "Expertise sectorielle",
        "lacto.f1.desc": "Une équipe qui comprend vos métiers et propose des solutions adaptées à chaque secteur.",
        "lacto.f2.title": "Développement sur mesure",
        "lacto.f2.desc": "Des outils digitaux personnalisés pour répondre à vos besoins spécifiques et accompagner votre croissance.",
        "lacto.f3.title": "Multiutilisateur & gestion des accès",
        "lacto.f3.desc": "Profils multiples, droits personnalisés et collaboration sécurisée pour toutes vos équipes.",
        "lacto.f4.title": "Interface responsive",
        "lacto.f4.desc": "Utilisation optimale sur ordinateur, tablette et mobile, pour rester connecté où que vous soyez.",
        "lacto.f5.title": "Indicateurs stratégiques",
        "lacto.f5.desc": "Tableaux de bord, KPI et rapports pour piloter vos décisions en temps réel.",
        "lacto.f6.title": "Sécurité & fiabilité",
        "lacto.f6.desc": "Des solutions robustes et sécurisées, conformes aux standards internationaux.",
        "lacto.cta.title": "Prêt à transformer votre organisation ?",
        "lacto.cta.desc": "Contactez NovaAgri Technologies pour un accompagnement digital sur mesure.",
        "lacto.cta.btn": "Découvrez nos solutions",

        // ====== Services Section ======
        "services.title": "Nos services",
        "services.desc": "Une offre complète pour votre transformation numérique",
        "service1.title": "Développement sur mesure",
        "service1.desc": "Solutions informatiques adaptées à votre métier et vos besoins spécifiques",
        "service2.title": "Systèmes d'information",
        "service2.desc": "Conception et intégration de SI robustes et évolutifs",
        "service3.title": "Applications web Oracle APEX",
        "service3.desc": "Création d'applications web performantes avec Oracle APEX",

        // ====== Packs Section ======
        "packs.title": "Nos offres Lacto-connect",
        "packs.desc": "Choisissez l'offre qui correspond à votre exploitation laitière",
        "pack1.title": "Offre 1",
        "pack1.price": "250 DT/mois",
        "pack1.f1": "Accès à tous les services de l’application (réception et vente du lait, achats, ventes, gestion du stock, location, suivi des dépenses, avances et crédits...)",
        "pack1.f2": "Obligation d’adhésion de tous les éleveurs à l’application mobile eleveur-connecte sous 2 mois",
        "pack1.f3": "Coût par éleveur : 5 DT",
        "pack1.btn": "Choisir Offre 1",
        "pack2.title": "Offre 2",
        "pack2.price": "400 DT/mois",
        "pack2.f1": "Accès à tous les services de l’application (réception et vente du lait, achats, ventes, gestion du stock, location, suivi des dépenses, avances et crédits...)",
        "pack2.f2": "Obligation d’adhésion de 50 % des éleveurs à l’application mobile eleveur-connecte sous 2 mois",
        "pack2.f3": "Coût par éleveur : 7 DT",
        "pack2.btn": "Choisir Offre 2",
        "pack3.title": "Offre 3",
        "pack3.price": "600 DT/mois",
        "pack3.f1": "Accès à tous les services de l’application (réception et vente du lait, achats, ventes, gestion du stock, location, suivi des dépenses, avances et crédits...)",
        "pack3.f2": "Obligation d’adhésion de 25 % des éleveurs à l’application mobile eleveur-connecte sous 2 mois",
        "pack3.f3": "Coût par éleveur : 10 DT",
        "pack3.btn": "Choisir Offre 3",
        "pack4.badge": "Premium",
        "pack4.title": "Offre 4",
        "pack4.price": "700 DT/mois",
        "pack4.f1": "Accès à tous les services de l’application (réception et vente du lait, achats, ventes, gestion du stock, location, suivi des dépenses, avances et crédits...)",
        "pack4.f2": "Aucune obligation d’adhésion à eleveur-connecte",
        "pack4.f3": "Coût par éleveur : 2 DT",
        "pack4.btn": "Choisir Offre 4",

        // ====== Clientèle Section ======
        "clientele.title": "Nos domaines d'intervention",
        "clientele.desc": "Nous accompagnons tous les secteurs en quête d'innovation numérique",
        "client1.title": "Entreprises privées",
        "client1.desc": "Solutions sur mesure pour optimiser vos processus métier",
        "client2.title": "Organismes publics",
        "client2.desc": "Systèmes d'information pour le secteur public",
        "client3.title": "Secteur agricole",
        "client3.desc": "Notre terrain d'expérimentation et d'expertise historique",

        // ====== About Section ======
        "about.title": "À propos de Nova'Agri Technologies",
        "about.lead": "Entreprise spécialisée dans le développement de solutions informatiques sur mesure pour les entreprises publiques et privées.",
        "about.mission": "Notre mission : Concevoir des systèmes d'information intelligents, performants et alignés sur les besoins concrets de chaque organisation.",
        "about.mission.title": "Notre mission :",
        "about.evolution": "Comme nos premiers projets ont émergé dans le domaine agricole, notre expertise s'adresse aujourd'hui à tous les secteurs en quête d'innovation numérique et d'efficacité technologique.",
        "about.s1": "15+ ans d’expérience",
        "about.s1Label": "Expérience",
        "about.s2": "Multi-secteurs",
        "about.s2Label": "Présence mondiale",
        "about.s3": "Multi-solutions",
        "about.s3Label": "Modernes et intelligentes",

        // ====== Placeholder Section ======
        "placeholder.title": "Votre partenaire digital",
        "placeholder.text": "Digitalisation et innovation pour votre organisation",

        // ====== Contact Section ======
        "contact.return": "Retour à l'accueil",
        "contact.title": "Contactez notre équipe",
        "contact.subtitle": "Votre partenaire digital pour des solutions sur mesure",
        "contact.card.title": "Demandez votre démo ou posez vos questions",
        "contact.card.message": "Pour découvrir nos solutions Lacto-connect et Insem-connect ou pour toute question concernant nos services de développement sur mesure, notre équipe commerciale est à votre disposition.",
        "contact.phone.title": "Appelez-nous",
        "contact.email.title": "Écrivez-nous",
        "contact.card.footer": "Réponse garantie sous 24h - Notre équipe vous accompagne dans votre projet",
        "contact.card.footer.bold": "Réponse garantie sous 24h",

        // ====== Footer ======
        "footer.tagline": "Révolutionner vos processus métiers avec des solutions digitales sur mesure.",
        "footer.sol": "Solutions",
        "footer.sol1": "Lacto-connect",
        "footer.sol2": "Insem-connect",
        "footer.sol3": "Nos offres",
        "footer.sup": "Contactez-nous",
        "footer.copy": "© 2025 Nova'Agri Technologies. Tous droits réservés.",
        "footer.logo-text": "Nova'Agri Technologies"
    },

    ar: {
        // ====== Meta & SEO ======
        "meta.title": "نوفا أجري تكنولوجيز – لاكتو-كونكت، الحل الذكي لإدارة الحليب",
        "meta.description": "نوفا أجري تكنولوجيز ترافق التحول الرقمي للمؤسسات من خلال حلول معلوماتية مخصصة، فعّالة وآمنة، ومتكيفة مع جميع القطاعات.",

        // ====== Statistiques ======
        "stats.support": "24/7",
        "stats.supportLabel": "الدعم",
        "stats.clients": "10+",
        "stats.clientsLabel": "عميل مرافق",
        "stats.sectors": "متعدد القطاعات",
        "stats.sectorsLabel": "خبرة",

        // ====== Navigation ======
        "nav.brand": "نوفا أجري تكنولوجيز",
        "nav.home": "الرئيسية",
        "nav.services": "الخدمات",
        "nav.solutions": "الحلول",
        "nav.about": "من نحن",
        "nav.contact": "اتصل بنا",
        "nav.cta": "احصل على عرض",

        // ====== Hero Section ======
        "hero.line1": "حلول معلوماتية ",
        "hero.line2": "مخصصة",
        "hero.desc": "تصمم نوفا أجري تكنولوجيز أنظمة معلومات ذكية وفعالة، متوافقة مع الاحتياجات الملموسة لكل منظمة. من الزراعة إلى القطاعين الخاص والعام، نرافق ابتكاركم الرقمي.",
        "hero.btn1": "اكتشف حلولنا",
        "hero.btn2": "خدماتنا",

        // ====== Floating Cards (Hero) ======
        "floating1.title": "حلول مخصصة",
        "floating1.text": "تطوير متكيف",
        "floating2.title": "قطاعات متنوعة",
        "floating2.text": "عام وخاص",
        "floating3.title": "Oracle APEX",
        "floating3.text": "تطبيقات ويب",

        // ====== Solutions Section ======
        "sol.title": "حلولنا المتخصصة",
        "sol.desc": "حلول متخصصة مطورة ومدارة من قبل نوفا أجري تكنولوجيز",
        "sol1.badge": "الحل الرائد",
        "sol1.title": "لاكتو-كونكت",
        "sol1.subtitle": "منصة ذكية لإدارة مراكز الحليب",
        "sol1.text": "اجعل كل جانب من جوانب إنتاج الحليب الخاص بك مثاليًا مع منصتنا المتكاملة. من المتابعة في الوقت الفعلي إلى الإدارة المالية، لاكتو-كونكت يركز جميع عملياتك.",
        "sol1.f1": "متابعة الحليب في الوقت الفعلي",
        "sol1.f2": "إدارة الموارد البشرية والمالية المتكاملة",
        "sol1.f3": "مراقبة آلية للمخزون",
        "sol1.f4": "واجهة بديهية وسهلة الاستخدام",
        "sol1.f5": "أمان مضمون للبيانات",
        "sol1.btn": "جرب مجانًا",
        "sol2.title": "إنسيم-كونكت",
        "sol2.subtitle": "أداة رقمية لمتابعة التلقيح",
        "sol2.text": "حل متخصص لإدارة ذكية لعمليات التلقيح الاصطناعي ومتابعة التكاثر داخل المزرعة.",
        "sol2.f1": "إدارة دورات التكاثر",
        "sol2.f2": "جدولة ومتابعة عمليات التلقيح",
        "sol2.f3": "تنبيهات تلقائية للفترات المهمة",
        "sol2.f4": "سجل وتتبع كامل للتدخلات",
        "common.learn": "اعرف المزيد",

        // ====== Features Section ======
        "lacto.title": "لماذا تختار نوفا أجري تكنولوجيز؟",
        "lacto.desc": "خبرة وابتكار ومرافقة مخصصة لتحويل نشاطك رقمياً.",
        "lacto.f1.title": "خبرة قطاعية",
        "lacto.f1.desc": "فريق يفهم مجالك ويقدم حلولاً متكيفة مع كل قطاع.",
        "lacto.f2.title": "تطوير حسب الطلب",
        "lacto.f2.desc": "أدوات رقمية مخصصة تلبي احتياجاتك وتواكب نموك.",
        "lacto.f3.title": "متعدد المستخدمين وإدارة الصلاحيات",
        "lacto.f3.desc": "ملفات متعددة وصلاحيات مخصصة وتعاون آمن لكل فريقك.",
        "lacto.f4.title": "واجهة متجاوبة",
        "lacto.f4.desc": "استخدام مثالي على الحاسوب واللوحة والهاتف، لتبقى متصلاً في كل مكان.",
        "lacto.f5.title": "مؤشرات استراتيجية",
        "lacto.f5.desc": "لوحات تحكم ومؤشرات أداء وتقارير لدعم قراراتك في الوقت الفعلي.",
        "lacto.f6.title": "الأمان والموثوقية",
        "lacto.f6.desc": "حلول قوية وآمنة، مطابقة للمعايير الدولية.",
        "lacto.cta.title": "مستعد لتحويل مؤسستك؟",
        "lacto.cta.desc": "اتصل بنوفا أجري تكنولوجيز لمرافقة رقمية مخصصة.",
        "lacto.cta.btn": "اكتشف حلولنا",


        // ====== Services Section ======
        "services.title": "خدماتنا",
        "services.desc": "عرض كامل للتحول الرقمي الخاص بك",
        "service1.title": "تطوير مخصص",
        "service1.desc": "حلول معلوماتية متكيفة مع مهنتك واحتياجاتك المحددة",
        "service2.title": "أنظمة المعلومات",
        "service2.desc": "تصميم ودمج أنظمة معلومات قوية وقابلة للتطور",
        "service3.title": "تطبيقات ويب Oracle APEX",
        "service3.desc": "إنشاء تطبيقات ويب عالية الأداء باستخدام Oracle APEX",

        // ====== Packs Section ======
        "packs.title": "عروض لاكتو-كونكت",
        "packs.desc": "اختر العرض الذي يناسب مزرعتك",
        "pack1.title": "عرض 1",
        "pack1.price": "250 د/شهر",
        "pack1.f1": "التمتع بكامل خدمات التطبيقة (قبول وبيع الحليب، الشراءات، المبيعات، المخزون، التأجير، متابعة كل المصاريف، التسبيقات والقروض ...)",
        "pack1.f2": "إلزامية إنخراط جميع المربين في تطبيقة eleveur-connecte خلال شهرين",
        "pack1.f3": "سعر لكل مربٍ: 5 د",
        "pack1.btn": "اختر العرض 1",
        "pack2.title": "عرض 2",
        "pack2.price": "400 د/شهر",
        "pack2.f1": "التمتع بكامل خدمات التطبيقة (قبول وبيع الحليب، الشراءات، المبيعات، المخزون، التأجير، متابعة كل المصاريف، التسبيقات والقروض ...)",
        "pack2.f2": "إلزامية إنخراط 50% من المربين في تطبيقة eleveur-connecte خلال شهرين",
        "pack2.f3": "سعر لكل مربٍ: 7 د",
        "pack2.btn": "اختر العرض 2",
        "pack3.title": "عرض 3",
        "pack3.price": "600 د/شهر",
        "pack3.f1": "التمتع بكامل خدمات التطبيقة (قبول وبيع الحليب، الشراءات، المبيعات، المخزون، التأجير، متابعة كل المصاريف، التسبيقات والقروض ...)",
        "pack3.f2": "إلزامية إنخراط 25% من المربين في تطبيقة eleveur-connecte خلال شهرين",
        "pack3.f3": "سعر لكل مربٍ: 10 د",
        "pack3.btn": "اختر العرض 3",
        "pack4.badge": "مميز",
        "pack4.title": "عرض 4",
        "pack4.price": "700 د/شهر",
        "pack4.f1": "التمتع بكامل خدمات التطبيقة (قبول وبيع الحليب، الشراءات، المبيعات، المخزون، التأجير، متابعة كل المصاريف، التسبيقات والقروض ...)",
        "pack4.f2": "دون إلزامية إنخراط في eleveur-connecte",
        "pack4.f3": "سعر لكل مربٍ: 2 د",
        "pack4.btn": "اختر العرض 4",

        // ====== Clientèle Section ======
        "clientele.title": "مجالات تدخلنا",
        "clientele.desc": "نرافق جميع القطاعات الساعية للابتكار الرقمي",
        "client1.title": "الشركات الخاصة",
        "client1.desc": "حلول مخصصة لتحسين عمليات عملك",
        "client2.title": "الهيئات العامة",
        "client2.desc": "أنظمة معلومات للقطاع العام",
        "client3.title": "القطاع الزراعي",
        "client3.desc": "مجال تجربتنا وخبرتنا التاريخي",

        // ====== About Section ======
        "about.title": "من نحن في نوفا أجري تكنولوجيز",
        "about.lead": "شركة متخصصة في تطوير حلول معلوماتية مخصصة للشركات العامة والخاصة.",
        "about.mission": "مهمتنا: تصميم أنظمة معلومات ذكية وفعالة ومتوافقة مع الاحتياجات الملموسة لكل منظمة.",
        "about.mission.title": "مهمتنا:",
        "about.evolution": "إذا كانت مشاريعنا الأولى قد ظهرت في المجال الزراعي، فإن خبرتنا تتوجه اليوم إلى جميع القطاعات الساعية للابتكار الرقمي والكفاءة التكنولوجية.",
        "about.s1": "15+ سنوات خبرة",
        "about.s1Label": "خبرة",
        "about.s2": "متعدد القطاعات",
        "about.s2Label": "حضور عالمي",
        "about.s3": "متعدد الحلول",
        "about.s3Label": "حديثة وذكية",

        // ====== Placeholder Section ======
        "placeholder.title": "شريكك الرقمي",
        "placeholder.text": "الرقمنة والابتكار لمنظمتك",

        // ====== Contact Section ======
        "contact.return": "العودة إلى الصفحة الرئيسية",
        "contact.title": "اتصل بفريقنا",
        "contact.subtitle": "شريكك الرقمي لحلول مخصصة",
        "contact.card.title": "اطلب عرضك التوضيحي أو اطرح أسئلتك",
        "contact.card.message": "لاكتشاف حلولنا لاكتو-كونكت وإنسيم-كونكت أو لأي سؤال حول خدمات التطوير المخصصة لدينا، فريق المبيعات لدينا في خدمتك.",
        "contact.phone.title": "اتصل بنا",
        "contact.email.title": "راسلنا",
        "contact.card.footer": "استجابة مضمونة خلال 24 ساعة - فريقنا يرافقك في مشروعك",
        "contact.card.footer.bold": "استجابة مضمونة خلال 24 ساعة",

        // ====== Footer ======
        "footer.tagline": "طوّر عملياتك التجارية بحلول رقمية مصممة خصيصًا لك..",
        "footer.sol": "الحلول",
        "footer.sol1": "لاكتو-كونكت",
        "footer.sol2": "إنسيم-كونكت",
        "footer.sol3": "عروضنا",
        "footer.sup": "اتصل بنا",
        "footer.copy": "© 2025 نوفا أجري تكنولوجيز. جميع الحقوق محفوظة.",
        "footer.logo-text": " نوفا أجري تكنولوجيز"
    }
};


// ==========================
// DOM Elements
// ==========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const demoForm = document.getElementById('demoForm');
const navbar = document.querySelector('.navbar');
const langToggle = document.getElementById('langToggle');

// ==========================
// Language & i18n Handling
// ==========================
let currentLang = 'fr';

function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[currentLang][key] || el.textContent;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = translations[currentLang][key] || el.placeholder;
    });
}

// Persist language selection and toggle
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'ar' : 'fr';
    langToggle.setAttribute('data-lang', currentLang);
    localStorage.setItem('lang', currentLang);
    applyTranslations();
});

// ==========================
// UI: Navigation & Scrolling
// ==========================
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, i) => {
        if (hamburger.classList.contains('active')) {
            if (i === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (i === 1) bar.style.opacity = '0';
            if (i === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.querySelectorAll('.bar').forEach(bar => {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const offsetPosition = element.offsetTop - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        closeMobileMenu();
    }
}

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    const scrollPosition = window.pageYOffset + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ==========================
// UI: Animations & Effects
// ==========================
function initScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.solution-card, .feature-item, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function initParallaxEffect() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;
    function updateParallax() {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        const rate = scrolled * -0.5;
        if (scrolled < window.innerHeight) {
            heroVisual.style.transform = `translateY(${rate}px)`;
        }
    }
    let ticking = false;
    function requestParallaxUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
            setTimeout(() => ticking = false, 16);
        }
    }
    window.addEventListener('scroll', requestParallaxUpdate);
}

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}

// ==========================
// UI: Lightbox for Dashboard Images
// ==========================
document.querySelectorAll('.solution-image-placeholder img').forEach(img => {
    img.addEventListener('click', function() {
        let overlay = document.querySelector('.lightbox-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'lightbox-overlay';
            overlay.innerHTML = '<img src="" alt=""><span style="position:absolute;top:30px;right:40px;font-size:2rem;color:#fff;cursor:pointer;font-family:sans-serif;z-index:10001;">&times;</span>';
            document.body.appendChild(overlay);
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay || e.target.tagName === 'SPAN') {
                    overlay.classList.remove('active');
                    setTimeout(() => overlay.style.display = 'none', 200);
                }
            });
        }
        overlay.querySelector('img').src = this.src;
        overlay.style.display = 'flex';
        setTimeout(() => overlay.classList.add('active'), 10);
    });
});

// ==========================
// Form Handling & Validation
// ==========================
function validateForm(formData) {
    const errors = [];
    if (!formData.name || formData.name.trim().length < 2)
        errors.push('Please enter a valid name (at least 2 characters)');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email))
        errors.push('Please enter a valid email address');
    if (formData.phone && formData.phone.trim() !== '') {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, '')))
            errors.push('Please enter a valid phone number');
    }
    if (!formData.farmType)
        errors.push('Please select your farm type');
    return errors;
}

function showNotification(message, type = 'success') {
    document.querySelectorAll('.notification').forEach(n => n.remove());
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed; top: 90px; right: 20px;
        background: ${type === 'success' ? '#2E8B57' : '#dc3545'};
        color: white; padding: 16px 24px; border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15); z-index: 1001;
        transform: translateX(400px); transition: transform 0.3s ease;
        max-width: 300px; font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => { notification.style.transform = 'translateX(0)'; }, 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(demoForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        farmType: formData.get('farmType'),
        message: formData.get('message')
    };
    const errors = validateForm(data);
    if (errors.length > 0) {
        showNotification(errors[0], 'error');
        return;
    }
    const submitButton = demoForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
        showNotification('Thank you! We\'ll contact you within 24 hours to schedule your demo.');
        demoForm.reset();
        console.log('Form submitted with data:', data);
    }, 2000);
}

// ==========================
// Initialization
// ==========================
document.addEventListener('DOMContentLoaded', function () {
    // Load language from localStorage if set
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        currentLang = savedLang;
        langToggle.setAttribute('data-lang', currentLang);
        applyTranslations();
    }
    if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);
    if (demoForm) demoForm.addEventListener('submit', handleFormSubmit);
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        updateActiveNavLink();
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMobileMenu();
    });
    initScrollAnimations();
    initParallaxEffect();
    initLazyLoading();
    handleNavbarScroll();
    updateActiveNavLink();
});

// ==========================
// Global Error Handling
// ==========================
window.addEventListener('error', function (e) {
    console.error("Nova'Agri Landing Page Error:", e.error);
});
