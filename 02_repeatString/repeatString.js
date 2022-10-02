const repeatString = function (string, num) {
   if (num < 0) return "ERROR";

   let repeats = "";

   for (let i = 0; i < num; i++) {
      repeats += string;
   }

   return repeats;
};

// Do not edit below this line
module.exports = repeatString;
