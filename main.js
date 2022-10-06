const board = document.querySelector('.container');
const gridSizebtn = document.querySelector('#gridSize');
let message = document.querySelector('#message');
const resetBtn = document.querySelector('#reset');
let draw = false;

function createGrid(size) {
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let num_of_divs = size * size;

  for (let i = 0; i < num_of_divs; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', () => {
      if (!draw) {
        return;
      }
      div.style.backgroundColor = 'black';
      div.style.transition = '.2s ease-in';
    });
    div.addEventListener('mousedown', () => {
      div.style.backgroundColor = 'black';
      div.style.transition = '.2s ease-in';
    });
    board.appendChild(div);
  }
}

gridSizebtn.addEventListener('click', gridSize);

function gridSize() {
  let choose_size = prompt('Choose a grid size');

  if (choose_size == null || choose_size == '') {
    message.innerText = 'Must enter a grid size!';
  } else if (choose_size < 0 || choose_size > 100) {
    message.innerText = 'Grid size must be between 1 and 100!';
  } else {
    message.innerText = `Current Grid: ${choose_size} x ${choose_size}`;
    createGrid(choose_size);
    return choose_size;
  }
}

resetBtn.addEventListener('click', resetGrid);

function resetGrid() {
  const divs = document.querySelectorAll('div');
  divs.forEach((div) => {
    div.style.backgroundColor = 'white';
  });
  board.classList.add('shake');
}

board.addEventListener('transitionend', () => {
  board.classList.remove('shake');
});

window.addEventListener('mousedown', () => (draw = true));
window.addEventListener('mouseup', () => (draw = false));
