AFRAME.registerComponent('keyboardcontrols', {

  schema: {
    speed: {type: 'vec3', default: {x: 0, y: 1, z: 0}},
    hand: {default: 'left'},
    height: {default: 1.6}
  },

  init: function () {
    var el = this.el;
    var self = this;
    document.addEventListener('keydown', (evt) => {
      if(!this.data.speed.y > 0 && evt.key == " ")
      {
        this.data.speed.y = .5;
      }
    });

    document.addEventListener('abuttondown', () => {
      if(!this.data.speed.y > 0)
      {
        this.data.speed.y = 1;
      }
    });

    document.addEventListener('keypress', (evt) => {
      var sp = {x: 0, y: 0, z: 0};
      switch (evt.key) {
        case "w":
          sp.y = -1;
          break;
        case "a":
          sp.x = -1;
          break;
        case "s":
          sp.y = 1;
          break;
        case "d":
          sp.x = 1;
          break;
      }

      (sp.x || sp.y) ? this.moveupdate({detail: sp}) : sp.x++;
    });

    document.addEventListener('keyup', (evt) => {
      var sp = {x: 0, y: 0, z: 0};
      switch (evt.key) {
        case "w":
          sp.y = 0;
          break;
        case "a":
          sp.x = 0;
          break;
        case "s":
          sp.y = 0;
          break;
        case "d":
          sp.x = 0;
          break;
      }

      (!sp.x || !sp.y) ? this.moveupdate({detail: sp}) : sp.x++;
    });
    
    document.addEventListener('thumbstickmoved', function(evt) {
      self.moveupdate(evt);
    });
  },

  tick: function() {
      var pos = this.el.object3D.position;
      pos.x += this.data.speed.x;
      pos.y += this.data.speed.y;
      pos.z += this.data.speed.z;
      //console.log(this.data.speed, pos.y);
      if(this.data.speed.y > -1 && pos.y > this.data.height) {
        this.data.speed.y-=0.05;
      }
      if(pos.y < this.data.height)
      {
          this.data.speed.y = 0;
          pos.y = this.data.height;
      }
  },

  moveupdate: function(evt) {
    this.data.speed.x = evt.detail.x/8;
    this.data.speed.z = evt.detail.y/8;
  },
});

AFRAME.registerComponent('clickable', {
  init: function() {
    console.log(this.el);
    this.el.addEventListener('onclick', (evt) => {
      console.log("clicked")
      var sp = {x: 0, y: 0, z: 0};
      console.log(evt);
      /*switch (evt.key) {
        case "w":
          sp.y = 0;
          break;
        case "a":
          sp.x = 0;
          break;
        case "s":
          sp.y = 0;
          break;
        case "d":
          sp.x = 0;
          break;
      }*/

    });
  }

});