AFRAME.registerComponent('keyboardcontrols', {

  schema: {
    speed: {type: 'vec3', default: {x: 0, y: 1, z: 0}}
  },

  init: function () {
    var el = this.el;
    document.addEventListener('keydown', () => {
      this.data.speed.y = 1;
    });

    document.addEventListener('abuttonchanged', () => {
      this.data.speed.y = 1;
      document.querySelector('a-sky').setAttribute('color', 'red');
    });
    document.addEventListener('xbuttonchanged', () => {
      this.data.speed.y = 1;
      document.querySelector('a-sky').setAttribute('color', 'red');
    });
    document.addEventListener('ybuttonchanged', () => {
      this.data.speed.y = 1;
      document.querySelector('a-sky').setAttribute('color', 'red');
    });
    document.addEventListener('bbuttonchanged', () => {
      this.data.speed.y = 1;
      document.querySelector('a-sky').setAttribute('color', 'red');
    });
    document.addEventListener('gripchanged', () => {
      this.data.speed.y = 1;
      document.querySelector('a-sky').setAttribute('color', 'red');
    });

  },

  tick: function() {
      var pos = this.el.object3D.position;
      pos.x += this.data.speed.x;
      pos.y += this.data.speed.y;
      pos.z += this.data.speed.z;
      //console.log(speed, pos.y);
      if(this.data.speed.y > -1 && pos.y > 1.6) {
        this.data.speed.y-=0.05;
      }
      if(pos.y < 1.6)
      {
          this.data.speed.y = 0;
          pos.y = 1.6
      }

  }
});