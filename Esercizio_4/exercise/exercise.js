function sumUntil(maxValue) {
  let total = 0;
  let saveValue = 0;
  for (let i = 1; i <= maxValue; i++){

   
   total = maxValue+i
   saveValue = total +saveValue -maxValue
   
  }
  return saveValue
}

console.log(sumUntil(5));