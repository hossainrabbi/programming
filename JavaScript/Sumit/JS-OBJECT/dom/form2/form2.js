// Selector
const ageForm = document.forms['ageForm'];
const demo = document.getElementById('demo');
const time = document.querySelector('#time');
const button = document.getElementsByTagName('button')[1];

// Variable
const date = new Date();

// Main Code
// Form Filed
function handleAgeForm() {
  const inputValue = ageForm['age'].value;

  if (inputValue === '') {
    alert('Input Required!');
    return false;
  } else if (isNaN(inputValue)) {
    alert('Only Number Allow!');
    return false;
  }

  demo.innerText = inputValue;
  return false;
}

// Timer Filed
time.innerText = date.toLocaleTimeString();
function timerBtn() {
  timeCss = time.style;
  timeCss.color = 'red';
  timeCss.fontSize = '40px';
  timeCss.fontFamily = 'arial';

  button.style.padding = '5px 10px';
  button.style.backgroundColor = '#dddddd';
  button.style.cursor = 'pointer';
}
