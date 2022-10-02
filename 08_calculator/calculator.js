const add = function (numberOne, numberTwo) {
   return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
   return numberOne - numberTwo;
};

const sum = function (array) {
   let sum = 0;

   if (array.length === 0) {
      return 0;
   }

   array.forEach((number) => {
      if (number !== 0 && typeof number === "number") {
         sum += number;
      } else {
         sum += 0;
      }
   });
   return sum;
};

const multiply = function (array) {
   if (array.length === 0) {
      return 0;
   }

   let product = 1;

   array.forEach((number) => {
      product *= number;
   });

   return product;
};

const power = function (number, exponent) {
   return number ** exponent;
};

const factorial = function (number) {
   if (Number.isInteger(number) !== true || number < 0) {
      return "ERROR";
   } else if (number === 0) {
      return 1;
   } else {
      return number * factorial(number - 1);
   }
};

// Do not edit below this line
module.exports = {
   add,
   subtract,
   sum,
   multiply,
   power,
   factorial,
};
