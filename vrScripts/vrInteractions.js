var speed = 1;
AFRAME.registerComponent('test', {

    init: function () {
      var data = this.data;
      var el = this.el;

      el.addEventListener('buttondown', function (evt) {
        console.log(evt);
        speed = 1;
      });

      el.addEventListener('onkeydown', function (evt) {
        console.log(evt);
        speed = 1;
      });

    },

    tick: function() {
        var pos = this.el.object3D.position;
        pos.y += speed;
        //console.log(speed, pos.y);
        if(speed > -1 && pos.y > 1.6) {
            speed-=0.05;
        }
        if(pos.y <= 1.6)
        {
            speed = 0;
        }

        if(pos.y < 1.6)
        {
            pos.y = 1.6;
        }

    }
  });