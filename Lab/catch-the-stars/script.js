let stars = document.querySelectorAll('.star');
let container = document.querySelector('#container');
let moon = document.querySelector('#moon');

// let shoot = document.querySelector('.shoot');
// let shootbefore = document.querySelector('.shoot::before');


var anim = document.querySelectorAll('.shoot');

var anim2 = document.querySelectorAll('.shoot2');

for (let i = 0; i < 800; i++) {
  let star = document.createElement('div');
  star.classList.add('star');
  star.style.left = (99 * Math.random()) + '%';
  star.style.top = (99 * Math.random()) + '%'; 
  container.appendChild(star);
} 

// container.addEventListener('click', function (event) {
//   if (event.target.classList.contains('moon')) {
//     event.target.remove();

// moon.onclick = () => shootbefore.classList.add('shoot');(
  
  // container.addEventListener('click', function (event) {
  //   if (event.target.classList.contains('moon')) {
  //     event.target.element.remove('animationplaystate');
  //   } 
  // }
  
  
  document.getElementById('moon').onclick = function () {
    for (var i = 0; i < anim.length; i++) {
        if (anim[i].style.animationPlayState == 'paused') {
            anim[i].style.animationPlayState = 'running';
        }
        else {
            anim[i].style.animationPlayState = 'paused';
        }
        if (anim2[i].style.animationPlayState == 'paused') {
            anim2[i].style.animationPlayState = 'running';
        }
        else {
            anim2[i].style.animationPlayState = 'paused';
        }
      }
}