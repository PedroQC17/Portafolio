import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description:
      'Descripción breve del proyecto. Explica qué hace y qué tecnologías usaste.',
    image: 'https://placehold.co/600x400/1f2937/10b981?text=Proyecto+1',
    technologies: ['React', 'Django', 'PostgreSQL'],
    github_url: '#',
    live_url: '#',
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description:
      'Otro proyecto interesante. Describe el problema que resuelve.',
    image: 'https://placehold.co/600x400/1f2937/10b981?text=Proyecto+2',
    technologies: ['Next.js', 'TypeScript', 'Prisma'],
    github_url: '#',
    live_url: '#',
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description:
      'Un tercer proyecto para mostrar variedad. Puede ser una app, una API, etc.',
    image: 'https://placehold.co/600x400/1f2937/10b981?text=Proyecto+3',
    technologies: ['Python', 'FastAPI', 'Docker'],
    github_url: '#',
    live_url: '#',
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        Mis <span className="text-emerald-400">proyectos</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-emerald-500/50 transition-colors flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
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
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  GitHub &rarr;
                </a>
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Demo &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
