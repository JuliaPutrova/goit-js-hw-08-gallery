const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const tagsContainer = document.querySelector('.js-gallery');

const createImages = createImagesGrid(galleryItems);

tagsContainer.insertAdjacentHTML('beforeend', createImagesGrid);

function createImagesGrid(images) {
  return images.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  }).join('');
}

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#e91e63', rgb: '233,30,99' },
//   { hex: '#9c27b0', rgb: '156,39,176' },
//   { hex: '#673ab7', rgb: '103,58,183' },
//   { hex: '#3f51b5', rgb: '63,81,181' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#00bcd4', rgb: '0,188,212' },
//   { hex: '#009688', rgb: '0,150,136' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
//   { hex: '#ff9800', rgb: '255,152,0' },
//   { hex: '#795548', rgb: '121,85,72' },
//   { hex: '#607d8b', rgb: '96,125,139' },
// ];

// const paletteContainer = document.querySelector('.js-gallery');
// const cardsMarkup = createColorCardsMarkup(colors);
// // метод apeendChild пишем когда создаем элементь через document.createElement, но если нам нужно создать одну большую сроку и чтобы бразуер самостоятельно распарсил строку пишем метод insertAdjacentHTML

// // 1-й шаг ---> зарендерить разметку в div;
// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// // вешаем слушателя событий на клик на цвет в карточке
// // paletteContainer.addEventListener('click', onPaletteContainerClick);

// // имя переменной и параметр в функции абсолютно разные, они не одинаковые
// function createColorCardsMarkup(colors) {
//  //  создаем по шаблону разметку, также динамически нужно задать инлайн стили для фона элементов
//     return colors.map(({ hex, rgb}) =>  {  //диструктуризация ({ hex, rgb})
//     return `
//     <div class="color-card">
//      <div class="color-swatch"
//      data-hex="${hex}"  
//      data-rgb="${rgb}"
//      style="background-color: ${hex}"
//    ></div>
//     <div class="color-meta">
//         <p>HEX: ${hex}</p>
//         <p>RGB: ${rgb}</p>
//     </div>
//     </div>
//         `;
//     })
//    .join(''); // join сшивает все карточки в одну строку
    
// }
