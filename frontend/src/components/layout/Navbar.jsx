import { Link } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/about', label: 'Sobre mí' },
  { to: '/projects', label: 'Proyectos' },
  { to: '/contact', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight hover:text-emerald-400 transition-colors">
          Pedro Quincho
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-emerald-400 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-sm uppercase tracking-wider">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="block py-2 hover:text-emerald-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
