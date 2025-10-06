class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class linkedList{
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  isEmpty(){
    return this.head === null;
  }
  show(){
    let element = this.head;
    let result = `head: `;
    while (element !== null) {
      result += `${element.value} => `;
      element = element.next;
    }
    console.log(`${result}tail: ${this.tail.value}`);
    console.log(`Length: ${this.length}`);
  }
  prepend(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  append(value){
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  insert(value,index){
    if(this.isEmpty() || index <= 0){
      this.prepend(value);
      return 1;
    }
    if(index > this.length){
      this.append(value);
      return 1;
    }
    let node = new Node(value);
    let prev = this.head;
    let nxt = this.head.next;
    let i = 0;
    while(i !== index-1){
      prev = prev.next;
      nxt = nxt.next;
      i++;
    }
    node.next = nxt;
    prev.next = node;
    this.length++;
  }
}

let list = new linkedList(50);
list.append(60);
list.append(70);
list.append(80);
list.prepend(40);
list.insert(45,3);
list.show();
