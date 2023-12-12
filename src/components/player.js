AFRAME.registerComponent('player', {

    schema: {
        speed: {type: 'vec3', default: {x: 0, y: 1, z: 0}},
        height: {default: 1.6},
        camera: {}
    },

    init: function () {
        this.data.camera = document.querySelector("#camera").object3D;
        console.log(this.data.camera);
        document.querySelector("a-scene").addEventListener('enter-vr', () => this.data.height = 0);
        document.querySelector("a-scene").addEventListener('exit-vr', () => this.data.height = 1.6);
    },

    tick: function() {
        this.moveUpdate();
        var quaternion = new THREE.Quaternion();
        //console.log(document.querySelector("#camera").object3D.quaternion._y * document.querySelector("#camera").object3D.quaternion._w + "  " + Math.cos(document.querySelector("#camera").object3D.rotation._y));
        console.log(this.data.speed);
        //console.log(Math.cos(180));
        //this.data.camera = document.querySelector("#camera").object3D.getWorldQuaternion();
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