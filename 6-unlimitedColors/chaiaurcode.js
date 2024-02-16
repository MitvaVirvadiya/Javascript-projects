document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const startBtn = document.getElementById('start');
  const stopBtn = document.getElementById('stop');
  const colors = [
    '#FF4081', // Pink
    '#9C27B0', // Purple
    '#3F51B5', // Indigo
    '#2196F3', // Blue
    '#00BCD4', // Cyan
    '#4CAF50', // Green
    '#FFC107', // Amber
    '#FF9800', // Orange
    '#FF5722', // Deep Orange
    '#795548', // Brown
    '#607D8B', // Blue Grey
    '#E91E63', // Pink
    '#673AB7', // Deep Purple
    '#03A9F4', // Light Blue
    '#009688', // Teal
    '#8BC34A', // Light Green
    '#FFEB3B', // Yellow
    '#FF5722', // Deep Orange
    '#FF9800', // Orange
    '#607D8B', // Blue Grey
    '#4CAF50', // Green
    '#795548', // Brown
    '#9C27B0', // Purple
  ];
  let index = 0;
  let intervalId;

  const bgChange = (color) => {
    body.style.backgroundColor = color;
    console.log(color);
  };

  const BGColorChanger = () => {
    if (index === colors.length) {
      index = 0;
    }

    bgChange(colors[index]);
    index++;
  };

  const startColorChange = () => {
    if (!intervalId) {
      intervalId = setInterval(BGColorChanger, 1000);
    }
  };

  const stopColorChange = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    startColorChange();
  });

  stopBtn.addEventListener('click', (event) => {
    event.preventDefault();
    stopColorChange();
  });
});
