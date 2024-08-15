//https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
//Haversine Formula
function distance(la1, lo1, la2, lo2) {
    const r = 3961; //Radius of earth in miles
    const p = Math.PI / 180; //Rads
    const a = 0.5 - Math.cos((la2 - la1) * p) / 2
                  + Math.cos(la1 * p) * Math.cos(la2 * p) *
                    (1 - Math.cos((lo2 - lo1) * p)) / 2;
    return 2 * r * Math.asin(Math.sqrt(a));
}
var dis = 0;

//Callbacks for geolocation
const successCallback = async (position) => {
    console.log(position);
    dis = distance(position.coords.latitude, position.coords.longitude, 43.569043791791046, -96.78053598650172);
    //document.write("You are currently " + dis + " miles from stc");

    document.querySelector("p").textContent = dis;
    
};  
const errorCallback = async (error) => {
    //console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);