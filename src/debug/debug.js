//Pressing the abutton will submit data to the debug page, displaying logs of the stick events

AFRAME.registerComponent('debug-stick', {

  schema: {
    speed: {type: 'vec3', default: {x: 0, y: 1, z: 0}},
    hand: {default: 'left'}
  },

  init: function () {
    var el = this.el;

    document.addEventListener('abuttondown', () => {
 
        location.href = location.href.slice(0, -7) + "/logs?log=" + array.toString();
        document.querySelector('a-sky').setAttribute('color', 'green');
    });
    document.addEventListener('thumbstickmoved', this.logthumb);

  },
  
  logthumb: function(evt) {
    if(evt.detail.x > 0.95 || evt.detail.x < -0.95 || evt.detail.y > 0.95 || evt.detail.y < -0.95 ){
      array.push("Event: ");
      try{
        array.push("evt: " + evt.type); 
        array.push("det: " + evt.detail); 
        array.push("x: " + evt.detail.x.toString()); 
        array.push("y: " + evt.detail.y.toString());
      }
      catch(err) {
        array.push(err.message);
      }
      array.push("<br>"); 
    }
    
  }
});