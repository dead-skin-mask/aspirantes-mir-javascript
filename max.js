function max(numeros) {
    numeros.sort( (a, b) => {
        if (a == b){
            return 0
        }
        if (a < b){
            return -1
        }
        return 1
    })
        return(numeros[numeros.length - 1])
}
console.log(max([1, 2, 3]))
console.log(max([10, 9, 8, 7, 6, 5, 4]))
console.log(max([]))