class graph{
  constructor(){
    this.list = {};
    this.count = 0;
  }
  newVertix(value){
    this.list[value] = [];
    this.count++;
  }
  newConnection(v1,v2){
    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }
}

let g = new graph();
g.newVertix(0);
g.newVertix(1);
g.newVertix(2);
g.newVertix(3);
g.newVertix(4);
g.newVertix(5);
g.newVertix(6);
g.newConnection(5,6);
g.newConnection(0,1);
g.newConnection(0,2);
g.newConnection(3,4);
g.newConnection(1,2);
g.newConnection(2,4);
g.newConnection(4,5);
g.newConnection(3,1);

console.log(g.list);


