let count = 0;
let hate = 0;

const button = document.getElementById('button');
const stats = document.getElementById('stats');
const hates = document.getElementById('hater');
const randomize = document.getElementById('randomButton');

function render() {
  stats.innerText = `Клики ${count}`;
  hates.innerText = 'Ненависть' + hate;
  button.style.fontSize = `${100 + count * 10}%`;
  console.log(`${100 + count * 10}%`);
  // button.style.width = button.style.width * 1.1 + 'px';
}

randomize.addEventListener('click', crackButtonCss);

function getRandomInt() {
  return Math.random();
}
function crackButtonCss() {
  let crackKey = getRandomInt();
  console.log(crackKey);
  let crashKey = crackKey.toString().split('');
  console.log(crashKey);
  button.style.backgroundColor = `#${crashKey[4] + crashKey[5] + crashKey[6]}`;
  button.style.borderRadius = `${crashKey[8] + crashKey[3]}%`;
}

button.addEventListener('click', onClick);

function onClick() {
  count++;
  hate = hate * 1.1 + 1;
  render();
}

render();
