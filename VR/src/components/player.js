AFRAME.registerComponent('player', {

    schema: {
        speed: {type: 'vec3', default: {x: 0, y: 1, z: 0}},
        height: {default: 1.6},
        camera: {}
    },

    init: function () {
        console.log(this);
        this.data.camera = document.querySelector("#camera").object3D;
        document.querySelector("a-scene").addEventListener('enter-vr', () => this.data.height = 0);
        document.querySelector("a-scene").addEventListener('exit-vr', () => this.data.height = 1.6);
    },

    tick: function() {
        this.moveUpdate();
        var quaternion = new THREE.Quaternion();
    },

    moveUpdate: function() {
        var pos = this.el.object3D.position;
        var speed = this.data.speed;
        var height = this.data.height;

        pos.x += speed.x;
        pos.y += speed.y;
        pos.z += speed.z;

        if(speed.y > -1 && pos.y > height) {
          speed.y-=0.05;
        }
        if(pos.y < height)
        {
            speed.y = 0;
            pos.y = height;
        }
    }

});