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
  lookup(value){
    let current = this.root;
    while(!(current && value === current.value)){
      if(!current){
        return null;
      }
      if(current && value > current.value){
        current = current.right;
      }
      if(current && value < current.value){
        current = current.left;
      }
    }
    return current;
  }
  insert(value){
    let node = new Node(value);
    if(this.isEmpty()){
      this.root = node;
    }else{
      this.compare(this.root,node);
    }
  }
  isLeaf(node){
    return !node.right && !node.left;
  }
  lookupForRemove(value){
    let prev = null;
    let current = this.root;
    while(!(current && value === current.value)){
      if(!current){
        return [prev,null];
      }
      if(current && value > current.value){
        prev = current;
        current = current.right;
      }
      if(current && value < current.value){
        prev = current;
        current = current.left;
      }
    }
    return [prev,current];
  }
  remove(value){
    let nRoot = null;
    if(value === this.root.value){
      nRoot = this.findSuccessor();
      value = nRoot.value;
    }
    let result = this.lookupForRemove(value);
    let [prev,node] = result;
    if(!node){
      return false;
    }
    if(nRoot){
      this.root.value = nRoot.value;
    }
    if(this.isLeaf(node)){
      return this.removeLeaf(prev,node);
    }else if(prev.left === node){
      return this.removeSubTree(false,prev,node);
    }else{
      return this.removeSubTree(true,prev,node);
    }
  }
  removeLeaf(prev,node){
    prev.right === node ? prev.right = null : prev.left = null;
    return true;
  }
  removeSubTree(direction = false,prev,node){
    if(node === this.root){
      return this.removeRoot();
    }
    if(!prev || !node){
      return false;
    }
    if(this.isLeaf(node)){
      return this.removeLeaf(prev,node);
    }
    if(direction === false){ //left
      let newNode = node.right ?? null;
      if(!newNode){
        newNode = node.left;
      }
      prev.left = newNode;
      if(node.left !== newNode){
        newNode.left = node.left;
      }
      return true;
    }else{ //right
      let newNode = node.left ?? null;
      if(!newNode){
        newNode = node.right
      }
      prev.right = newNode;
      if(node.right !== newNode){
        newNode.right = node.right;
      }
      return true;
    }
  }
  findSuccessor(node = this.root.right ?? null){
    if(!node){
      this.root = this.root.left;
      return this.root;
    }
    if(!node.left){
      return node;
    }
    return this.findSuccessor(node.left);
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
let tree = new BST(5);
tree.insert(7);
tree.insert(9);
tree.insert(0);
tree.insert(4);
tree.insert(6);
tree.insert(-1);
tree.insert(-2);
tree.insert(-0.5);
tree.insert(-1.5);
tree.insert(-3);
tree.insert(8);
tree.insert(10);
tree.insert(4.5);
tree.insert(6.5);
tree.insert(11);

// console.log(tree.remove(6.5));
// console.log(tree.remove(5));
// console.log(tree.root);

// console.log(tree.findPredecessor());
// console.log(tree.lookupForRemove(4));

//+++++++++++++ end testing ground +++++++++++++\\
