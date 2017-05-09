

define(["src/Numfont"], function(Numfont) {

  var Tetris = Class.extend({

    init: function() {

      this.back = content.get("back")

      var num = content.get("numbers");
      this.font = {
        gray: new Numfont(num, 0, 9),
        cyan: new Numfont(num, 9, 9),
        red: new Numfont(num, 18, 9),
        blue: new Numfont(num, 27, 9),
        orange: new Numfont(num, 36, 9),
        green: new Numfont(num, 45, 9),
        yellow: new Numfont(num, 54, 9),
        purple: new Numfont(num, 63, 9)

      },

      this.data = {
        L:0,
        I:0,
        T:0,
        S:0,
        Z:0,
        O:0,
        J:0,

        TOT: 0,
      }
    },

    handleInputs: function(inpt) {

    },

    update: function() {

    },

    draw: function(ctx) {
      ctx.drawImage(this.back, 0, 0)

      this.font.purple.draw(ctx, 55, 10, 10, 5);
      this.font.gray.draw(ctx, this.data.TOT, 10, 10, 6);
    }
  });

  return Tetris;
});
