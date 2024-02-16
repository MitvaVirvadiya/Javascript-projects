const url = 'https://api.thecatapi.com/v1/images/search';
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const fetchCat = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    }

    const data = await response.json();
    return data[0].url;
  } catch (error) {
    console.log('Error: ', error);
  }
};

const generateCat = async () => {
  container.innerHTML = '';

  const catDiv = document.createElement('div');
  catDiv.className = 'cats';

  const randomCatsDiv = document.createElement('div');
  randomCatsDiv.className = 'random_cats';

  const catImgURL = await fetchCat();
  const catImg = document.createElement('img');
  catImg.src = catImgURL;
  catImg.alt = 'Random cat image';

  randomCatsDiv.appendChild(catImg);
  catDiv.appendChild(randomCatsDiv);
  container.appendChild(catDiv);
};

btn.addEventListener('click', () => {
  generateCat();
});
