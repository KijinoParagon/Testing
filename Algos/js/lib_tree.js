/*
  Parameters: value
  Returns: New Leaf
  Properties:
      value - The value of the leaf
      left - The left child leaf
      right - The right child leaf
*/
class Leaf {
  constructor(value)
  {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
  Parameters: 
    tree - A balanced tree made from Leaf objects
  Returns: Current depth of the tree
  Presumes that the tree is balanced properly
  Looks at the deepest left node
*/
function getDepth(tree)
{
  var depth = 1;
  var node = tree;
  while(true)
  {
    if(node.left)
    {
      node = node.left;
      depth++;
      continue;
    }
    return depth;
        
  }
}

/*
  Parameters: 
      newLeaf - The new Leaf object to add
      tree - The tree of Leaf objects to add the newLeaf to
  Returns: void
  Presumes that the tree is balanced properly
*/
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