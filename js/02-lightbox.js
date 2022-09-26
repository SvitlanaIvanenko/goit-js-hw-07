import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imageTemplates = ({preview, original, description}) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const render = () => {

    const list = galleryItems.map(item => imageTemplates(item)).join('');
    gallery.innerHTML = '';
    gallery.insertAdjacentHTML('beforeend', list);
};

render ();

gallery.addEventListener('click', onClick);

function onClick (event) {
    event.preventDefault();
    if (event.target === event.currentTarget)
        return;
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt"});
  
  
