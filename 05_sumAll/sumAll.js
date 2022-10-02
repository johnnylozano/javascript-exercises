const sumAll = function (firstNumber, secondNumber) {
   let finalSum = 0;

   if (firstNumber > secondNumber) {
      [firstNumber, secondNumber] = [secondNumber, firstNumber];
   } else if (
      firstNumber < 0 ||
      firstNumber === secondNumber ||
      (typeof firstNumber && typeof secondNumber) !== "number"
   ) {
      return `ERROR`;
   }

   for (let i = firstNumber; i <= secondNumber; i++) {
      finalSum += i;
   }

   return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
