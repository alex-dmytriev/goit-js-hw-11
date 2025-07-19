import axios from 'axios';

export function getPhotos(query) {
  const ENDPOINT = 'https://pixabay.com/api/';
  const API_KEY = '51376542-95e34f1d639dab3c27f4a47b0';

  const queryParams = new URLSearchParams({
    q: query,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horisontal',
    safesearch: true,
    per_page: 9,
  });

  return axios.get(`${ENDPOINT}?${queryParams}`);
}

// --- FUNCTIONS TO PERFORM HTTP REQUESTS ---

// getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
