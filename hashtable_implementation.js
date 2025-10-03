class hshtble{
  constructor(size){
    this.size = size;
    this.d = new Array(size);
  }
  _hsh(key){
    let hsh = 0;
    for (let i = 0; i < key.length; i++) {
      hsh = (hsh + key.charCodeAt(i) * i) % this.d.length;
    }
    return hsh;
  }
  set(key,v){
    let address = this._hsh(key);
    if(!this.d[address]){
      this.d[address] = [];
    }
    this.d[address].push([key,v]);
  }
  get(key){
    let targetAddress = this._hsh(key);
    let bucket = this.d[targetAddress];
    if(bucket){
      for (let i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key){
          return bucket[i][1];
        };
      }
    }
    return "none";
  }
  keys(){
    let origin = this.d;
    let keys = [];
    let j = 0;
    for (let i = 0; i < origin.length; i++) {
      j = 0;
      while (origin[i] && origin[i][j]) {//d => [address => [bucket => [keyValue => []], bucket => [keyValue => []]], address => [bucket => [keyValue => []], bucket => [keyValue => []]]]
        keys.push(origin[i][j][0]);
        j++;
      }
    }
    for (const key of keys) {
      console.log(key);
    }
  }
  view(){
    for (const element of this.d) {
      console.log(element);
    }
  }
}

let test = new hshtble(2);
test.set('kiki',500);
test.set('momo',50);
test.set('llll',5);
test.set('testy',9);
test.set('zefron',1);
test.set('hornet',89);
test.set('zote',9000);
test.keys();
test.view();
console.log(test.get('zefron'));
console.log(test.get('hornet'));
console.log(test.get('zote'));
console.log(test.get('sos'));