
// Only 
function myFunction(myParameter) {
    if (myParameter) {
      return "The parameter is true!";
    }
    return "The parameter is false!";
  }
  myFunction();
  console.log(myFunction(true));
  console.log(myFunction(false));
  
  // Only 
  module.exports = myFunction;