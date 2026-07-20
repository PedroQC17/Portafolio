const API_URL = 'http://localhost:8000/api';

export async function getProjects() {
  const res = await fetch(`${API_URL}/projects/`);
  if (!res.ok) throw new Error('Error al obtener proyectos');
  return res.json();
}

export async function getFeaturedProjects() {
  const res = await fetch(`${API_URL}/projects/featured/`);
  if (!res.ok) throw new Error('Error al obtener proyectos destacados');
  return res.json();
}

export async function getProject(slug) {
  const res = await fetch(`${API_URL}/projects/${slug}/`);
  if (!res.ok) throw new Error('Error al obtener proyecto');
  return res.json();
}

export async function sendContactMessage(data) {
  const res = await fetch(`${API_URL}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al enviar mensaje');
  return res.json();
}
