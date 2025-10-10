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
  lookup(value, current = this.root, before = null){
    if(current && value === current.value){
      return current;
    }
    if(!current){
      return null;
    }
    if(current && value > current.value){
      current = current.right;
    }
    if(current && value < current.value){
      current = current.left;
    }
    return this.lookup(value,current);
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
  //   lookupForRemove(value, prev = null, current = this.root){
  //   if(current && value === current.value){
  //     return [prev,current];
  //   }
  //   if(!current){
  //     return [null,null];
  //   }
  //   if(current && value > current.value){
  //     prev = current;
  //     current = current.right;
  //   }
  //   if(current && value < current.value){
  //     prev = current;
  //     current = current.left;
  //   }
  //   return this.lookupForRemove(value,prev,current);
  // }
    lookupForRemove(value, prev = null, current = this.root){
    if(current && value === current.value){
      return [prev,current];
    }
    if(!current){
      return [null,null];
    }
    if(current && value > current.value){
      prev = current;
      current = current.right;
    }
    if(current && value < current.value){
      prev = current;
      current = current.left;
    }
    return this.lookupForRemove(value,prev,current);
  }
  remove(value){
    let result = this.lookupForRemove(value); //return [prev,current]
    let [prev,node] = result;
    if(!prev){
      return this.removeRoot();
    }
    if(!node){
      return false;
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
  removeSubTree(direction = false,prev,node){ // left = 0, right = 1
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
  removeRoot(){
    let nRoot = this.findPredecessor();
    if(nRoot === this.root){
      this.root = null;
    }
    this.remove(nRoot);
    this.root.value = nRoot;
    return true;
  }
  findPredecessor(node = this.root.right ?? null){
    if(!node){
      this.root = this.root.left;
      return this.root;
    }
    if(!node.left){
      return node;
    }
    return this.findPredecessor(node.left);
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
// In JS There is no method overloading
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

console.log(tree.remove(5));
// console.log(tree.findPredecessor());
// console.log(tree.lookup(7));
console.log(tree.root);

//+++++++++++++ end testing ground +++++++++++++\\
