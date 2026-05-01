// Translation dictionaries. Flat keys, dot-notation namespaces.
// Values may contain inline <strong>/<em> — use [innerHTML]="'key' | t".

export type Lang = 'en' | 'es';

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // ---- Navbar ----
    'nav.about':     'About',
    'nav.resume':    'Resume',
    'nav.services':  'Services',
    'nav.brand':     'Dayan Cabrera',
    'nav.meta':      'Havana · Cuba',

    // ---- Hero ----
    'hero.meta.no':        'N<sup>o</sup> 01',
    'hero.meta.portfolio': 'Portfolio · 2025',
    'hero.eyebrow':        'Full-Stack Developer · Havana',
    'hero.title.line1':    'Dayan',
    'hero.title.line2':    'Cabrera <em>Corvo</em>',
    'hero.tagline':        'I build robust systems in <strong>Angular, Python, C#</strong> and <strong>Rust</strong> from the University of Havana.',
    'hero.cta':            'Download CV',
    'hero.link':           'Learn more',
    'hero.scroll':         'scroll',
    'hero.sig.label':      'Est.',

    // ---- About ----
    'about.eyebrow':       'About · 01',
    'about.title':         'A <em>Cuban programmer</em> building systems with intent.',
    'about.bio':           "I'm a third-year <strong>Computer Science</strong> student at the University of Havana. I work in <strong>Angular, Python, C#</strong> and <strong>Rust</strong>, focused on software architecture, concurrent systems and building applications that hold up under pressure.",
    'about.photo.mark':    'Est.',
    'about.photo.text':    'Havana · CU',

    'about.card1.title':   'Personal details',
    'about.card1.name':    'Name',
    'about.card1.role':    'Role',
    'about.card1.roleValue': 'Computer Science Student',
    'about.card1.email':   'Email',
    'about.card1.phone':   'Phone',
    'about.card1.github':  'GitHub',

    'about.card2.title':   'Focus areas',
    'about.card2.frontend':'Frontend',
    'about.card2.frontendText': 'Angular and VueJS for enterprise applications. Responsive interfaces with Bootstrap and TailwindCSS.',
    'about.card2.backend': 'Backend',
    'about.card2.backendText':  'Python (FastAPI) and C#. Concurrent programming and clean architecture.',
    'about.card2.data':    'Data',
    'about.card2.dataText':'Relational schemas and query optimization in SQL Server and PostgreSQL.',

    'about.card3.title':   "Let's work together?",
    'about.card3.text':    'Available for freelance projects, open-source collaborations and remote full-time opportunities.',
    'about.card3.cta':     'Download CV',

    // ---- Resume ----
    'resume.eyebrow':      'Resume · 02',
    'resume.title':        'Work, study, <em>and craft.</em>',

    'resume.col1.index':   'Ed',
    'resume.col1.title':   'Education',
    'resume.edu.period':   '2022 — Present',
    'resume.edu.institution': 'University of Havana',
    'resume.edu.department':  'Faculty of Mathematics and Computing',
    'resume.edu.degree':   "Bachelor's in Computer Science",

    'resume.col2.index':   'Wk',
    'resume.col2.title':   'Featured projects',

    'resume.proj1.title':  'Multi-Agent Tourism Simulator for Cuba',
    'resume.proj1.year':   '2025',
    'resume.proj1.tech':   'Python · FAISS · Playwright · JSONL',
    'resume.proj1.h1':     'RAG system with advanced NLP processing.',
    'resume.proj1.h2':     'Personalized recommendation engine.',

    'resume.proj2.title':  'School Management System',
    'resume.proj2.year':   '2025',
    'resume.proj2.tech':   'Angular · C# · SQL Server · LaTeX',
    'resume.proj2.h1':     'Integral web platform with teacher and classroom modules.',
    'resume.proj2.h2':     'Automated PDF report generation.',

    'resume.proj3.title':  'Perspectiva Backend',
    'resume.proj3.year':   '2025',
    'resume.proj3.tech':   'Python · FastAPI · PostgreSQL · Redis · spaCy · Docker',
    'resume.proj3.h1':     'News extraction via RSS and scraping.',
    'resume.proj3.h2':     'REST API with automatic categorization and NLP-based similarity clustering.',

    'resume.proj4.title':  'HULK Compiler',
    'resume.proj4.year':   '2024 — 2025',
    'resume.proj4.tech':   'Rust · LALRPOP',
    'resume.proj4.h1':     'Full compiler with object-oriented support (classes, inheritance, polymorphism).',
    'resume.proj4.h2':     'AST construction and error detection.',

    'resume.col3.index':   'Sk',
    'resume.col3.title':   'Tech stack',
    'resume.skills.lang':  'Languages & Frameworks',
    'resume.skills.data':  'Data & Infra',
    'resume.skills.comp':  'Competencies',
    'resume.comp1':        'Software architecture and design patterns',
    'resume.comp2':        'Concurrent programming and service integration',
    'resume.comp3':        'Advanced web scraping and NLP',
    'resume.comp4':        'Relational schema design and query optimization',
    'resume.skills.langs': 'Languages',
    'resume.lang.es':      'Spanish',
    'resume.lang.esLevel': 'Native',
    'resume.lang.en':      'English',
    'resume.lang.enLevel': 'Upper intermediate',

    // ---- Services ----
    'services.eyebrow':    'Services · 03',
    'services.title':      'Four ways <em>I can help you.</em>',

    'services.s1.title':   'Frontend with Angular and Vue',
    'services.s1.desc':    'Modern web applications with Angular and VueJS. Responsive, high-performance interfaces in TypeScript, Bootstrap and TailwindCSS. Scalable frontend architecture.',

    'services.s2.title':   'Backend and architecture',
    'services.s2.desc':    'REST APIs with Python (FastAPI) and C#. Design patterns, clean architecture principles and concurrent programming for robust systems.',

    'services.s3.title':   'Data design and optimization',
    'services.s3.desc':    'SQL Server and PostgreSQL. Relational schema design and complex SQL query optimization to guarantee integrity and speed.',

    'services.s4.title':   'Algorithms and NLP',
    'services.s4.desc':    'Advanced algorithms (RAG, clustering, FAISS indexing) and text analysis with spaCy. Focus on complex data science and business logic problems.',

    // ---- Footer ----
    'footer.mark.meta':    'Full-Stack Developer',
    'footer.col.contact':  'Contact',
    'footer.col.links':    'Links',
    'footer.col.social':   'Social',
    'footer.link.cv':      'Download CV',
    'footer.link.about':   'About',
    'footer.link.resume':  'Resume',
    'footer.link.services':'Services',
    'footer.location':     'Havana · Cuba',
    'footer.baseline.copy':'© 2025 Dayan Cabrera Corvo',
    'footer.baseline.note':'Built with Angular from Havana.',
  },

  es: {
    // ---- Navbar ----
    'nav.about':     'Sobre mí',
    'nav.resume':    'Trayectoria',
    'nav.services':  'Servicios',
    'nav.brand':     'Dayan Cabrera',
    'nav.meta':      'La Habana · Cuba',

    // ---- Hero ----
    'hero.meta.no':        'N<sup>o</sup> 01',
    'hero.meta.portfolio': 'Portfolio · 2025',
    'hero.eyebrow':        'Full-Stack Developer · La Habana',
    'hero.title.line1':    'Dayan',
    'hero.title.line2':    'Cabrera <em>Corvo</em>',
    'hero.tagline':        'Construyo sistemas robustos en <strong>Angular, Python, C#</strong> y <strong>Rust</strong> desde la Universidad de La Habana.',
    'hero.cta':            'Descargar CV',
    'hero.link':           'Conocer más',
    'hero.scroll':         'scroll',
    'hero.sig.label':      'Est.',

    // ---- About ----
    'about.eyebrow':       'Sobre mí · 01',
    'about.title':         'Un <em>programador cubano</em> construyendo sistemas con intención.',
    'about.bio':           'Soy estudiante de tercer año de <strong>Ciencias de la Computación</strong> en la Universidad de La Habana. Trabajo en <strong>Angular, Python, C#</strong> y <strong>Rust</strong>, con foco en arquitectura de software, sistemas concurrentes y la creación de aplicaciones que funcionan bien bajo presión.',
    'about.photo.mark':    'Est.',
    'about.photo.text':    'Habana · CU',

    'about.card1.title':   'Detalles personales',
    'about.card1.name':    'Nombre',
    'about.card1.role':    'Rol',
    'about.card1.roleValue': 'Estudiante de Ciencias de la Computación',
    'about.card1.email':   'Email',
    'about.card1.phone':   'Teléfono',
    'about.card1.github':  'GitHub',

    'about.card2.title':   'Áreas de enfoque',
    'about.card2.frontend':'Frontend',
    'about.card2.frontendText': 'Angular y VueJS para aplicaciones enterprise. Interfaces responsive con Bootstrap y TailwindCSS.',
    'about.card2.backend': 'Backend',
    'about.card2.backendText':  'Python (FastAPI) y C#. Programación concurrente y arquitectura limpia.',
    'about.card2.data':    'Datos',
    'about.card2.dataText':'Esquemas relacionales y optimización en SQL Server y PostgreSQL.',

    'about.card3.title':   '¿Trabajamos juntos?',
    'about.card3.text':    'Disponible para proyectos freelance, colaboraciones open-source y oportunidades full-time remotas.',
    'about.card3.cta':     'Descargar CV',

    // ---- Resume ----
    'resume.eyebrow':      'Trayectoria · 02',
    'resume.title':        'Trabajo, estudio, <em>y obra.</em>',

    'resume.col1.index':   'Ed',
    'resume.col1.title':   'Educación',
    'resume.edu.period':   '2022 — Presente',
    'resume.edu.institution': 'Universidad de La Habana',
    'resume.edu.department':  'Facultad de Matemática y Computación',
    'resume.edu.degree':   'Licenciatura en Ciencias de la Computación',

    'resume.col2.index':   'Wk',
    'resume.col2.title':   'Proyectos destacados',

    'resume.proj1.title':  'Simulador Multiagente de Turismo en Cuba',
    'resume.proj1.year':   '2025',
    'resume.proj1.tech':   'Python · FAISS · Playwright · JSONL',
    'resume.proj1.h1':     'Sistema RAG con procesamiento NLP avanzado.',
    'resume.proj1.h2':     'Motor de recomendación personalizada.',

    'resume.proj2.title':  'Sistema de Gestión Escolar',
    'resume.proj2.year':   '2025',
    'resume.proj2.tech':   'Angular · C# · SQL Server · LaTeX',
    'resume.proj2.h1':     'Plataforma web integral con módulos de profesores y aulas.',
    'resume.proj2.h2':     'Generación automatizada de reportes PDF.',

    'resume.proj3.title':  'Perspectiva Backend',
    'resume.proj3.year':   '2025',
    'resume.proj3.tech':   'Python · FastAPI · PostgreSQL · Redis · spaCy · Docker',
    'resume.proj3.h1':     'Extracción de noticias vía RSS y scraping.',
    'resume.proj3.h2':     'API REST con categorización automática y agrupación por similitud usando NLP.',

    'resume.proj4.title':  'Compilador HULK',
    'resume.proj4.year':   '2024 — 2025',
    'resume.proj4.tech':   'Rust · LALRPOP',
    'resume.proj4.h1':     'Compilador completo con soporte orientado a objetos (clases, herencia, polimorfismo).',
    'resume.proj4.h2':     'Construcción de árboles de sintaxis abstracta y detección de errores.',

    'resume.col3.index':   'Sk',
    'resume.col3.title':   'Stack técnico',
    'resume.skills.lang':  'Lenguajes & Frameworks',
    'resume.skills.data':  'Datos & Infra',
    'resume.skills.comp':  'Competencias',
    'resume.comp1':        'Arquitectura de software y patrones de diseño',
    'resume.comp2':        'Programación concurrente e integración de servicios',
    'resume.comp3':        'Web scraping avanzado y NLP',
    'resume.comp4':        'Esquemas relacionales y optimización de consultas',
    'resume.skills.langs': 'Idiomas',
    'resume.lang.es':      'Español',
    'resume.lang.esLevel': 'Nativo',
    'resume.lang.en':      'Inglés',
    'resume.lang.enLevel': 'Int. Avanzado',

    // ---- Services ----
    'services.eyebrow':    'Servicios · 03',
    'services.title':      'Cuatro formas en las que <em>puedo ayudarte.</em>',

    'services.s1.title':   'Frontend con Angular y Vue',
    'services.s1.desc':    'Aplicaciones web modernas con Angular y VueJS. Interfaces responsive y de alto rendimiento en TypeScript, Bootstrap y TailwindCSS. Arquitectura frontend escalable.',

    'services.s2.title':   'Backend y arquitectura',
    'services.s2.desc':    'APIs REST con Python (FastAPI) y C#. Patrones de diseño, principios de arquitectura limpia y programación concurrente para sistemas robustos.',

    'services.s3.title':   'Diseño y optimización de datos',
    'services.s3.desc':    'SQL Server y PostgreSQL. Diseño de esquemas relacionales y optimización de consultas SQL complejas para garantizar integridad y velocidad.',

    'services.s4.title':   'Algoritmos y NLP',
    'services.s4.desc':    'Algoritmos avanzados (RAG, clustering, indexación FAISS) y análisis de texto con spaCy. Enfoque en problemas complejos de data science y lógica de negocio.',

    // ---- Footer ----
    'footer.mark.meta':    'Full-Stack Developer',
    'footer.col.contact':  'Contacto',
    'footer.col.links':    'Enlaces',
    'footer.col.social':   'Social',
    'footer.link.cv':      'Descargar CV',
    'footer.link.about':   'Sobre mí',
    'footer.link.resume':  'Trayectoria',
    'footer.link.services':'Servicios',
    'footer.location':     'La Habana · Cuba',
    'footer.baseline.copy':'© 2025 Dayan Cabrera Corvo',
    'footer.baseline.note':'Construido con Angular desde La Habana.',
  },
};
