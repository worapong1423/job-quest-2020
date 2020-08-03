function secondMax(array) {
    var maxNumber = 0
    var resultnumber = 0
    if (array.length <= 0) {
        throw new Error("Error!")
    }
    for (let item of array){
        if(maxNumber < item){
            maxNumber = item
        }
    }
    for (let item of array){
        if(item < maxNumber && resultnumber < item){
            resultnumber = item
        }
    }
    if(resultnumber == 0 ){
        return maxNumber
    }
    return resultnumber
    
}

console.log(secondMax([2, 3, 4, 5]))
console.log(secondMax([9, 2, 21, 21]))
console.log(secondMax([4, 4, 4, 4]))
console.log(secondMax([4123]))  
console.log(secondMax([]))