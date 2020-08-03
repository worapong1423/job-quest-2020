
function fizzBuzz(number){
    return  number % 3 == 0 ? ( number % 5 == 0 ? 'FizzBuzz' : 'Fizz') : ( number % 5 === 0 ? 'Buzz' : number)
}

console.log(fizzBuzz(21))
console.log(fizzBuzz(18))
console.log(fizzBuzz(25))
console.log(fizzBuzz(45))
