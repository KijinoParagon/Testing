function distance(lat1, lon1, lat2, lon2) {
    const r = 6371; // km
    const p = Math.PI / 180;
  
    const a = 0.5 - Math.cos((lat2 - lat1) * p) / 2
                  + Math.cos(lat1 * p) * Math.cos(lat2 * p) *
                    (1 - Math.cos((lon2 - lon1) * p)) / 2;
  
    return 2 * r * Math.asin(Math.sqrt(a)) * 0.621371;
  }
const successCallback = (position) => {
    console.log(position);
    document.write("You are currently " + distance(position.coords.latitude, position.coords.longitude, 43.569043791791046, -96.78053598650172) + " miles from stc");

  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);