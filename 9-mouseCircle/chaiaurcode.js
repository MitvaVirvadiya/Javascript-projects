const cursor = document.querySelector('.cursor');
// const body = document.body

const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];

const moveCursor = (x, y) => {
  
  const percentX = (x / window.innerHeight) * 100
  const percentY = (y / window.innerWidth) * 100
  
  const colorIndex = Math.floor((percentX + percentY) / 20)
  console.log(colorIndex)
  const selectedColor = colors[colorIndex]

  cursor.style.backgroundColor = selectedColor
  // body.style.backgroundColor = selectedColor

  cursor.style.left = x + "px"
  cursor.style.top = y + "px"
}

document.addEventListener("mousemove", (event) => {
  moveCursor(event.clientX, event.clientY)
})

