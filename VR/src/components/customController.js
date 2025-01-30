AFRAME.registerComponent('custom-controls', {
    schema: {
      hand: {default: ''},
      model: {default: 'src/models/untitled.gltf'}
    },

    init: function() {
        console.log(this);
    },
  
    update: function () {
      var hand = this.data.hand;
      var el = this.el;
      var controlConfiguration = {
        hand: hand,
        model: true,
        orientationOffset: {x: 0, y: 0, z: hand === 'left' ? 90 : -90}
      };
  
      // Build on top of controller components.
      el.setAttribute('vive-controls', controlConfiguration);
      el.setAttribute('oculus-touch-controls', {hand: this.data.hand, model: false});
      el.setAttribute('windows-motion-controls', controlConfiguration);
  
      // Set a model.
      el.setAttribute('gltf-model', this.data.model);
    }
  });