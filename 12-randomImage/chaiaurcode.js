const baseURL = 'https://source.unsplash.com/all/300x300';

const content = document.querySelector('.content');
const btn = document.getElementsByTagName('button')[0];

const imagegenerator = () => {
  let firstImage = document.querySelector('img');

  if (!firstImage) {
    const img = document.createElement('img');
    img.src = baseURL;
    content.appendChild(img);

    console.info('image does not exists');
  } else {
    firstImage.src = baseURL;
    console.info('image exists');
  }
};

btn.addEventListener('click', (event) => {
  event.preventDefault();
  imagegenerator();
});
