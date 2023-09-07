document.addEventListener("DOMContentLoaded", function() {
    var html = document.documentElement;
    var height = html.offsetHeight;
    document.addEventListener("scroll", function() {
        var pos = window.scrollY/height*100;
        html.style.backgroundPositionY = (pos + "%");
    });
});


