// Given array, find the first recurring element

function firstRecurring(input = [1,4,2,3,4]){
  let obj = new Map();
  for (let element of input) {
    if(!obj[element]){
      obj[element] = true;
    }else{
      return element;
    }
  }
  return undefined;
}
console.log(firstRecurring());
