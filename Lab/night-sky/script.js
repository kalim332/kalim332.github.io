let bubbles = document.querySelectorAll('.bubble');
let container = document.querySelector('#container');

for (let i = 0; i < 800; i++) {
  let bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = (99 * Math.random()) + '%';
  bubble.style.top = (99 * Math.random()) + '%'; 
  container.appendChild(bubble);
} 

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('bubble')) {
    event.target.remove();
  }
});