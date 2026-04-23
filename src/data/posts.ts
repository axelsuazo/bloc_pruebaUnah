export type Post = {
  id: number;
  title: string;
  image: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: 'La UNAH impulsa proyectos estudiantiles',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Estudiantes presentan ideas orientadas a mejorar areas académicas y tecnológicas.',
    content:
      'La Universidad Nacional Autónoma de Honduras continúa promoviendo espacios para que los estudiantes desarrollen proyectos de innovación. Estas iniciativas permiten fortalecer competencias en investigación, trabajo en equipo y solución de problemas reales dentro del entorno universitario.',
    author: 'Andrea López',
    date: '22 abril 2026',
    category: 'Innovación',
  },
  {
    id: 2,
    title: 'Nuevas actividades de la Facultad de Ingeniería',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    summary:
      'La facultad desarrolla jornadas prácticas y desarollo.',
    content:
      'La Facultad de Ingeniería ha organizado actividades para fortalecer habilidades técnicas y analíticas. Entre ellas se incluyen talleres y ejercicios que permiten aplicar conocimientos adquiridos en clase.',
    author: 'Carlos Mejía',
    date: '20 abril 2026',
    category: 'Academia',
  },
  {
    id: 3,
    title: 'Importancia de la lectura día a día en la universidad',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Leer de forma constante ayuda a mejorar el análisis y la redacción.',
    content:
      'La lectura sigue siendo una herramienta clave en la formación universitaria. A través de ella, los estudiantes fortalecen su capacidad de comprensión, pensamiento crítico y redacción, elementos esenciales para lograr un mejor desempeño académico.',
    author: 'María Flores',
    date: '18 abril 2026',
    category: 'Educación',
  },
  {
    id: 4,
    title: 'Consejos para organizar mejor el tiempo de estudio',
    image:
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Planificar horarios simples puede mejorar el rendimiento del estudiante.',
    content:
      'Una buena organización del tiempo permite cumplir con tareas, proyectos y evaluaciones sin tanto estrés. Se recomienda establecer prioridades, dividir las actividades grandes en partes pequeñas y respetar tiempos de descanso para mantener la concentración.',
    author: 'Luis Sánchez',
    date: '15 abril 2026',
    category: 'Consejos',
  },
  {
    id: 5,
    title: 'Tecnología para la educación: la combinación necesaria',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Las plataformas digitales facilitan el acceso a materiales y recursos de aprendizaje.',
    content:
      'El uso de tecnología en la educación ha permitido ampliar las oportunidades de aprendizaje. Hoy en día, los estudiantes cuentan con plataformas, bibliotecas virtuales y herramientas colaborativas que facilitan la investigación y el desarrollo de proyectos.',
    author: 'Sofía Ramos',
    date: '12 abril 2026',
    category: 'Tecnología',
  },
  {
    id: 6,
    title: 'Actividades culturales ayudan en la vida universitaria',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    summary:
      'El arte y la cultura también forman parte del desarrollo integral del estudiante.',
    content:
      'Las actividades culturales dentro de la universidad ayudan a fortalecer la identidad institucional y la participación estudiantil. Eventos artísticos, ferias y exposiciones permiten una formación más completa, más allá del salón de clases.',
    author: 'Karen Núñez',
    date: '10 abril 2026',
    category: 'Cultura',
  },
  {
    id: 7,
    title: 'El trabajo en equipo mejora los resultados académicos',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Colaborar con otros estudiantes ayuda a resolver problemas con mayor rapidez.',
    content:
      'El trabajo en equipo favorece el intercambio de ideas, la distribución de tareas y la construcción conjunta de soluciones. Además, fortalece habilidades blandas como la comunicación, la responsabilidad y el liderazgo.',
    author: 'José Martínez',
    date: '08 abril 2026',
    category: 'Aprendizaje',
  },
  {
    id: 8,
    title: 'Cómo presentar proyectos universitarios de forma clara',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Una buena estructura y un lenguaje simple pueden hacer la diferencia.',
    content:
      'Para presentar un proyecto de forma clara es importante organizar la información en introducción, desarrollo y cierre. También conviene utilizar apoyos visuales sencillos, hablar con seguridad y enfocarse en las ideas más importantes para captar la atención del público.',
    author: 'Paola Herrera',
    date: '05 abril 2026',
    category: 'Proyectos',
  },

     { id: 9,
    title: 'Cómo presentar proyectos universitarios de forma clara',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Una buena estructura y un lenguaje simple pueden hacer la diferencia.',
    content:
      'Para presentar un proyecto de forma clara es importante organizar la información en introducción, desarrollo y cierre. También conviene utilizar apoyos visuales sencillos, hablar con seguridad y enfocarse en las ideas más importantes para captar la atención del público.',
    author: 'Paola Herrera',
    date: '05 abril 2026',
    category: 'Proyectos',
  },
];