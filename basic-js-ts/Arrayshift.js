function shift(array,direction,shifted){
    var shiftedArray = null
    if (direction == 'left'){
        shiftedArray = array.splice(0,shifted)
        for(var item of shiftedArray){
            array.push(item)
        }
        return array
    }
    else if (direction == 'right'){
        shiftedArray = array.splice((shifted-1),array.length)
        for(var item of array){
            shiftedArray.push(item)
        }
        return shiftedArray
    }
    
}

console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2))
console.log(shift([1, 2, 3, 4 ,5], 'right', 3))