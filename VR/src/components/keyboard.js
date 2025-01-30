AFRAME.registerComponent('keyboardcontrols', {
  schema: {
    speed: {type: 'vec3', default: {x: 0, y: 1, z: 0}},
    runMult: {default: 1},
    hand: {default: 'left'},
    height: {default: 1.6},
    player: {}
  },

  init: function () {
    var el = this.el;
    var self = this;


    this.data.player = el.components.player.data;

    document.addEventListener('keydown', (evt) => {
      if(!this.data.player.speed.y > 0 && evt.key == " ")
      {
        this.data.player.speed.y = .5;
      }

      var sp = {x: 0, y: 0, z: 0};

      switch (evt.key) {
        case "w":
          sp.y = -1 ;
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
        case "ShiftLeft":
          runMult = 2;
          break;
      }


      (sp.x || sp.y) ? this.moveupdate({detail: sp}) : sp.x++;
    });

    document.addEventListener('abuttondown', () => {
      if(!this.data.player.speed.y > 0)
      {
        this.data.player.speed.y = 1;
      }
    });

    document.addEventListener('keypress', (evt) => {
      
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
        case "ShiftLeft":
          runMult = 1;
          break;
      }


      (!sp.x || !sp.y) ? this.moveupdate({detail: sp}) : sp.x++;
    });
    
    document.addEventListener('thumbstickmoved', function(evt) {
      self.moveupdate(evt);
    });
  },

  moveupdate: function(evt) {    
    var j = evt.detail.y/8 * this.data.runMult * Math.cos(document.querySelector("#camera").object3D.rotation._y);//done
    var i = evt.detail.x/8 * this.data.runMult *  Math.cos(document.querySelector("#camera").object3D.rotation._y); 

    i += evt.detail.y/8 * this.data.runMult * Math.sin(document.querySelector("#camera").object3D.rotation._y);//done
    j += evt.detail.x/8 * this.data.runMult * Math.sin(document.querySelector("#camera").object3D.rotation._y) * -1;

    console.log(j);
    this.data.player.speed.x = i;
    this.data.player.speed.z = j;
  },
});