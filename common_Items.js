//Question: Given two arrays, check common items [60,80,90,0],[1,2,3,4,5,6,7,8,9,0]
function checkCommonItems(set1,set2){
  if(!set1 || !set2){
    return false;
  }
  if(set1.length > set2.length){
    let set0 = set1;
    set1 = set2;
    set2 = set0;
  }
  let map = {};
  set1.forEach(element => {
    if(!map[element]){
      map[element] = true;
    }
  });
  for (const element of set2) {
    if(map[element]){
      return true;
    }
  }
  return false;
}

console.log(checkCommonItems([60,80,90,0],[1,2,3,4,5,6,7,8,9,0]));