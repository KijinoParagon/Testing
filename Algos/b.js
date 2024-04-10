async function dfs(tree){
    var query = document.querySelector("#query").value;
    var list = [{node: tree, depth: 1, parentColumn: 1}];
    var currentDepth = 1;
    var column = 1;
  
    var d = getDepth(tree);
    var width = Math.pow(2, d);
  
    var padding = size * 1.2;
  
    while(true) {
        width = Math.pow(2, d);
        padding = size * 1.2;
    
        
      if(!list.length)
        break;
        ctx.clearRect(0, 0, canvas.height*2, canvas.width*2);
        printTree(tree);
      var leaf = list.pop();
      
      if(leaf.depth > currentDepth){
        currentDepth ++;
      }

      column = leaf.parentColumn;
      console.log("Column: " + column + "  Depth: " + leaf.depth);
      
      var x = size;
      //currentDepth 2^currentdepth-d
      //x*=d - leaf.depth + column * Math.pow(2, (d-currentDepth));
      //Width of column is Math.pow(2, currentDepth) to get the number of columns
      var colSize = Math.pow(2, d-leaf.depth);
      x*= column * colSize * 2;
      x-= colSize * size;
      
      x+=(size + padding);
      var y = (size + padding) * leaf.depth;
      x += posX * size/2;
      y += posY * size/2;
      ctx.beginPath();
      ctx.arc(x, y, size * 1.5, 0, 2 * Math.PI);
      ctx.strokeStyle="green";
      ctx.lineWidth = 10;
      ctx.stroke();
      
      if(leaf.node.value.name == query || leaf.node.value.id == query){break}
      if(leaf.node.left) list.push({node: leaf.node.right, depth: leaf.depth + 1, parentX: x, parentY: y, parentColumn: leaf.parentColumn * 2});
      if(leaf.node.right) list.push({node: leaf.node.left, depth: leaf.depth + 1, parentX: x, parentY: y, parentColumn: leaf.parentColumn * 2 - 1});
  

      var prom = new Promise(function(resolve){
        setTimeout(()=>{
            resolve(1);
        }, 100 * sp);
    });
      var wait = await prom;

  
    }
}

async function bfs(tree){
    var query = document.querySelector("#query").value;
    var list = [{node: tree, depth: 1}];
    var currentDepth = 1;
    var column = 1;
  
    var d = getDepth(tree);
    var width = Math.pow(2, d);
  
    var padding = size * 1.2;
  
    while(true) {
        width = Math.pow(2, d);
        padding = size * 1.2;
    
        
      if(!list.length)
        break;
        ctx.clearRect(0, 0, canvas.height*2, canvas.width*2);
        printTree(tree);
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
      ctx.arc(x, y, size * 1.5, 0, 2 * Math.PI);
      ctx.strokeStyle="green";
      ctx.lineWidth = 10;
      ctx.stroke();
      
      if(leaf.node.value.name == query || leaf.node.value.id == query){break}
      if(leaf.node.left) list.push({node: leaf.node.left, depth: leaf.depth + 1, parentX: x, parentY: y});
      if(leaf.node.right) list.push({node: leaf.node.right, depth: leaf.depth + 1, parentX: x, parentY: y});
  
      column++;

      var prom = new Promise(function(resolve){
        setTimeout(()=>{
            resolve(1);
        }, 100 * sp);
    });
      var wait = await prom;

  
    }
    
  }
  