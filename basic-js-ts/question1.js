var number = 12
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

console.log(fib(number))