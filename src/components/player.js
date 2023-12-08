AFRAME.registerComponent('keyboardcontrols', {

    schema: {
        speed: {type: 'vec3', default: {x: 0, y: 1, z: 0}},
        hand: {default: 'left'},
        height: {default: 1.6}
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

});