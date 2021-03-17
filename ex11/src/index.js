function swithCase(letter) {

    // Only
var animals;
switch(letter) {
    case "a": 
    return "antelope";
    break;

    case "b":
        return "bird";
        break;

    case "c": 
    return "cat";
    break;

    default: return "stuff";
}



    // Only
    return animals;
}
console.log(swithCase("a"));
console.log(swithCase("b"));
console.log(swithCase("c"));
console.log(swithCase("d"));
console.log(swithCase("4")); // Change
module.exports = swithCase;