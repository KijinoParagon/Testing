function clickMove (type, key) {
    var evt;
    switch (type){
        case "up":
            evt = new Event("keyup", {key: key, asdf: "andy"});
        case "down":
            evt = new Event("keypress", {key: key, asdf: "andy"});
    }
    document.dispatchEvent(evt);
}

var tcMarkers = document.querySelectorAll(".tcMarker");
console.log("hello", tcMarkers);
for(elem of tcMarkers)
{
    console.log(elem);
    elem.addEventListener("mousedown", (evt) => {
        clickMove("down", evt.target.attributes.name);
    });

    elem.addEventListener("mouseup", (evt) => {
        clickMove("up", evt.target.attributes.name);
    });
}

//event.initEvent("build", true, true);