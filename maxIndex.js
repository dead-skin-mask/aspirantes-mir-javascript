
function maxIndex(numeros) {
    
    return numeros.indexOf(Math.max(...numeros))

}

console.log(maxIndex([1, 3, 2]))
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) 
console.log(maxIndex([])) 