const palindromes = function (string) {
   if (string === "" || string === null) {
      return "ERROR";
   }
   string = string
      .replace(/[^\w\s\']|_/g, "")
      .replace(/\s+/g, "")
      .toLowerCase();

   if (string.length % 2 !== 0) {
      return (
         string.substring(0, string.length / 2) ===
         string
            .substring(string.length, string.length / 2 + 1)
            .split("")
            .reverse()
            .join("")
      );
   } else {
      return (
         string.substring(0, string.length / 2) ===
         string
            .substring(string.length, string.length / 2)
            .split("")
            .reverse()
            .join("")
      );
   }
};

console.log(palindromes(""));

// Do not edit below this line
module.exports = palindromes;
