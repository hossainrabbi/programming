const form1 = document.forms['form1'];

let text = '';
for (let x of form1.elements) {
  text += x.value + '<br />';
}

function showDemo() {
  document.getElementById('demo').innerHTML = text;
}
