// Given two sorted arrays, merge them

function mergeSorted(input1, input2){
  // Input error handling
  if(!input1 && !input2){
    return [];
  }
  if(!input1){
    return input2;
  }
  if(!input2){
    return input1;
  }
  // End Input error handling
  let i = 0;
  let j = 0;
  let merged = [];
  while (input1[i] || input2[j]) {
    if(!input2[j] || (input1[i] < input2[j])){
      merged.push(input1[i]);
      i++;
    }else{
      merged.push(input2[j]);
      j++;
    }
  }
  return merged;
}

console.log(mergeSorted([],[]));