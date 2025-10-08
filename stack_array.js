  class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(value){
    this.content = [value];
  }
  isEmpty(){
    return this.content.length === 0;
  }
  show(){
    if(this.content.length === 0){
      return `Empty`;
    }
    let result = `Top:(${this.content[this.content.length-1]}) `
    for (let i = this.content.length -1 ; i >= 0; i--) {
      result += `${this.content[i]}`;
      if(i > 0){
        result += ` => `;
      }
    }
    return result;
  }
  peek(){
    return this.content[this.content.length-1];
  }
  push(value){
    this.content.push(value);
  }
  pop(){
    if(this.size === 0){
      return null;
    }
    this.content.pop();
  }
}

let test = new Stack(0);
test.push(1);
test.push(1.5);
test.push(2);
console.log(test.show());
test.pop();
console.log(test.show());
