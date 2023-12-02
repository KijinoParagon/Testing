function control (evt) {
    var player = document.querySelector("#player");
    switch (evt.key){
        case " ": 
            console.log(evt);
            console.log("hello");
            player.setAttribute('speed', 1) = 1;
    }
}