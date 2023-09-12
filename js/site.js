let file="https://kijinoparagon.github.io/Portfolio/nav.html";

document.addEventListener("DOMContentLoaded", function() {
    var html = document.documentElement;
    var height = html.offsetHeight;
    var navSections = document.querySelectorAll(".navSection");

    fetch(file)
    .then(x => x.text())
    .then(y => document.getElementById("navContainer").innerHTML = y);

    document.addEventListener("scroll", function() {
        var pos = window.scrollY/height*100;
        html.style.backgroundPositionY = (pos + "%");
    });

    
    //Mobile Rules
    if (screen.width < 601)
    {
        //Show/hide the subnavs when clicking on the navsections
        navSections.forEach(element => {
            element.addEventListener("click", function() {
                if(element.nextElementSibling.style.display == "none")
                {
                    element.nextElementSibling.style.display = "block";
                }
                else {
                    element.nextElementSibling.style.display = "none";
                }
            });
        });
    }
    //Desktop Rules
    else {
        //Update the Nav to account for how many tabs it should have
        navSections.forEach((element, index) => {
            element.style.width = 100/navSections.length + "%";
            element.nextElementSibling.style.left = index * 100/navSections.length + "%";
            element.nextElementSibling.style.width = 100/navSections.length + "%";
        });
    }
});


