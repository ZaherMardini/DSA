function fib(index){
  if(index < 0){
    return 0;
  }
  if(index === 1 || index === 0){
    return index;
  }
  return fib(index -1) + fib(index-2);
} 

function fibLoop(index){
  let result = [];
  if(index < 0){
    result.push(0);
    return result;
  }
  for (let i = 0; i <= index; i++) {
    if(i <= 1){
      result.push(i);
    }
    if(i > 1){
      result.push(result[i-1] + result[i-2]);
    }
  }
  return result;
}
console.log(fibLoop(6));
console.log(fib(3));