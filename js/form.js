document.addEventListener("DOMContentLoaded", function() {
    var submit = document.getElementById("submitButton");
    submit.addEventListener("click", function(event) {
        event.preventDefault();
        var values = [];
        var inputs = document.querySelectorAll("input");
        inputs.forEach(function(input) {
            values.push(input.value);
        })
        if(values.length > 0 && values[0] != null && values[0] != '')
        {
            window.location.replace("results.html?")
            console.log(values)
        }
    })
});