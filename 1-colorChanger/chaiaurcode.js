document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.body;
  const colors = ['grey', 'white', 'blue', 'yellow', 'red', 'cyan'];

  const BGColorChanger = (color) => {
    canvas.style.backgroundColor = color;
  };

  colors.forEach((color) => {
    document.getElementById(color).addEventListener('click', () => {
      BGColorChanger(color);
    });
  });
});
