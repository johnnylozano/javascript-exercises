const fibonacci = function (num) {
   let addOne = 1;
   let addTwo = 0;
   let result = 1;

   if (typeof num === "string") {
      num = parseInt(num);
   } else if (num === 0) {
      return 0;
   } else if (num < 0) {
      return "OOPS";
   }

   for (let i = 1; i < num; i++) {
      result = addOne + addTwo;
      addTwo = addOne;
      addOne = result;
   }

   return result;
};

/* 
const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};
*/

// Do not edit below this line
module.exports = fibonacci;
