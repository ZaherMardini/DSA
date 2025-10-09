class BST{
  constructor(value){
    this.root = new Node(value);
  }
  isEmpty(){
    return this.root === null;
  }
  compare(node,input){
    let guide = node;
    if(input.value >= guide.value){
      if(guide.right === null){
        guide.right = input;
        return input;
      }else{
        guide = guide.right;
        this.compare(guide,input);
      }
    }else{
      if(guide.left === null){
        guide.left = input;
        return input;
      }else{
        guide = guide.left;
        this.compare(guide,input);
      }
    }
  }
  insert(value){
    let node = new Node(value);
    if(this.isEmpty()){
      this.root = node;
    }else{
      this.compare(this.root,node);
    }
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

//+++++++++++++ testing ground +++++++++++++\\
// In JS only objects can be passed by reference to functions
let tree = new BST(5);
tree.insert(7);
tree.insert(9);
tree.insert(0);
// console.log(tree.root);
//+++++++++++++ end testing ground +++++++++++++\\
