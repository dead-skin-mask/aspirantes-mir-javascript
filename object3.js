let receta = {
    
}
receta.Nombre = "Sandiwch"
receta.Ingredientes = [
]
receta.Ingredientes = [
    let = {
        Nombre: "Pan",
        Cantidad: 2
    }
]
receta.Ingredientes = [
    let = {
        Nombre: "Pan",
        Cantidad: 2
    },
    {
    Nombre: "Queso",
    Cantidad:1
    }
]
console.log(receta.Ingredientes[0].Nombre)
console.log(receta.Ingredientes[0].Cantidad + receta.Ingredientes[1].Cantidad)