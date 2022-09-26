import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imageTemplates = ({preview, original, description}) => 
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;

const render = () => {

    const list = galleryItems.map(item => imageTemplates(item)).join('');
    gallery.innerHTML = '';
    gallery.insertAdjacentHTML('beforeend', list);
};

render ();

gallery.addEventListener("click", onClick)

function onClick (event) {
    event.preventDefault();
    if (event.target === event.currentTarget)
        return;

const instance = basicLightbox.create(`
    <div class="modal">
    <img
    class='gallery__image'
    src='${event.target.dataset.source}'
    />
    </div>
    `);

    instance.show();

const modal = document.querySelector('.basicLightbox');
  modal.addEventListener('click', modal__close);
  function modal__close() {
    instance.close();
  }

  window.addEventListener('keydown', onKeydown);
  function onKeydown(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}