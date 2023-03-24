let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["Programar", "Squash", "piano"],
    saludo: function() {
        console.log("Hola me llamo " + this.nombre)
    }
}

for(prop in pedro){
    console.log(prop + ":" + pedro[prop]);
}

console.log(pedro.edad)
pedro.Estatura = 1.8
delete pedro.activo
console.log(pedro)
pedro.saludo()
