// Variable
const button = document.getElementById('button');
const h3 = document.getElementById('h3');
const container = document.getElementById('container');
const name = document.getElementById('name');

// click for Event
button.addEventListener('click', () => {
  h3.innerText = 'Hello World';
});

// mouseover for event
button.addEventListener('mouseover', () =>
  mouseOverEvent('Hello Mouse Over Event')
);

function mouseOverEvent(text) {
  h3.innerHTML = `<i>${text}<i>`;
}

// mouseout for event
button.addEventListener('mouseout', mouseout);

function mouseout() {
  h3.innerText = 'I am Mouse out Event';
}

// Event Bubbling
container.addEventListener(
  'click',
  () => console.log('Clicked Container'),
  true
);
name.addEventListener('click', () => console.log('Clicked Name'), true);
