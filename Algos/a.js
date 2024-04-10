var canvas = document.querySelector("#canv");
var ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth * 2;
ctx.canvas.height = window.innerHeight * 3;
var posX = 0;
var posY = 0;



function printTree(tree){
  var list = [{node: tree, depth: 1}];
  var currentDepth = 1;
  var column = 1;

  var d = getDepth(tree);
  var width = Math.pow(2, d);

  //var size = parseInt(sizeSlide.value);
  var padding = size * 1.2;

  while(true) {
    if(!list.length)
      break;

    var leaf = list.shift();
    if(leaf.depth > currentDepth){
      currentDepth ++;
      column = 1;
    }
    
    var x = size;
    //currentDepth 2^currentdepth-d
    //x*=d - leaf.depth + column * Math.pow(2, (d-currentDepth));
    //Width of column is Math.pow(2, currentDepth) to get the number of columns
    var colSize = Math.pow(2, d-currentDepth);
    x*= column * colSize * 2;
    x-= colSize * size;
    
    x+=(size + padding);
    var y = (size + padding) * leaf.depth;
    x += posX * size/2;
    y += posY * size/2;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.stroke();
    ctx.font = (size/3) + "px Arial";
    ctx.fillStyle="black";
    ctx.fillText(leaf.node.value.name, x-size + 4, y);
    if(leaf.parentX)
    {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.strokeStyle = "red";
      ctx.lineTo(leaf.parentX, leaf.parentY);
      ctx.stroke();
    }

    if(leaf.node.left) list.push({node: leaf.node.left, depth: leaf.depth + 1, parentX: x, parentY: y});
    if(leaf.node.right) list.push({node: leaf.node.right, depth: leaf.depth + 1, parentX: x, parentY: y});

    column++;

  }
}

var names = ["Vash", "Meryl", "Wolfwood", "Knives", "Legato", "Milly", "Rem", "Yagami", "L", "Amane", "Ryuk", "Mello", "Matsuda", "Sayu", "Light", "Watari", "Lind L.", "Catherine", "Vincent", "Katherine", "Erica", "Qatherine", "Orlando", "Toby", "Jonny", "Boss", "Justin", "Todd", "Archie", "Daniel", "Morgan", "Anna", "Lindsay", "Martha", "Jacob", "Natalie", "Aidric", "Ai", "Fang", "Character 1", "Huey", "Louie", "Dewey", "Bob", "Scrooge"];
var ids = [];
for(var i = 0; i < names.length; i++)
{
  ids.push(i + 1);
}

var tree = new Leaf({id: 0, name: "Saverem"})
var t = 1;
names.forEach((n) =>{
  insert(new Leaf({id: t, name: n}), tree);
  t++;

});

printTree(tree);

//get the depth
//max width = 2^depth or math.pow(2, depth);
//width of circle + padding * max width/2



sizeSlide.addEventListener("input", ()=> {
  ctx.clearRect(0, 0, canvas.height*2, canvas.width*2);
  size=parseInt(sizeSlide.value);
  //console.log("Here");
  printTree(tree);
});

spSlide.addEventListener("input", ()=>{
  sp = parseInt(spSlide.value);
})

document.querySelector("#add").addEventListener("click", ()=> {
  ctx.clearRect(0, 0, canvas.height*2, canvas.width*2);
  insert(new Leaf({id: t, name: document.querySelector("#newVal").value}), tree);
  t++;
  printTree(tree);
});

document.querySelector("#posX").addEventListener("input", ()=> {
  posX = parseInt(document.querySelector("#posX").value);
  ctx.clearRect(0, 0, canvas.height*2, canvas.width*2);
  printTree(tree);
});

document.querySelector("#posY").addEventListener("input", ()=> {
  posY = parseInt(document.querySelector("#posY").value);
  ctx.clearRect(0, 0, canvas.height*2, canvas.width*2);
  printTree(tree);
});

document.querySelector("#bfs").addEventListener("click", ()=> {
  bfs(tree);
});

document.querySelector("#dfs").addEventListener("click", ()=> {
  dfs(tree);
});
//document.querySelector(".tree").innerHTML = printTree(tree);

