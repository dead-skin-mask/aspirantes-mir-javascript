let persona = {
    nombre: "",
    edad: Number,
    ciudad: "",
    profesion: "",
}
console.log(persona)
function presentacion(persona) {
    for(prop in persona){
       console.log(prop + ":")
    }
    return prop
    
}
presentacion(persona)
let mensaje = presentacion(persona)
console.log(mensaje)
persona.Hobbies = ["Leer", "Cantar", "Correr", "Video juegos"]
console.log(persona.Hobbies)
for(prop in persona.Hobbies){
    let count = ""
    count += persona.Hobbies.join(" ")
    console.log(count)
}