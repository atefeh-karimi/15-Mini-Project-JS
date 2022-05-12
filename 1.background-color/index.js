const colors = ['green', 'red', 'blue'];
const btn = document.getElementById('btn');
const color = document.getElementById('color');
const body = document.querySelector('body');

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
    body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}