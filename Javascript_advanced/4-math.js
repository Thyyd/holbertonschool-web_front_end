function divideBy(firstNumber)
{
    if (typeof firstNumber != "number")
        throw new TypeError("firstNumber doit être un number");
    return function(secondNumber) {
        if (typeof secondNumber != "number")
            throw new TypeError("secondNumber doit être un number");
        return secondNumber / firstNumber;
    };
}


function addBy(firstNumber)
{
    if (typeof firstNumber != "number")
        throw new TypeError("firstNumber doit être un number");
    return function(secondNumber) {
        if (typeof secondNumber != "number")
            throw new TypeError("secondNumber doit être un number");
        return secondNumber + firstNumber;
    };
}

addBy100 = addBy(100);
addBy1000 = addBy(1000);
divideBy10 = divideBy(10);
divideBy100 = divideBy(100);


console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
