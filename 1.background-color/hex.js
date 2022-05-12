const colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', function () {
  let hexColor = '#';
  for (i = 0; i < 6; i++){
    hexColor += colors[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
})
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}