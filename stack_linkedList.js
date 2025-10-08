  class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(value){
    this.top = new Node(value);
    this.length = 1;
  }
  isEmpty(){
    return this.length === 0;
  }
  show(){
    if(this.length === 0){
      return `Empty`;
    }
    let current = this.top;
    let result = `Top: `
    while(current){
      result += `${current.value}`
      current = current.next;
      if(current !== null){
        result += ` => `;
      }
    }
    return result;
  }
  peek(){
    return this.top;
  }
  push(value){
    let node = new Node(value);
    if(this.isEmpty()){
      this.top = node;
    }else{
      node.next = this.top;
      this.top = node;
      
      // const old_top = this.top;
      // this.top = node;
      // this.top.next = old_top;
    }
    this.length++;
  }
  pop(){
    if(this.length === 1){
      this.top = null;
      return 1;
    }
    this.top = this.top.next;
    this.length--;
  }
}

let test = new Stack(0);
test.push(1);
test.push(1.5);
test.push(2);
console.log(test.show());
test.pop();
console.log(test.show());
