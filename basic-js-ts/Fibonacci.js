function fib(number) {
    var nextnumber = 1
    var resultNumber = 0
    var currentNumber
    if(number < 2){
        return number
    }
    while (number > 0){
        currentNumber = nextnumber
        nextnumber = nextnumber + resultNumber
        resultNumber = currentNumber
        number--  
      }
    return resultNumber
}

console.log(fib(1))
console.log(fib(3))
console.log(fib(12))