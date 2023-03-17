function calcularColor(num) {
    
    var color;
    
    if (num == 1) {
        color = "Negro"
        
    } else if (num == 2) {
        color = "Blanco"
        
    } else if (num == 3){
        color = "Azul"

    } else if (num != 1, 2, 3) {
       
        color = "verde"
    }

    return "EL color es " + color
}
console.log(calcularColor(1)) 
console.log(calcularColor(2))
console.log(calcularColor(3)) 
console.log(calcularColor(8)) 
