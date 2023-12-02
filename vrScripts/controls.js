var speed = 1;
AFRAME.registerComponent('jump', {
    init: function () {
      var el = this.el;
      el.addEventListener('xbuttondown', function (evt) {
        speed = 1;
      });

      el.addEventListener('keydown', function (evt) {
        speed = 1;
        console.log("keydown");
        console.log(evt);
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