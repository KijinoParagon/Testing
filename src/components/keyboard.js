AFRAME.registerComponent('keyboardcontrols', {

  schema: {
    speed: {type: 'vec3', default: {x: 0, y: 1, z: 0}},
    hand: {default: 'left'}
  },

  init: function () {
    var el = this.el;
    var self = this;
    document.addEventListener('keydown', (evt) => {
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
    

    //document.addEventListener('thumbstickchanged', this.colordebug(0));
    
    //document.addEventListener('thumbstickmoved', this.moveupdate);
    document.addEventListener('thumbstickmoved', function(evt) {
      self.moveupdate(self, evt);
    });
    
    //document.addEventListener('thumbstickdown', this.colordebug(1));
    //document.addEventListener('thumbstickup', this.colordebug(2));
    //document.addEventListener('thumbsticktouchstart', this.colordebug(3));
    //document.addEventListener('thumbsticktouchend', this.colordebug(4));
    //document.addEventListener('thumbstickmoved', this.colordebug(5));
    

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

  moveupdate: function(player, evt) {

    this.data.speed.x = evt.detail.x/8;
    this.data.speed.z = evt.detail.y/8;
    
  },

  testfu: function(evt, t) {
    console.log(t);
    //console.log(evt.target);
    console.log(evt);
    //console.log(x);
  },

  colordebug: function(x) {
    var color = '';
    switch(x){
      case 0:
        color = 'grey';
        break;
      case 1:
        color = 'blue';
        break;
      case 2:
        color = 'black';
        break;
      case 3:
        color = 'purple';
        break;
      case 4:
        color = 'orange';
        break;
      case 5:
        color = 'pink';
        break;
      case 6:
        color = 'yellow';
        break;

    }
    document.querySelector('a-sky').setAttribute('color', color)
  }
});