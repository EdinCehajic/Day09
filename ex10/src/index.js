function logicalOrder(num) {


if (num < 50) { 
    return "Less than 50";
} else if (num < 100) { 
    return "Less than 100";
} else {
    return "Greater than or equal to 100";
}

}

console.log(logicalOrder(28));
console.log(logicalOrder(60));
console.log(logicalOrder(110));

module.exports = logicalOrder;