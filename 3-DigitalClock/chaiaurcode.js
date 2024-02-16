document.addEventListener('DOMContentLoaded', () => {
  const clock = document.getElementById('clock');

  const timer = () => {
    const date = new Date();

    const hour = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');

    clock.textContent = `${hour}:${min}:${sec}`;
  };

  setInterval(timer, 1000);
});
