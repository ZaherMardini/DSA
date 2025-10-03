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
}

let test = new hshtble(5);
test.set('kiki',500);
test.set('momo',50);
test.set('llll',5);
console.log(test.get('llll'));
console.log(test.get('sos'));