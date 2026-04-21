// بيانات الترجمة لثلاث لغات
const i18n = {
    ar: {
        title: "منصة CoStM التعليمية",
        home: "الرئيسية",
        courses: "المواد الدراسية",
        schedule: "الجدول الدراسي",
        contact: "الدعم الفني",
        welcomeH: "مرحباً بك في رحلتك التعليمية",
        welcomeP: "منصة متكاملة لطلاب المرحلة الثانوية - مسارات التميز.",
        st1: "15 مادة", st2: "500 درس", st3: "1000 طالب",
        cTitle: "أقسام المواد",
        c1T: "الكيمياء 2-2", c1D: "شرح كامل لدروس الطاقة، الديناميكا الحرارية، وسرعة التفاعلات.",
        c2T: "التقنية الرقمية", c2D: "تعلم البرمجة، تطوير الويب، وقواعد البيانات الحديثة.",
        c3T: "الفيزياء", c3D: "تجارب عملية وشروحات لقوانين الحركة والكهرباء.",
        schT: "الجدول الأسبوعي",
        thDay: "اليوم", d1: "الأحد", d2: "الاثنين",
        projT: "مساحة المشاريع", saveB: "حفظ الملاحظة",
        footer: "© 2026 منصة CoStM التعليمية - جميع الحقوق محفوظة",
        dir: "rtl"
    },
    en: {
        title: "CoStM Education Platform",
        home: "Home",
        courses: "Courses",
        schedule: "Schedule",
        contact: "Support",
        welcomeH: "Welcome to Your Learning Journey",
        welcomeP: "Integrated platform for high school students - Excellence tracks.",
        st1: "15 Subjects", st2: "500 Lessons", st3: "1000 Students",
        cTitle: "Subject Categories",
        c1T: "Chemistry 2-2", c1D: "Full explanation of energy, thermodynamics, and reaction speed.",
        c2T: "Digital Tech", c2D: "Learn programming, web development, and modern databases.",
        c3T: "Physics", c3D: "Practical experiments and explanations of motion laws.",
        schT: "Weekly Schedule",
        thDay: "Day", d1: "Sunday", d2: "Monday",
        projT: "Projects Space", saveB: "Save Note",
        footer: "© 2026 CoStM EDU - All Rights Reserved",
        dir: "ltr"
    },
    fr: {
        title: "Plateforme Éducative CoStM",
        home: "Accueil",
        courses: "Cours",
        schedule: "Calendrier",
        contact: "Support",
        welcomeH: "Bienvenue dans votre voyage d'apprentissage",
        welcomeP: "Plateforme intégrée pour les lycéens - Voies d'excellence.",
        st1: "15 Matières", st2: "500 Leçons", st3: "1000 Étudiants",
        cTitle: "Catégories de sujets",
        c1T: "Chimie 2-2", c1D: "Explication complète de l'énergie et de la thermodynamique.",
        c2T: "Technologie Numérique", c2D: "Apprendre la programmation et le développement web.",
        c3T: "Physique", c3D: "Expériences pratiques et explications des lois du mouvement.",
        schT: "Horaire hebdomadaire",
        thDay: "Jour", d1: "Dimanche", d2: "Lundi",
        projT: "Espace Projets", saveB: "Sauvegarder",
        footer: "© 2026 CoStM EDU - Tous droits réservés",
        dir: "ltr"
    }
};

// وظيفة تبديل اللغة
function changeLanguage(lang) {
    const data = i18n[lang];
    
    // النصوص العامة
    document.getElementById('page-title').innerText = data.title;
    document.getElementById('ln-home').innerText = data.home;
    document.getElementById('ln-courses').innerText = data.courses;
    document.getElementById('ln-schedule').innerText = data.schedule;
    document.getElementById('ln-contact').innerText = data.contact;

    // الهيرو
    document.getElementById('welcome-h').innerText = data.welcomeH;
    document.getElementById('welcome-p').innerText = data.welcomeP;
    document.getElementById('st-1').innerText = data.st1;
    document.getElementById('st-2').innerText = data.st2;
    document.getElementById('st-3').innerText = data.st3;

    // المواد
    document.getElementById('course-title').innerText = data.cTitle;
    document.getElementById('c1-title').innerText = data.c1T;
    document.getElementById('c1-desc').innerText = data.c1D;
    document.getElementById('c2-title').innerText = data.c2T;
    document.getElementById('c2-desc').innerText = data.c2D;
    document.getElementById('c3-title').innerText = data.c3T;
    document.getElementById('c3-desc').innerText = data.c3D;

    // الجدول
    document.getElementById('sch-title').innerText = data.schT;
    document.getElementById('th-day').innerText = data.thDay;
    document.getElementById('day-1').innerText = data.d1;
    document.getElementById('day-2').innerText = data.d2;

    // الفوتر والمشاريع
    document.getElementById('proj-title').innerText = data.projT;
    document.getElementById('save-btn').innerText = data.saveB;
    document.getElementById('footer-text').innerText = data.footer;

    // الاتجاه
    document.documentElement.dir = data.dir;
    document.documentElement.lang = lang;
}

// وظيفة حفظ الملاحظات
function saveNote() {
    const input = document.getElementById('comment-input');
    const display = document.getElementById('notes-display');
    if(input.value.trim() !== "") {
        const note = document.createElement('p');
        note.className = "note-item";
        note.style.background = "#fff";
        note.style.padding = "10px";
        note.style.borderRadius = "5px";
        note.style.marginTop = "5px";
        note.innerText = "• " + input.value;
        display.appendChild(note);
        input.value = "";
    }
}
