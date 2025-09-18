const buttons = document.querySelectorAll('.color-btn');
const randomBtn = document.getElementById('randomBtn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.style.background = button.dataset.color;
  });
});

randomBtn.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  document.body.style.background = randomColor;
});
