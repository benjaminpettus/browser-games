const COLS = 10;
const ROWS = 20;
const lose;
const interval;
const current;
const currentX;
const currentY;
const shapes = [

  [ 1, 1, 1, 1 ],
  [ 1, 1, 1, 0, 1 ],
  [ 1, 1, 1, 0, 0, 0, 1 ],
  [ 1, 1, 0, 0, 1, 1 ],
  [ 1, 1, 0, 0, 0, 1, 1 ],
  [ 0, 1, 1, 0, 1, 1 ],
  [ 0, 1, 0, 0, 1, 1, 1 ]

];

let colors = [
  'cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'
];

function newShape() {
  let id = Math.floor( Math.random() * shapes.length );
  let shape = shapes[ id ];

  current = [];
  for (var y = 0; y < 4; ++y ) {
    current[ y ] = [];
    for ( var x = 0; x < 4; ++x ) {
      var i = 4 * y + x;
      if ( typeof shape[i] != 'undefined' && shape[i] ) {
        current[y][x] = id + 1;
      }
      else {
        current[y][x] = 0;
      }
    }
  }
  currentX = 5;
  currentY = 0;
}

function init() {
  for ( var y = 0; y < ROWS; ++y ) {
    board[y] = y;
    for ( var x = 0; x < COLS; ++x ) {
      board[y][x] = 0
    }
  }
}

function tick() {
  if ( valid( 0, 1 ) ) {
    ++currentY;
  }

  else {
    freeze();
    clearLines();
    if (lose) {
      newGame();
      return false;
    }
    newShape();
  }
}

function freeze() {
  for ( var y = 0; y < 4; ++y ) {
    for ( var x = 0; x < 4; ++x ) {
      if ( current[y][x] ) {
        board[ y + currentY ][ x + currentY] = current[y][x];
      }
    }
  }
}
