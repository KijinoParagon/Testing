var sortButton = document.querySelector("#sort");
var addButton = document.querySelector("#add");
var randButton = document.querySelector("#rand");
var input = document.querySelector("#input");
var output = document.querySelector("#output");
var process = document.querySelector("#process");

var list = [];

function printOut(array, clear = true, br = false){
    var msg = "";
    if(array.length > 0){
        msg += toMSG(array);
    }
    if(br)    msg += "<br>";
    if(clear)
        output.innerHTML = msg;
    else
        output.innerHTML += msg;
}

addButton.addEventListener("click", ()=> {
    console.log(list);
    list.push(input.value);
    printOut(list);
});

randButton.addEventListener("click", ()=> {
    var i = 10;
    while (i > 0)
    {
        list.push(Math.floor(Math.random()*99));
        i--;
    }
    printOut(list);
    
});

function toMSG(arr){
    console.log(arr);
    var msg = "";
    arr.forEach((i) => {
        msg += i + " - ";
    });
    msg = msg.slice(0, -3);
    console.log(msg);
    return msg;
}

sortButton.addEventListener("click", async ()=> {
    var step = await quicksort(list, 0, list.length-1, 1);
    console.log(list);
    console.log(steps);
    var msg = "";
    steps.forEach((n)=>{
        msg += "<br>Step " + n[1] + ": <br>&emsp;Pivot:" + n[2] +"<br>&emsp;&emsp;" + n[0] + "<br>";
    });
    process.innerHTML = msg;
});

var steps = [];
async function quicksort(arr, low, high, step){
    var pivotIndex = high;
    steps.push([arr.join(" - "), step, arr[pivotIndex]]);
    if(low < high)
    {
        pivotIndex = partition(arr, low, high);
        var step = await quicksort(arr, low, pivotIndex-1, step + 1);
        step = await quicksort(arr, pivotIndex + 1, high, step + 1);
    }
    return step;
}

function partition(arr, low, high){
    var pivot = arr[high];
    var i = low - 1;
    for(var j = low; j < high; j++)
    {
        if(arr[j] <=pivot){
            i+=1;
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    }
    var temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return i+1;
}