const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const bookList = document.getElementById('book-list');
let existingBooks;

const saveBook = (bookData) => {
  const existingBookData = JSON.parse(localStorage.getItem('books')) || [];

  existingBookData.push(bookData);

  localStorage.setItem('books', JSON.stringify(existingBookData));
};

const getBook = () => {
  const existingBookData = JSON.parse(localStorage.getItem('books'));
  return existingBookData;
};

const deleteBooks = () => {
  localStorage.removeItem('books');
  bookList.innerHTML = '';
};

const displayBooks = (bookData) => {
  bookList.innerHTML = '';
  if (!bookData) {
    return;
  }
  bookData.forEach((obj) => {
    const bookSection = document.createElement('section');
    bookSection.innerHTML = `
      <div>${obj.title}</div>
      <div>${obj.author}</div>
      <div>${obj.year}</div>
      `;
    bookList.appendChild(bookSection);
  });
};

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const yearInput = document.getElementById('year');

  const title = titleInput.value;
  const author = authorInput.value;
  const year = yearInput.value;

  if (title && author && year) {
    const bookData = { title, author, year };
    saveBook(bookData);
    existingBooks = getBook();
    console.log('in: ', existingBooks);
    displayBooks(existingBooks);

    titleInput.value = '';
    authorInput.value = '';
    yearInput.value = '';
  } else {
    alert('Please fill all fields');
  }
});

existingBooks = getBook();
console.log('out: ', existingBooks);
displayBooks(existingBooks);

deleteBtn.addEventListener('click', deleteBooks);
