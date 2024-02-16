document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (event) => {
    event.preventDefault();

    const key = `Pressed Key: ${event.key}`;

    document.querySelector('.color').textContent = key;
  });
});
