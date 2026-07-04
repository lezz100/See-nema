const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

async function parseJsonResponse(response) {
  const data = await response.json();
  if (!response.ok) {
    const error = new Error(data.message || 'Request failed');
    error.status = response.status;
    error.errors = data.errors || {};
    throw error;
  }
  return data;
}

export function getFilms() {
  return fetch(`${API_URL}/api/films`, { cache: 'no-store' }).then(parseJsonResponse);
}

export function getFilm(slug) {
  return fetch(`${API_URL}/api/films/${slug}`, { cache: 'no-store' }).then(parseJsonResponse);
}

export function submitContact(payload) {
  return fetch(`${API_URL}/api/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(parseJsonResponse);
}
