

define(function() {
  var _vendors = ["o", "ms", "moz", "webkit"];

  for (var i = _vendors.length; i-- && !window.requestAnimationFrame;) {
    var v = _vendors[i]
    window.requestAnimationFrame = window[v + "requestAnimationFrame"];
    window.cancelAnimationFrame = window[v + "cancelAnimationFrame"] ||
                                  window[v + 'cancelRequestAnimationFrame'];
  }
  var Game = Class.extend({

    tick: function() {
      console.warn("should be overrided by childclass!")
    },

    stop: function() {
      if(this._reqframe) {
        window.cancelAnimationFrame(this._reqframe);
      }
      this._reqframe = null;
      this._running = false;
    },

    run: function() {
      if(this._running) return;
      this._running = true;
      var self = this;
      function loop() {
        self._reqframe = window.requestAnimationFrame(loop);

        self.tick();

        canvas.flip();
      }
      this._reqframe = window.requestAnimationFrame(loop);
    }

  })

  return Game
})
