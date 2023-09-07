document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded");
    var html = document.documentElement;
    var height = html.offsetHeight;
    console.log(height);
    document.addEventListener("scroll", function() {
        var pos = window.scrollY/height*100;
        html.style.backgroundPositionY = (pos + "%");
        console.log("scrolled to" + pos + "  " + window.scrollY, height);
    });
});


