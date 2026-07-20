import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-24 md:py-36">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Hola, soy <span className="text-emerald-400">Pedro</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-xl mb-8">
        Desarrollador Full Stack apasionado por crear soluciones web eficientes y escalables.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/projects"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Ver proyectos
        </Link>
        <Link
          to="/contact"
          className="border border-gray-600 hover:border-emerald-400 text-gray-300 hover:text-emerald-400 font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Contacto
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full">
        {[
          { title: 'Backend', items: 'Django, DRF, PostgreSQL' },
          { title: 'Frontend', items: 'React, Tailwind, Next.js' },
          { title: 'Herramientas', items: 'Git, Docker, Linux' },
        ].map((col) => (
          <div key={col.title} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-emerald-400 font-semibold mb-2">{col.title}</h3>
            <p className="text-gray-400 text-sm">{col.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
