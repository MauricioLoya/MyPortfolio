type Social = {
  network: string;
  link: string;
};

type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  highlights: string[];
};

type Skill = {
  label: string;
  details: string;
};

type Education = {
  institution: string;
  area: string;
  startDate: string;
  endDate: string;
  location: string;
};

type Achievement = {
  text: string;
};

type Presentation = {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  socials: Social[];
  profile: string;
  experience: Experience[];
  skills: Skill[];
  education: Education[];
  achievements: Achievement[];
};

const presentation: Presentation = {
  name: "Mauricio Loya",
  headline: "Lead Software Engineer",
  location: "Cuernavaca, Mor., México",
  email: "mauloy15@gmail.com",
  phone: "+52 777 2335590",
  website: "https://mauricioloya.com",
  socials: [
    {
      network: "LinkedIn",
      link: "https://linkedin.com/in/MauricioLoya",
    },
    {
      network: "GitHub",
      link: "https://github.com/mauricioloya",
    },
  ],
  profile:
    "Lead Engineer con más de 5 años de experiencia en desarrollo Full Stack y liderazgo técnico. He diseñado arquitecturas para plataformas fintech que procesan operaciones en tiempo real y entregado soluciones empresariales usadas por 120+ usuarios. Mi enfoque: traducir requisitos de negocio en sistemas escalables, mantenibles y con impacto medible.",
  experience: [
    {
      company: "Sekisui S-LEC México",
      position: "Lead Software Engineer",
      startDate: "2025-08",
      endDate: "present",
      location: "Cuernavaca, México",
      summary:
        "Liderazgo técnico en el desarrollo de una plataforma de gestión empresarial para digitalizar procesos de RRHH y Servicio Técnico.",
      highlights: [
        "Arquitecté y entregué una plataforma de 7 módulos que reemplazó flujos manuales de RRHH, reduciendo tiempos de aprobación de días a minutos.",
        "Diseñé la arquitectura full-stack: Vue 3 + TypeScript en frontend, Django + PostgreSQL en backend, Docker Compose para infraestructura.",
        "Implementé procesamiento asíncrono con Celery que automatizó el envío de 500+ notificaciones mensuales a colaboradores.",
        "Gestioné el ciclo completo del proyecto: desde el análisis de requerimientos con stakeholders hasta el despliegue y capacitación.",
        "Plataforma en producción para 120+ colaboradores, centralizando información que antes vivía en hojas de cálculo.",
      ],
    },
    {
      company: "Satstreet Inc.",
      position: "Frontend Technical Lead",
      startDate: "2021-04",
      endDate: "present",
      location: "Remoto (Canadá)",
      summary:
        "Liderazgo técnico en una fintech que opera exchange de fiat y criptomonedas para el mercado canadiense. Crecí de developer a lead en un equipo que escala.",
      highlights: [
        "Definí la arquitectura frontend de los portales de clientes y administración, estableciendo estándares técnicos que permitieron escalar de 1 a 3 desarrolladores.",
        "Implementé WebSockets para actualizaciones de mercado en tiempo real, logrando latencia sub-100ms en la sincronización de precios.",
        "Construí un servicio de reporting regulatorio con NestJS que automatizó la generación de reportes mensuales para cumplimiento financiero.",
        "Lideré la migración de Vue 2 a Vue 3 + TypeScript, mejorando el coverage de tests y reduciendo bugs en producción.",
        "Colaboré en el diseño de APIs REST con el equipo backend, asegurando contratos consistentes entre frontend y servicios.",
      ],
    },
  ],
  skills: [
    {
      label: "Liderazgo & Arquitectura",
      details:
        "Tech Lead, Diseño de Sistemas, Code Review, CI/CD, Microservicios",
    },
    {
      label: "Frontend",
      details: "Vue.js, Nuxt.js, TypeScript, React, Tailwind CSS, WebSockets",
    },
    {
      label: "Backend",
      details: "Node.js, NestJS, Django, Python, PostgreSQL",
    },
    {
      label: "DevOps & Infraestructura",
      details: "Docker, Linux, Cloudflare, SFTP, GitHub Actions",
    },
  ],
  education: [
    {
      institution: "Universidad Tecnológica Emiliano Zapata",
      area: "Ingeniería en Tecnologías de la Información",
      startDate: "2017-09",
      endDate: "2021-06",
      location: "Emiliano Zapata, Morelos, México",
    },
  ],
  achievements: [
    {
      text: "Ponente — Hackathon Morelos 2019: Workshop sobre desarrollo móvil con React Native.",
    },
    {
      text: "Juez Técnico — Hackathon Morelos 2019: Evaluación de proyectos de innovación.",
    },
  ],
};

export default presentation;
