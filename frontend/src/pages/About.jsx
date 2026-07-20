export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Sobre <span className="text-emerald-400">mí</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Soy desarrollador Full Stack con experiencia construyendo aplicaciones web
            desde el backend hasta el frontend. Me apasiona escribir código limpio,
            resolver problemas complejos y aprender nuevas tecnologías.
          </p>
          <p>
            Trabajo principalmente con Django REST Framework en el backend y React
            en el frontend, siempre enfocado en crear experiencias de usuario
            fluidas y sistemas robustos.
          </p>
          <p>
            Cuando no estoy programando, disfruto explorar nuevas herramientas,
            contribuir a proyectos open source y compartir conocimiento.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Habilidades técnicas
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Python', 'Django', 'DRF', 'JavaScript', 'React', 'TypeScript',
                'Tailwind CSS', 'PostgreSQL', 'MySQL', 'Git', 'Docker', 'Linux',
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Educación
            </h3>
            <div className="text-gray-300 space-y-1">
              <p className="font-medium text-white">Aquí va tu título / carrera</p>
              <p className="text-sm text-gray-400">Institución — Año</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
