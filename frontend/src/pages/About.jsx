const technicalSkills = [
  'Python', 'Java', 'C++', 'JavaScript',
  'React', 'Django', 'Docker', 'Git / GitHub',
  'Apache Spark', 'Power BI', 'Pentaho',
  'MySQL', 'SQL Server', 'PostgreSQL',
];

const softSkills = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Adaptabilidad',
  'Resolución de problemas',
];

const courses = [
  'Desarrollo Web',
  'Bases de Datos',
  'Inteligencia de Negocios',
  'Big Data',
  'Arquitectura de Computadoras',
  'Análisis y Diseño de Sistemas',
  'Modelos de Simulación',
  'Diseño de Interfaces',
];

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Sobre <span className="text-emerald-400">mí</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Soy Pedro Quincho, estudiante de Ingeniería de Sistemas en la
            Universidad Nacional Mayor de San Marcos, cursando el 8vo ciclo.
          </p>
          <p>
            Me he formado en desarrollo web, bases de datos, inteligencia de
            negocios y big data. Disfruto construir sistemas backend robustos
            con Django y Python, así como interfaces modernas con React.
          </p>
          <p>
            Busco una práctica pre-profesional donde pueda aportar mis
            conocimientos técnicos y seguir aprendiendo en un entorno real
            de trabajo.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Habilidades técnicas
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
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
              Habilidades blandas
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-emerald-300 text-sm px-3 py-1 rounded-full"
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
              <p className="font-medium text-white">
                Ingeniería de Sistemas
              </p>
              <p className="text-sm text-gray-400">
                Universidad Nacional Mayor de San Marcos — 8vo ciclo
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Cursos relevantes
            </h3>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="bg-gray-800/50 text-gray-500 text-xs px-2 py-0.5 rounded border border-gray-800"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
