AFRAME.registerComponent('keyboardControls', {

  schema: {
    speed: {type: 'int', default: 1}
  },

  init: function () {
    var el = this.el;

    document.addEventListener('keydown', () => {
      this.data.speed = 1;
    });

    document.addEventListener('abuttondown', () => {
      this.data.speed = 1;
    });

  },

  tick: function() {
      var pos = this.el.object3D.position;
      pos.y += this.data.speed;
      //console.log(speed, pos.y);
      if(this.data.speed > -1 && pos.y > 1.6) {
        this.data.speed-=0.05;
      }
      if(pos.y < 1.6)
      {
          this.data.speed = 0;
      }

      if(pos.y < 1.6)
      {
          pos.y = 1.6;
      }

  }
});