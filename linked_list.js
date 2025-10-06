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
    if(index >= this.length){
      this.append(value);
      return 1;
    }
    let node = new Node(value);
    let prev = this._toIndex(index-1);
    let nxt = prev.next;
    node.next = nxt;
    prev.next = node;
    this.length++;
  }
  _toIndex(index){
    let i = 0;
    let current = this.head;
    while(i !== index){
      current = current.next;
      i++;
    }
    return current;
  }
  _detect(value){
    let index = 0;
    let current = this.head;
    while(current.value !== value){
      current = current.next;
      index++;
    }
    return index;
  }
  delete(value){
    
    let index = this._detect(value);
    let prev = this._toIndex(index-1);
    let node = prev.next;
    prev.next = node.next
    node.next = null;
    this.length--;
  }
}

let list = new linkedList(50);
list.append(60);
list.append(70);
list.append(80);
list.insert(45,3);
list.insert(44,5);
list.show();
// list.delete(45);
// list.show();