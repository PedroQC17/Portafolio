import { Link } from 'react-router-dom';

const projects = [
  {
    slug: 'pipeline-big-data-municipalidades',
    title: 'Pipeline Big Data — Municipalidades del Perú',
    description:
      'Pipeline de datos por capas (bronze, silver, gold) sobre un dataset de municipalidades peruanas, usando Apache Spark, Python y Jupyter en Docker, con visualización final en Power BI.',
    image: 'https://placehold.co/600x400/1f2937/10b981?text=Pipeline+Big+Data',
    technologies: ['Python', 'Apache Spark', 'Docker', 'Jupyter', 'Power BI'],
    github_url: 'https://github.com/PedroQC17/arquitecture_medallion_municipalidades',
    live_url: null,
  },
  {
    slug: 'sistema-interoperabilidad-hospitales',
    title: 'Sistema de Interoperabilidad de Hospitales',
    description:
      'Sistema para el intercambio de información clínica entre hospitales, con frontend en React y backend en Django usando microservicios.',
    image: 'https://placehold.co/600x400/1f2937/10b981?text=Interoperabilidad+Hospitales',
    technologies: ['React', 'Django', 'DRF', 'PostgreSQL', 'Docker'],
    github_url: 'https://github.com/PedroQC17/sistema-interoperabilidad-hospitales',
    live_url: null,
  },
  {
    slug: 'rutas-emergencia-ambulancias',
    title: 'Sistema de Rutas de Emergencia para Ambulancias',
    description:
      'Sistema inteligente de búsqueda de rutas óptimas para ambulancias en Lima Metropolitana, comparando BFS, Dijkstra y A* sobre grafos viales reales de OpenStreetMap. Considera 51 hospitales en 16 distritos.',
    image: '/rutas-emergencia.png',
    technologies: ['Python', 'BFS', 'Dijkstra', 'A*', 'OpenStreetMap'],
    github_url: 'https://github.com/PedroQC17/Sistema-de-Rutas-de-Emergencia',
    live_url: null,
  },
  {
    slug: 'bi-emisiones-gei-peru',
    title: 'BI — Emisiones de Gases de Efecto Invernadero en Perú',
    description:
      'Data warehouse para el análisis de emisiones GEI en Perú, integrando 4 fuentes internacionales (Climate Trace, EDGAR, Climate Watch, FAOSTAT) con resolución geoespacial a nivel distrital.',
    image: 'https://placehold.co/600x400/1f2937/10b981?text=BI+Emisiones+GEI',
    technologies: ['Pentaho', 'Power BI', 'SQL', 'ETL', 'Data Warehouse'],
    github_url: 'https://github.com/PedroQC17/BI-aplicado-a-la-Generaci-n-de-Gases-de-Efecto-Invernadero-en-el-Per-',
    live_url: null,
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Mis <span className="text-emerald-400">proyectos</span>
      </h1>
      <p className="text-gray-400 mb-10 max-w-xl">
        Proyectos académicos y personales donde aplico desarrollo web, big data
        e inteligencia de negocios.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-emerald-500/50 transition-colors flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-emerald-400 text-xs px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Ver detalles &rarr;
                </Link>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  GitHub &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
