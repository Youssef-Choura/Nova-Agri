// js/main.js
// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const demoForm = document.getElementById('demoForm');
const navbar = document.querySelector('.navbar');


const translations = {
    fr: {
        "meta.title": "Nova'Agri Technologies – Lacto-connect, la solution de gestion laitière intelligente",
        "meta.description": "Lacto-connect révolutionne la gestion des exploitations laitières avec un suivi en temps réel, gestion RH/financière et sécurité des données.",
        "hero.line1": "Lacto-connect :",
        "hero.line2": "La révolution de la gestion laitière",
        "hero.desc": "Transformez votre exploitation laitière avec Lacto-connect. Suivi en temps réel, gestion RH et financière, contrôle des stocks - tout en un. Sécurité garantie et facilité d'utilisation pour les producteurs laitiers modernes.",
        "hero.btn1": "Démo gratuite",
        "hero.btn2": "Découvrir Lacto-connect",
        "stats.farms": "100+",
        "stats.farmsLabel": "Exploitations laitières",
        "floating1.title": "Suivi lait temps réel",
        "floating1.text": "Qualité & traçabilité",
        "floating2.title": "Gestion RH & Finance",
        "floating2.text": "Personnel & comptabilité",
        "floating3.title": "Gestion des stocks",
        "floating3.text": "Inventaire automatisé",
        "nav.brand": "Nova'Agri Technologies",
        "nav.home": "Accueil",
        "nav.solutions": "Solutions",
        "nav.features": "Fonctionnalités",
        "nav.about": "À propos",
        "nav.contact": "Contact",
        "nav.cta": "Obtenir une démo",
        "stats.uptime": "99,9 %",
        "stats.uptimeLabel": "Disponibilité",
        "stats.support": "24/7",
        "stats.supportLabel": "Support",
        "sol.title": "Nos solutions Nova'Agri",
        "sol.desc": "Technologies avancées pour révolutionner vos opérations agricoles",
        "sol1.badge": "Solution principale",
        "sol1.title": "Lacto-connect",
        "sol1.subtitle": "La solution complète de gestion laitière",
        "sol1.text": "Optimisez chaque aspect de votre production laitière avec notre plateforme intégrée. Du suivi en temps réel à la gestion financière, Lacto-connect centralise toutes vos opérations.",
        "sol1.f1": "Suivi du lait en temps réel",
        "sol1.f2": "Gestion RH et financière intégrée",
        "sol1.f3": "Contrôle automatisé des stocks",
        "sol1.f4": "Interface intuitive et facile d'utilisation",
        "sol1.f5": "Sécurité garantie des données",
        "sol1.btn": "Essayer gratuitement",
        "sol2.title": "Insem-connect",
        "sol2.text": "Solution complémentaire pour la gestion globale des approvisionnements et de la logistique agricole.",
        "sol2.f1": "Gestion des approvisionnements",
        "sol2.f2": "Optimisation logistique",
        "sol2.f3": "Suivi des livraisons",
        "sol2.btn": "En savoir plus",
        "common.learn": "En savoir plus",
        "feat.title": "Pourquoi choisir Nova'Agri ?",
        "feat.desc": "Conçu spécifiquement pour les défis uniques des opérations agricoles",
        "feat1.title": "Design mobile-first",
        "feat1.text": "Accédez à toutes les fonctionnalités depuis n’importe quel appareil, sur votre ferme ou pendant le transport.",
        "feat2.title": "Synchronisation en temps réel",
        "feat2.text": "Mises à jour instantanées sur tous les appareils pour garantir que tout le monde dispose des dernières informations.",
        "feat3.title": "Sécurisé & conforme",
        "feat3.text": "Sécurité de niveau bancaire avec conformité totale aux réglementations agricoles.",
        "feat4.title": "Analyses avancées",
        "feat4.text": "Prenez des décisions basées sur les données grâce à des rapports et des analyses complets.",
        "feat5.title": "Intégration facile",
        "feat5.text": "S'intègre facilement aux systèmes de gestion agricole existants.",
        "feat6.title": "Ultra-rapide",
        "feat6.text": "Performances optimisées même dans les zones à faible connectivité.",
        "about.title": "À propos de Nova'Agri Technologies",
        "about.lead": "Nous sommes passionnés par l'autonomisation des agriculteurs et des entreprises agricoles grâce à des solutions technologiques de pointe.",
        "about.text": "Fondée par des experts agricoles et des innovateurs technologiques, Nova'Agri comprend les défis uniques des exploitations modernes. Nos solutions sont construites de A à Z pour répondre aux problèmes réels de distribution du lait et de gestion de la chaîne alimentaire.",
        "about.s1": "5+ ans d’expérience",
        "about.s1Label": "Expérience",
        "about.s2": "50+ pays",
        "about.s2Label": "Présence mondiale",
        "about.s3": "99 %",
        "about.s3Label": "Satisfaction client",
        "demo.title": "Prêt à transformer votre ferme ?",
        "demo.text": "Découvrez comment Nova'Agri peut révolutionner vos opérations agricoles. Obtenez une démo personnalisée adaptée à vos besoins.",
        "form.name": "Votre nom",
        "form.email": "Adresse e-mail",
        "form.phone": "Numéro de téléphone",
        "form.select": "Sélectionnez le type d’exploitation",
        "form.opt1": "Exploitation laitière",
        "form.opt2": "Exploitation animale",
        "form.opt3": "Production culturale",
        "form.opt4": "Agriculture mixte",
        "form.opt5": "Transport",
        "form.message": "Parlez-nous de vos besoins spécifiques",
        "form.submit": "Obtenez votre démo gratuite",
        "footer.tagline": "Révolutionner l'agriculture grâce à des solutions technologiques intelligentes.",
        "footer.sol": "Solutions",
        "footer.sol1": "Suivi du lait",
        "footer.sol2": "Distribution alimentaire",
        "footer.sol3": "Gestion des transports",
        "footer.sol4": "Analyses",
        "footer.comp": "À propos",
        "footer.comp1": "À propos de nous",
        "footer.comp2": "Contact",
        "footer.comp3": "Politique de confidentialité",
        "footer.comp4": "Conditions d'utilisation",
        "footer.sup": "Support",
        "footer.sup1": "Centre d'aide",
        "footer.sup2": "Documentation",
        "footer.sup3": "État du système",
        "footer.sup4": "Obtenir une démo",
        "footer.copy": "© 2025 Nova'Agri Technologies. Tous droits réservés.",
        "placeholder.title": "Votre histoire de réussite",
        "placeholder.text": "Rejoignez des milliers d’agriculteurs utilisant déjà Nova'Agri",
        "form.return": "Retour à l'accueil",
        "lacto.title": "Pourquoi choisir Lacto-connect ?",
        "lacto.desc": "La solution tout-en-un qui transforme votre exploitation laitière",
        "lacto.f1.title": "Suivi du lait en temps réel",
        "lacto.f1.desc": "Monitoring continu de la qualité, température et traçabilité complète de la production à la livraison.",
        "lacto.f2.title": "Gestion RH et financière",
        "lacto.f2.desc": "Centralisation complète des ressources humaines, paie, comptabilité et gestion financière de votre exploitation.",
        "lacto.f3.title": "Gestion des stocks intelligente",
        "lacto.f3.desc": "Automatisation de l'inventaire, alertes de réapprovisionnement et optimisation des commandes.",
        "lacto.f4.title": "Facilité d'utilisation",
        "lacto.f4.desc": "Interface intuitive conçue pour les agriculteurs. Formation rapide et prise en main immédiate.",
        "lacto.f5.title": "Sécurité garantie",
        "lacto.f5.desc": "Protection maximale de vos données avec chiffrement de niveau bancaire et sauvegardes automatiques.",
        "lacto.f6.title": "Démo gratuite",
        "lacto.f6.desc": "Testez toutes les fonctionnalités gratuitement. Notre équipe vous accompagne personnellement.",
        "lacto.cta.title": "Prêt à révolutionner votre exploitation ?",
        "lacto.cta.desc": "Rejoignez les centaines d'éleveurs qui font déjà confiance à Lacto-connect",
        "lacto.cta.btn": "Demander ma démo gratuite",
        "packs.title": "Nos offres Lacto-connect",
        "packs.desc": "Choisissez l'offre qui correspond à votre exploitation laitière",
        "pack1.title": "Lacto Starter",
        "pack1.price": "Pour petites exploitations",
        "pack1.f1": "Suivi du lait de base",
        "pack1.f2": "Gestion simple des stocks",
        "pack1.f3": "Support par email",
        "pack1.f4": "Formation en ligne",
        "pack1.btn": "Choisir Starter",
        "pack2.badge": "Populaire",
        "pack2.title": "Lacto Professional",
        "pack2.price": "Pour exploitations moyennes",
        "pack2.f1": "Toutes fonctionnalités Lacto-connect",
        "pack2.f2": "Gestion RH complète",
        "pack2.f3": "Analyses avancées",
        "pack2.f4": "Support prioritaire",
        "pack2.f5": "Formation sur site",
        "pack2.btn": "Choisir Professional",
        "pack3.title": "Lacto Enterprise",
        "pack3.price": "Pour grandes exploitations",
        "pack3.f1": "Lacto-connect + Insem-connect",
        "pack3.f2": "Intégrations personnalisées",
        "pack3.f3": "API complète",
        "pack3.f4": "Support 24/7 dédié",
        "pack3.f5": "Account manager personnel",
        "pack3.btn": "Choisir Enterprise",
    },
    ar: {
        "meta.title": "نوفا أجري تكنولوجيز – لاكتو-كونكت، الحل الذكي لإدارة الحليب",
        "meta.description": "لاكتو-كونكت يحدث ثورة في إدارة مزارع الحليب مع المتابعة في الوقت الفعلي، وإدارة الموارد البشرية/المالية وأمان البيانات.",
        "hero.line1": "لاكتو-كونكت:",
        "hero.line2": "ثورة إدارة الحليب",
        "hero.desc": "حوّل مزرعة الحليب الخاصة بك مع لاكتو-كونكت. متابعة في الوقت الفعلي، إدارة الموارد البشرية والمالية، مراقبة المخزون - كل شيء في مكان واحد. أمان مضمون وسهولة استخدام لمنتجي الحليب العصريين.",
        "hero.btn1": "عرض توضيحي مجاني",
        "hero.btn2": "اكتشف لاكتو-كونكت",
        "stats.farms": "100+",
        "stats.farmsLabel": "مزارع الحليب",
        "floating1.title": "متابعة الحليب في الوقت الفعلي",
        "floating1.text": "الجودة والتتبع",
        "floating2.title": "إدارة الموارد البشرية والمالية",
        "floating2.text": "الموظفون والمحاسبة",
        "floating3.title": "إدارة المخزون",
        "floating3.text": "جرد آلي",
        "sol.title": "حلول نوفا أجري",
        "sol.desc": "تقنيات متطورة لثورة في عملياتك الزراعية",
        "sol1.badge": "الحل الرئيسي",
        "sol1.title": "لاكتو-كونكت",
        "sol1.subtitle": "الحل الشامل لإدارة الحليب",
        "sol1.text": "اجعل كل جانب من جوانب إنتاج الحليب الخاص بك مثاليًا مع منصتنا المتكاملة. من المتابعة في الوقت الفعلي إلى الإدارة المالية، لاكتو-كونكت يركز جميع عملياتك.",
        "sol1.f1": "متابعة الحليب في الوقت الفعلي",
        "sol1.f2": "إدارة الموارد البشرية والمالية المتكاملة",
        "sol1.f3": "مراقبة آلية للمخزون",
        "sol1.f4": "واجهة بديهية وسهلة الاستخدام",
        "sol1.f5": "أمان مضمون للبيانات",
        "sol1.btn": "جرب مجانًا",
        "sol2.title": "إنسيم-كونكت",
        "sol2.text": "حل مكمل للإدارة الشاملة للإمدادات واللوجستيات الزراعية.",
        "sol2.f1": "إدارة الإمدادات",
        "sol2.f2": "تحسين اللوجستيات",
        "sol2.f3": "تتبع التسليم",
        "sol2.btn": "اعرف المزيد",
        "lacto.title": "لماذا تختار لاكتو-كونكت؟",
        "lacto.desc": "الحل الشامل الذي يحوّل مزرعة الحليب الخاصة بك",
        "lacto.f1.title": "متابعة الحليب في الوقت الفعلي",
        "lacto.f1.desc": "مراقبة مستمرة للجودة، ودرجة الحرارة، وتتبع كامل من الإنتاج إلى التسليم.",
        "lacto.f2.title": "إدارة الموارد البشرية والمالية",
        "lacto.f2.desc": "مركزية كاملة للموارد البشرية، والرواتب، والمحاسبة، والإدارة المالية لمزرعتك.",
        "lacto.f3.title": "إدارة المخزون الذكية",
        "lacto.f3.desc": "أتمتة الجرد، وتنبيهات إعادة التموين، وتحسين الطلبات.",
        "lacto.f4.title": "سهولة الاستخدام",
        "lacto.f4.desc": "واجهة بديهية مصممة للمزارعين. تدريب سريع واستيعاب فوري.",
        "lacto.f5.title": "أمان مضمون",
        "lacto.f5.desc": "حماية قصوى لبياناتك مع تشفير بمستوى مصرفي ونسخ احتياطية تلقائية.",
        "lacto.f6.title": "عرض توضيحي مجاني",
        "lacto.f6.desc": "اختبر جميع الوظائف مجانًا. فريقنا يرافقك شخصيًا.",
        "lacto.cta.title": "مستعد لثورة في مزرعتك؟",
        "lacto.cta.desc": "انضم إلى مئات المربين الذين يثقون بالفعل في لاكتو-كونكت",
        "lacto.cta.btn": "اطلب عرضي التوضيحي المجاني",
        "packs.title": "عروض لاكتو-كونكت",
        "packs.desc": "اختر العرض الذي يناسب مزرعة الحليب الخاصة بك",
        "pack1.title": "لاكتو ستارتر",
        "pack1.price": "للمزارع الصغيرة",
        "pack1.f1": "متابعة أساسية للحليب",
        "pack1.f2": "إدارة بسيطة للمخزون",
        "pack1.f3": "دعم عبر البريد الإلكتروني",
        "pack1.f4": "تدريب عبر الإنترنت",
        "pack1.btn": "اختر ستارتر",
        "pack2.badge": "شائع",
        "pack2.title": "لاكتو بروفيشنال",
        "pack2.price": "للمزارع المتوسطة",
        "pack2.f1": "جميع وظائف لاكتو-كونكت",
        "pack2.f2": "إدارة كاملة للموارد البشرية",
        "pack2.f3": "تحليلات متقدمة",
        "pack2.f4": "دعم ذو أولوية",
        "pack2.f5": "تدريب في الموقع",
        "pack2.btn": "اختر بروفيشنال",
        "pack3.title": "لاكتو إنتربرايز",
        "pack3.price": "للمزارع الكبيرة",
        "pack3.f1": "لاكتو-كونكت + إنسيم-كونكت",
        "pack3.f2": "تكاملات مخصصة",
        "pack3.f3": "واجهة برمجة تطبيقات كاملة",
        "pack3.f4": "دعم مخصص 24/7",
        "pack3.f5": "مدير حساب شخصي",
        "pack3.btn": "اختر إنتربرايز",
        "nav.home": "الرئيسية",
        "nav.solutions": "الحلول",
        "nav.features": "المميزات",
        "nav.about": "من نحن",
        "nav.brand": "نوفا أجري تكنولوجيز",
        "nav.contact": "اتصل بنا",
        "nav.cta": "احصل على عرض",
        "stats.uptime": "99.9%",
        "stats.uptimeLabel": "التوفر",
        "stats.support": "24/7",
        "stats.supportLabel": "الدعم",
        "sol2.f4": "تتبع التكاليف والتحليلات",
        "common.learn": "اعرف المزيد",
        "feat.title": "لماذا تختار نوفا أجري؟",
        "feat.desc": "مصممة للتحديات الفريدة للعمليات الزراعية",
        "feat1.title": "تصميم للهواتف المحمولة",
        "feat1.text": "الوصول إلى جميع الميزات من أي جهاز، في مزرعتك أو أثناء النقل.",
        "feat2.title": "المزامنة في الوقت الحقيقي",
        "feat2.text": "تحديثات فورية على جميع الأجهزة لضمان حصول الجميع على أحدث المعلومات.",
        "feat3.title": "آمن ومتوافق",
        "feat3.text": "أمان بمستوى بنكي مع امتثال كامل للوائح الزراعية.",
        "feat4.title": "تحليلات متقدمة",
        "feat4.text": "اتخذ قرارات مستندة إلى البيانات مع تقارير ورؤى شاملة.",
        "feat5.title": "سهولة التكامل",
        "feat5.text": "يتكامل بسلاسة مع أنظمة إدارة المزارع الحالية.",
        "feat6.title": "سرعة فائقة",
        "feat6.text": "أداء محسن حتى في المناطق ذات الاتصال المحدود.",
        "about.title": "من نحن في نوفا أجري تكنولوجيز",
        "about.lead": "نحن شغوفون بتمكين المزارعين والشركات الزراعية من خلال حلول تكنولوجية متقدمة.",
        "about.text": "تأسست نوفا أجري تكنولوجيز على يد خبراء زراعيين ومبتكرين في التكنولوجيا، وتفهم التحديات الفريدة التي تواجه المزارع الحديثة. تم بناء حلولنا من الألف إلى الياء لمعالجة المشاكل الحقيقية في توزيع الحليب وإدارة سلسلة التوريد الغذائية.",
        "about.s1": "5+ سنوات خبرة",
        "about.s1Label": "خبرة",
        "about.s2": "أكثر من 50 دولة",
        "about.s2Label": "حضور عالمي",
        "about.s3": "99% رضا العملاء",
        "about.s3Label": "",
        "demo.title": "مستعد لتحويل مزرعتك؟",
        "demo.text": "اكتشف كيف يمكن لنوفا أجري تكنولوجيز أن تحدث ثورة في عملياتك الزراعية. احجز عرضًا توضيحيًا شخصيًا وفقًا لاحتياجاتك.",
        "form.name": "اسمك",
        "form.email": "البريد الإلكتروني",
        "form.phone": "رقم الهاتف",
        "form.select": "اختر نوع المزرعة",
        "form.opt1": "مزرعة ألبان",
        "form.opt2": "مزارع الثروة الحيوانية",
        "form.opt3": "إنتاج المحاصيل",
        "form.opt4": "الزراعة المختلطة",
        "form.opt5": "النقل",
        "form.message": "أخبرنا عن احتياجاتك الخاصة",
        "form.submit": "احصل على العرض المجاني",
        "footer.tagline": "ثورة في الزراعة من خلال حلول تكنولوجية ذكية.",
        "footer.sol": "الحلول",
        "footer.sol1": "تتبع الحليب",
        "footer.sol2": "توزيع المواد الغذائية",
        "footer.sol3": "إدارة النقل",
        "footer.sol4": "التحليلات",
        "footer.comp": "من نحن",
        "footer.comp1": "من نحن",
        "footer.comp2": "اتصل بنا",
        "footer.comp3": "سياسة الخصوصية",
        "footer.comp4": "شروط الخدمة",
        "footer.sup": "الدعم",
        "footer.sup1": "مركز المساعدة",
        "footer.sup2": "الوثائق",
        "footer.sup3": "حالة النظام",
        "footer.sup4": "احصل على عرض",
        "footer.copy": "© 2025 نوفا أجري تكنولوجيز. جميع الحقوق محفوظة.",
        "placeholder.title": "قصة نجاحك",
        "placeholder.text": "انضم إلى آلاف المزارعين الذين يستخدمون نوفا أجري بالفعل",
        "form.return": "العودة إلى الصفحة الرئيسية",
    }
};

