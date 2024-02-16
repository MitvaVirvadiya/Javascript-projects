const url = 'https://api.chucknorris.io/jokes/random';
const displayJoke = document.getElementById('display-joke');
const getJokeBtn = document.getElementById('getJoke');

const displayJokeFunc = (joke) => {
  displayJoke.textContent = joke;
};

const fetchJokeXMLHttpRequest = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 300) {
        const joke = JSON.parse(xhr.responseText);
        resolve(joke.value);
      } else {
        reject(new Error(`HTTP error on status ${xhr.status}`));
      }
    });

    xhr.open('GET', url);
    xhr.send();
  });
};

const fetchJokePromises = () => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error on status ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data.value)
    .catch((error) => {
      console.log('Error: ', error.message);
      throw error;
    });
};

getJokeBtn.addEventListener('click', async () => {
  try {
    const result = await Promise.race([
      fetchJokeXMLHttpRequest(),
      fetchJokePromises(),
    ]);
    displayJokeFunc(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
});
