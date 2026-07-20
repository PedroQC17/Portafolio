import { useParams, Link } from 'react-router-dom';

const projects = {
  'pipeline-big-data-municipalidades': {
    title: 'Pipeline Big Data — Municipalidades del Perú',
    description:
      'Proyecto individual del curso de Big Data. Diseño de un pipeline de datos por capas (bronze, silver, gold) sobre un dataset de municipalidades peruanas.',
    longDescription: [
      'Pipeline ETL con arquitectura medallón (bronze → silver → gold) implementado con Apache Spark y Python.',
      'Entorno de desarrollo completamente containerizado con Docker y Jupyter Notebooks.',
      'Visualización final de datos procesados mediante dashboards en Power BI.',
      'Dataset real de municipalidades peruanas con indicadores de gestión.',
    ],
    technologies: ['Python', 'Apache Spark', 'Docker', 'Jupyter', 'Power BI', 'ETL'],
    github_url: 'https://github.com/PedroQC17/arquitecture_medallion_municipalidades',
    live_url: null,
    image: 'https://placehold.co/800x400/1f2937/10b981?text=Pipeline+Big+Data',
  },
  'sistema-interoperabilidad-hospitales': {
    title: 'Sistema de Interoperabilidad de Hospitales',
    description:
      'Sistema para el intercambio de información clínica entre hospitales, usando React en el frontend y Django en el backend con microservicios.',
    longDescription: [
      'Frontend SPA desarrollado con React, ofreciendo una interfaz rápida y responsiva para el personal médico.',
      'Backend con Django REST Framework y arquitectura de microservicios para escalabilidad.',
      'API REST documentada para la interoperabilidad entre distintos sistemas hospitalarios.',
      'Base de datos PostgreSQL con modelo de datos normalizado para información clínica.',
    ],
    technologies: ['React', 'Django', 'DRF', 'PostgreSQL', 'Docker', 'Microservicios'],
    github_url: 'https://github.com/PedroQC17/sistema-interoperabilidad-hospitales',
    live_url: null,
    image: 'https://placehold.co/800x400/1f2937/10b981?text=Interoperabilidad+Hospitales',
  },
  'rutas-emergencia-ambulancias': {
    title: 'Sistema de Rutas de Emergencia para Ambulancias',
    description:
      'Sistema inteligente para encontrar las rutas óptimas de ambulancias hacia hospitales de emergencia en Lima Metropolitana, comparando tres algoritmos clásicos de teoría de grafos.',
    longDescription: [
      'Implementación y comparación de tres algoritmos: BFS (minimiza intersecciones), Dijkstra (menor distancia) y A* (búsqueda heurística).',
      'Grafos de red vial reales obtenidos de OpenStreetMap, considerando 51 hospitales de categoría II y III en 16 distritos de Lima.',
      'Visualización geoespacial de rutas calculadas y métricas comparativas entre algoritmos.',
      'Análisis de performance: tiempo de ejecución, nodos expandidos y optimalidad de cada ruta.',
    ],
    technologies: ['Python', 'BFS', 'Dijkstra', 'A*', 'OpenStreetMap', 'OSMnx'],
    github_url: 'https://github.com/PedroQC17/Sistema-de-Rutas-de-Emergencia',
    live_url: null,
    image: '/rutas-emergencia.png',
  },
  'bi-emisiones-gei-peru': {
    title: 'BI — Emisiones de Gases de Efecto Invernadero en Perú',
    description:
      'Data warehouse para el análisis de emisiones GEI en Perú, integrando 4 fuentes internacionales con resolución geoespacial a nivel distrital.',
    longDescription: [
      'Integración de datos de Climate Trace, EDGAR, Climate Watch y FAOSTAT en un data warehouse unificado.',
      'Procesos ETL diseñados con Pentaho Data Integration para limpieza, transformación y carga.',
      'Modelado dimensional (esquema estrella) para consultas analíticas eficientes sobre emisiones GEI.',
      'Dashboards interactivos en Power BI con visualización geoespacial a nivel distrital.',
    ],
    technologies: ['Pentaho', 'Power BI', 'SQL', 'ETL', 'Data Warehouse', 'GIS'],
    github_url: 'https://github.com/PedroQC17/BI-aplicado-a-la-Generaci-n-de-Gases-de-Efecto-Invernadero-en-el-Per-',
    live_url: null,
    image: 'https://placehold.co/800x400/1f2937/10b981?text=BI+Emisiones+GEI',
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Proyecto no encontrado</h1>
        <Link to="/projects" className="text-emerald-400 hover:underline">
          &larr; Volver a proyectos
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <Link
        to="/projects"
        className="text-gray-400 hover:text-emerald-400 text-sm transition-colors inline-block mb-6"
      >
        &larr; Volver a proyectos
      </Link>

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 md:h-72 object-cover rounded-xl mb-8"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-400 text-lg mb-8">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-800 text-emerald-400 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="space-y-3 mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Detalles</h2>
        {project.longDescription.map((item, i) => (
          <p key={i} className="text-gray-300 leading-relaxed flex gap-3">
            <span className="text-emerald-400 mt-1 shrink-0">&#9656;</span>
            {item}
          </p>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Ver en GitHub
          </a>
        )}
        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Ver demo
          </a>
        )}
      </div>
    </section>
  );
}
