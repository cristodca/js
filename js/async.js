// CLASES 26 - 35

// Clase 26 - Funciones como parámetros

class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        return this
    }

    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre)
        }
    }

    soyAlto() {
            return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn){
        var { nombre, apellido } = this

        console.log(`Hola, soy ${nombre} y soy desarrollador`)
        if (fn) {
            fn(nombre, true)
        }
    }
}

var cristo = new Desarrollador("Cristopher", "D. Chavez")
var marce = new Persona("Marcela", "Jacobo", 1.6)
var daner = new Persona("Daner", "SCK", 1.7)

// marce.saludar(responderSaludo)
// cristo.saludar(responderSaludo)
// daner.saludar()

function responderSaludo(nombre, dev) {
    console.log(`Buenas, ${nombre}. `)
    if(dev) {
        console.log(`Ah mira, no sabía que eras programador`)
    }
}


// ===============
// Clase 27 - Cómo funciona el tiempo en Js
// console.log("a")
// setTimeout(() => console.log("b"), 0)
// console.log("c")

// setTimeout(() => console.log("d"), 2000)

// for (var i = 0; i < 1000000000; i++)  { 

// }


