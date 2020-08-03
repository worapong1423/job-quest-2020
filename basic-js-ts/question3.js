var number =  45
function fizzBuzz(number){
    return  number % 3 == 0 ? ( number % 5 == 0 ? 'FizzBuzz' : 'Fizz') : ( number % 5 === 0 ? 'Buzz' : number)
}

console.log(fizzBuzz(number))