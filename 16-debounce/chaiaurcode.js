// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

const userInput = document.getElementById('user-input');
const userCard = document.getElementById('user-card');
const API_URL = 'https://randomuser.me/api/';
let count = 0;

const fetchUserData = async () => {
  console.log('fetching data ...' + count++);

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw error;
  }
};

const getUserData = async () => {
  const data = await fetchUserData();
  const user = data.results[0];
  const name = user.name.first + ' ' + user.name.last;
  const image = user.picture.medium;
  const email = user.email;
  const gender = user.gender;
  const country = user.location.country;
  const dob = new Date(user.dob.date);
  const formattedDate = dob.toLocaleDateString('en-US');
  const age = user.dob.age;
  const phone = user.phone;
  const formattedUser = {
    name,
    image,
    email,
    country,
    gender,
    dob: formattedDate,
    age,
    phone,
  };
  console.log(formattedUser);
  return formattedUser;
};

const createCard = async () => {
  try {
    const user = await getUserData();

    const cardImage =
      userCard.querySelector('img') || document.createElement('img');
    cardImage.src = user.image;
    cardImage.alt = 'user profile image';
    userCard.appendChild(cardImage);

    const cardName =
      userCard.querySelector('h2') || document.createElement('h2');
    updateUI(cardName, user.name);
    userCard.appendChild(cardName);

    const cardDetails =
      userCard.querySelector('.card-details') || document.createElement('div');
    cardDetails.className = 'card-details';
    cardDetails.innerHTML = `
      <p>Phone: ${user.phone}</p>
      <p>Email: ${user.email}</p>
      <p>Country: ${user.country}</p>
      <p>Gender: ${user.gender}</p>
      <p>Age: ${user.age}</p>
      <p>DOB: ${user.dob}</p>
    `;
    userCard.appendChild(cardDetails);

    userCard.style.display = 'block';
  } catch (error) {
    console.error('Error creating user card:', error.message);
    userCard.innerHTML = "<h2>Something's wrong</h2>";
    userCard.style.display = 'block';
  }
};

const debounce = (func, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

userInput.addEventListener('input', debounce(createCard, 300));

// You will automatically learn about this and apply in this. ☕️
