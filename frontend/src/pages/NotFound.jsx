import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-24 md:py-36">
      <h1 className="text-7xl md:text-9xl font-extrabold text-gray-800 mb-4">
        404
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        to="/"
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
