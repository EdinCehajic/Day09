function switchCaseSequential(num){

    // Only
    var answer = "";
    switch(num) {
        case 1:
        case 2:
        case 3: 
        answer = "Low";
        break;
    
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
    
        case 7:
        case 8:
        case 9: 
        answer = "high";
        break;
    // Only
    
}
return answer;
}


console.log(switchCaseSequential(1)); // This
console.log(switchCaseSequential(2)); // This
console.log(switchCaseSequential(3)); // This
console.log(switchCaseSequential(4)); // This
console.log(switchCaseSequential(5)); // This
console.log(switchCaseSequential(6)); // This
console.log(switchCaseSequential(7)); // This
console.log(switchCaseSequential(8)); // This
console.log(switchCaseSequential(9)); // This

module.exports = switchCaseSequential;