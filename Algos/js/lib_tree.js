var sizeSlide = document.querySelector("#nodeSize");
var size = parseInt(sizeSlide.value);
var spSlide = document.querySelector("#sp");
var sp = parseInt(spSlide.value);
class Leaf {
  constructor(value)
  {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getDepth(tree)
{
  var depth = 1;
    var node = tree;
    //Find the deepest depth, which will always be to the left
    while(true)
    {
      if(node.left)
      {
        node = node.left;
        depth++;
      }
      else {
        break
      }
        
  }

  return depth;
}

function insert (newLeaf, tree) {
    var depth = 1;
    var node = tree;
    //Find the deepest depth, which will always be to the left
    while(true)
    {
      if(node.left)
      {
        node = node.left;
        depth++;
      }
      else {
        break
      }
        
    }

    var list = [{node: tree, depth: 1}];
    while(true){
      var leaf = list.shift();
      if (leaf.depth == depth - 1 && !leaf.node.left)
      {
        leaf.node.left = newLeaf;
        break
      }
      else if (leaf.depth == depth - 1 && !leaf.node.right)
      {
        leaf.node.right = newLeaf;
        break
      }
      else if (leaf.depth < depth - 1)
      {
        list.push({node: leaf.node.left, depth: leaf.depth + 1});
        list.push({node: leaf.node.right, depth: leaf.depth + 1});
      }
      else if (!list.length)
      {
        node.left = newLeaf;
        break;
      }

    }
    
}