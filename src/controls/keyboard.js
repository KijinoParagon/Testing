AFRAME.registerComponent('keyboardcontrols', {

  schema: {
    speed: {type: 'vec3', default: {x: 0, y: 1, z: 0}}
  },

  init: function () {
    var el = this.el;
    document.addEventListener('keydown', () => {
      if(!this.data.speed.y > 0)
      {
        this.data.speed.y = 1;
      }
    });

    document.addEventListener('abuttondown', () => {
      if(!this.data.speed.y > 0)
      {
        this.data.speed.y = 1;
      }
    });

    document.addEventListener('thumbstickchanged', this.moveupdate);

  },

  tick: function() {
      var pos = this.el.object3D.position;
      pos.x += this.data.speed.x;
      pos.y += this.data.speed.y;
      pos.z += this.data.speed.z;
      //console.log(speed, pos.y);
      if(this.data.speed.y > -1 && pos.y > 0) {
        this.data.speed.y-=0.05;
      }
      if(pos.y < 0)
      {
          this.data.speed.y = 0;
          pos.y = 0
      }
  },

  moveupdate: function(evt) {
    console.log(evt);
    if (evt.detail.y > 0.95 || evt.detail.y < -0.95) { this.data.speed.z = evt.detail.y }
    if (evt.detail.x > 0.95 || evt.detail.x < -0.95) { this.data.speed.x = evt.detail.x }

  }
});