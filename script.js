/**
 * Data Translations Object
 */
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "عني",
        nav_services: "الخدمات",
        nav_contact: "اتصل بنا",
        hero_title: "مرحباً بكم في عالم الإبداع",
        hero_desc: "نحن نبني حلولاً رقمية تجمع بين الجمال والأداء العالي لخدمة طموحاتكم.",
        btn_start: "ابدأ الآن",
        btn_more: "اكتشف المزيد",
        stat_projects: "مشروع مكتمل",
        stat_clients: "عميل سعيد",
        stat_years: "سنوات خبرة",
        services_title: "خدماتنا المميزة",
        ser_1_title: "تطوير الويب",
        ser_1_desc: "بناء مواقع سريعة ومتجاوبة باستخدام أحدث التقنيات العالمية.",
        ser_2_title: "تصميم UI/UX",
        ser_2_desc: "واجهات مستخدم جذابة تركز على تجربة المستخدم وسهولة التصفح.",
        ser_3_title: "التسويق الرقمي",
        ser_3_desc: "نمو سريع لعلامتك التجارية من خلال استراتيجيات تسويق مدروسة.",
        contact_title: "تواصل معنا",
        contact_desc: "لا تتردد في مراسلتنا لأي استفسار أو مشروع جديد.",
        btn_send: "إرسال الرسالة",
        footer_rights: "جميع الحقوق محفوظة",
        placeholder_name: "الاسم الكامل",
        placeholder_email: "البريد الإلكتروني",
        placeholder_msg: "رسالتك هنا..."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_title: "Welcome to the Creative World",
        hero_desc: "We build digital solutions that combine beauty and high performance to serve your ambitions.",
        btn_start: "Start Now",
        btn_more: "Learn More",
        stat_projects: "Projects Completed",
        stat_clients: "Happy Clients",
        stat_years: "Years Experience",
        services_title: "Our Premium Services",
        ser_1_title: "Web Development",
        ser_1_desc: "Building fast and responsive websites using the latest technologies.",
        ser_2_title: "UI/UX Design",
        ser_2_desc: "Attractive interfaces focusing on user experience and navigation.",
        ser_3_title: "Digital Marketing",
        ser_3_desc: "Rapid growth for your brand through well-studied marketing strategies.",
        contact_title: "Get In Touch",
        contact_desc: "Feel free to contact us for any inquiries or new projects.",
        btn_send: "Send Message",
        footer_rights: "All Rights Reserved",
        placeholder_name: "Full Name",
        placeholder_email: "Email Address",
        placeholder_msg: "Your message here..."
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_title: "Bienvenue dans le Monde Créatif",
        hero_desc: "Nous créons des solutions numériques alliant esthétique et performance pour vos ambitions.",
        btn_start: "Commencer",
        btn_more: "En savoir plus",
        stat_projects: "Projets Terminés",
        stat_clients: "Clients Heureux",
        stat_years: "Années d'expérience",
        services_title: "Nos Services Premium",
        ser_1_title: "Développement Web",
        ser_1_desc: "Sites rapides et réactifs avec les dernières technologies.",
        ser_2_title: "Design UI/UX",
        ser_2_desc: "Interfaces attrayantes centrées sur l'expérience utilisateur.",
        ser_3_title: "Marketing Digital",
        ser_3_desc: "Croissance rapide de votre marque via des stratégies étudiées.",
        contact_title: "Contactez-nous",
        contact_desc: "N'hésitez pas à nous contacter pour toute question.",
        btn_send: "Envoyer le message",
        footer_rights: "Tous droits réservés",
        placeholder_name: "Nom Complet",
        placeholder_email: "E-mail",
        placeholder_msg: "Votre message ici..."
    }
};

/**
 * Change Language Function
 */
function changeLanguage(lang) {
    // 1. Update Direction
    const htmlTag = document.documentElement;
    if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
    } else {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', lang);
    }

    // 2. Update Text Content
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // 3. Update Placeholders
    document.getElementById('name').placeholder = translations[lang].placeholder_name;
    document.getElementById('email').placeholder = translations[lang].placeholder_email;
    document.getElementById('message').placeholder = translations[lang].placeholder_msg;

    // 4. Save Preference
    localStorage.setItem('preferredLang', lang);
}

/**
 * Counter Animation
 */
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

/**
 * Intersection Observer for scroll animations
 */
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(entry.target.classList.contains('stats')) {
                startCounters();
            }
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

/**
 * Form Submission Handling
 */
document.getElementById('mainForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message Sent Successfully! / تم إرسال الرسالة بنجاح!");
    e.target.reset();
});

/**
 * Init Page
 */
window.onload = () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    changeLanguage(savedLang);
};
