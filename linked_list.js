class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.next = null;
    this.size = 0;
  }
  isEmpty(){
    return this.size === 0;
  }
  append(value){
    let n = new Node(value);
    if(this.isEmpty()){
      this.head = n;
    }else{
      n.next = this.head;
      this.head = n;
    }
    this.size++;
  }
  print(node = this.head){
    if(this.isEmpty()){
      return false;
    }
    let result = '';
    let current = node;
    while(current){
      result+=current.value;
      current = current.next;
    }
    return result;
  }
}