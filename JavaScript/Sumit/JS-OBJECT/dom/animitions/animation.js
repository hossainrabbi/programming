// Variable
const animation = document.getElementById('animation');
const btn = document.querySelector('button');
const clickP = document.getElementById('clickP');

// Animation Move function
function startAnimation() {
  let pos = 0;

  const interval = setInterval(() => {
    if (pos === 350) {
      clearInterval(interval);
    } else {
      pos++;
      animation.style.top = `${pos}px`;
      animation.style.left = `${pos}px`;
    }
  }, 5);

  btn.style.fontWeight = 600;
  btn.style.fontFamily = 'arial';
}

clickP.onclick = function () {
  this.innerText = 'Clicked!';
};
