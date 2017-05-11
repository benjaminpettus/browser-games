

define(["src/GameBoard", "src/StatManager"], function(GameBoard, StatManager) {

  var Tetris = Class.extend({

    init: function() {

      this.gameBoard = new GameBoard();
      this.stat = new StatManager();

    },

    update: function(inpt) {
<<<<<<< HEAD

=======
    
>>>>>>> e44416eb8c229721ff667fb7aaacf8ef08ee1bc8
    },

    draw: function(ctx) {
      this.gameBoard.draw(ctx, this.stat);
    }
  });

  return Tetris;
});
