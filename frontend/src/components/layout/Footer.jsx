export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 text-sm text-center py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <p>&copy; {year} Pedro. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
