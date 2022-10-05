const removeFromArray = function (array, ...values) {
   values.forEach((value) => {
      return array.filter(function (arrayElement) {
         if (arrayElement === value) {
            array.splice(array.indexOf(arrayElement), 1);
         }
      });
   });

   return array;
   // return array.filter(function (e) {
   //    return e !== num && e !== num2;
   // });
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
//
