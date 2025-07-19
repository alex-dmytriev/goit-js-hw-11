import iziToast from 'izitoast';
import { getPhotos } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

// References
export const refs = {
  formEl: document.querySelector('.form'),
  galleryEl: document.querySelector('.gallery'),
};

// Utilities

// Handlers
function onSubmit(event) {
  event.preventDefault();
  refs.galleryEl.innerHTML = '';

  const searchQuery = event.target.elements['search-text'].value.trim();
  if (!searchQuery) {
    return iziToast.error({
      message: 'Empty request. Try again!',
      position: 'topRight',
    });
  }

  getPhotos(searchQuery).then(resp => {
    const respData = resp.data.hits;
    if (respData.length === 0) {
      return iziToast.error({
        message:
          'Sorry there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
    refs.galleryEl.innerHTML = createGallery(respData);
  });
}

// Event Listeners
refs.formEl.addEventListener('submit', onSubmit);
