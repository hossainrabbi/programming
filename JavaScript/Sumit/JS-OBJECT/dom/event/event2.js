// Variable
const container = document.getElementById('container');
const remove = document.getElementById('remove');
const demo = document.getElementById('demo');

// Random Function
function randomFunction() {
  demo.innerText = Math.floor(Math.random() * 100) + 1;
}

// Added Random number in demo element
container.addEventListener('mousemove', randomFunction);

// Remove Random number in demo element
remove.addEventListener('click', () => {
  container.removeEventListener('mousemove', randomFunction);
});
