// var array = ['john', 'jane', 'sarah', 'alex']
var array = [1, 2, 3, 4 ,5] 
// var direction = 'left'
var direction = 'right'
// var shifted = 2
var shifted = 3

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
        for(var i of array){
            shiftedArray.push(item)
        }
        return shiftedArray
    }
    
}

console.log(shift(array,direction,shifted))