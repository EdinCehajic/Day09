// ONLY

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
  }
  
      checkSign();

  console.log(checkSign(10));
  console.log(checkSign(-12));
  console.log(checkSign(0));
 // Only 
  module.exports = checkSign;