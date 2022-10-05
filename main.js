const board = document.querySelector('.container');

function createGrid(size) {
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let num_of_divs = size * size;

  for (let i = 0; i < num_of_divs; i++) {
    let div = document.createElement('div');
    div.style.border = '1px solid';
    div.addEventListener('mouseover', draw);
    board.appendChild(div);
  }
}

function draw() {
  this.style.backgroundColor = 'black';
}
