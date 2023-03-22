function join(array) {
    
    let contador = " "     

    for (let i = 0; i < array.length; i++) {
     
    contador += array[i] + " "
    
    
    
    }
    return (contador)
}

console.log(join(["Hola", "como", "estas?"]))