let currentLang = 'fr';

function applyTranslations() {
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
    // Texte
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[currentLang][key] || el.textContent;
    });
    // Placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = translations[currentLang][key] || el.placeholder;
    });
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'ar' : 'fr';
    langToggle.setAttribute('data-lang', currentLang);
    localStorage.setItem('lang', currentLang); // Save to localStorage
    applyTranslations();
});


// Mobile Navigation Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');

    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
    });
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        closeMobileMenu();
    }
}

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Form validation
function validateForm(formData) {
    const errors = [];

    // Name validation
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Please enter a valid name (at least 2 characters)');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.push('Please enter a valid email address');
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone && formData.phone.trim() !== '') {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
            errors.push('Please enter a valid phone number');
        }
    }

    // Farm type validation
    if (!formData.farmType) {
        errors.push('Please select your farm type');
    }

    return errors;
}

// Show notification
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#2E8B57' : '#dc3545'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;

    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(demoForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        farmType: formData.get('farmType'),
        message: formData.get('message')
    };

    // Validate form
    const errors = validateForm(data);

    if (errors.length > 0) {
        showNotification(errors[0], 'error');
        return;
    }

    // Show loading state
    const submitButton = demoForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    submitButton.classList.add('loading');

    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');

        // Show success message
        showNotification('Thank you! We\'ll contact you within 24 hours to schedule your demo.');

        // Reset form
        demoForm.reset();

        // Optional: Send data to your backend
        console.log('Form submitted with data:', data);
    }, 2000);
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.solution-card, .feature-item, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;

    function updateParallax() {
        const scrolled = window.offsetY || document.documentElement.scrollTop;
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

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
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

// Active navigation link highlighting
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


// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
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


// Error handling
window.addEventListener('error', function (e) {
    console.error("Nova'Agri Landing Page Error:", e.error);
});

