class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  isEmpty(){
    return this.length === 0;
  }
  show(){
    if(this.length === 0){
      return `Empty`;
    }
    let current = this.first;
    let result = `First: `
    while(current){
      result += `${current.value}`
      current = current.next;
      if(current !== null){
        result += ` => `;
      }
    }
    result += ` :Last`
    return result;
  }
  enqueue(value){
    if(this.isEmpty()){
      this.first = this.last = new Node(value);
    }else{
      let node = new Node(value);
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }
  dequeue(){
    if(this.length === 1){
      this.first = null;
      this.last = null;
      this.length = 0;
      return null;
    }
    this.first = this.first.next;// Very important to imagin that the (first,last) pointers are pointing to the same node, meaning that any one of the pointers can control the pointers of the node thats why you didn't notice how the first.next was created
    this.length--;
  }
}

let queue = new Queue();
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.show());
queue.dequeue();
console.log(queue.show());
