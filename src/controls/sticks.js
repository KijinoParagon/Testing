AFRAME.registerComponent('sticks', {

    init: function() {
        this.el.addEventListener('thumbstickchanged', this.moveupdate);
    },

    moveupdate: function(evt) {
        document.querySelector('el');
    }

});