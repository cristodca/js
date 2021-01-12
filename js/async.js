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


// ===============
// Clase 28 - Callbacks

const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`
const OPTS = { crossDomain: true }
// const ON_RESPONSE = function (character) {
//     console.log(`Hola, soy ${character.name}`)
// }

// $.get(LUKE_URL, OPTS, ON_RESPONSE)


// ===============
// Clase 29 - Múltiples Request

// function obtenerPersonaje(id){
//     const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
//     $.get(URL, OPTS, ON_RESPONSE)
// }

// obtenerPersonaje(4)
// obtenerPersonaje(1)
// obtenerPersonaje(2)
// obtenerPersonaje(3)


// ===============
// Clase 30 - Manejando orden y asincronismo en Js

// function obtenerPersonaje(id, callback){
//     const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
//     $.get(URL, OPTS, function (character) {
//         console.log(`Hola, soy ${character.name}`)
        
//         if (callback) {
//             callback()
//         }
//     })
// }

// obtenerPersonaje(1, function () {
//     obtenerPersonaje(2, function() {
//         obtenerPersonaje(3, function() {
//             obtenerPersonaje(4, function() {
//                 obtenerPersonaje(5, function() {
//                     obtenerPersonaje(6, function() {
//                         obtenerPersonaje(7)
//                     })
//                 })
//             })
//         })
//     })
// })


// ===============
// Clase 31 - Manejo de errores con Callbacks

function obtenerPersonaje(id, callback){
    const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
    $.get(URL, OPTS, callback).fail(() => {
        console.log(`Ocurrió un error, no se pudo obtener el personaje: ${id}`)
    })
}

obtenerPersonaje(1, function ({ name}) {
    console.log(`Hola, soy ${name}`)

    obtenerPersonaje(2, function({ name}) {
        console.log(`Hola, soy ${name}`)

        obtenerPersonaje(3, function({ name}) {
            console.log(`Hola, soy ${name}`)

            obtenerPersonaje(4, function({ name}) {
                console.log(`Hola, soy ${name}`)

                obtenerPersonaje(5, function({ name}) {
                    console.log(`Hola, soy ${name}`)

                    obtenerPersonaje(6, function({ name}) {
                        console.log(`Hola, soy ${name}`)

                        obtenerPersonaje(7, function ({name }) {
                            console.log(`Hola, soy ${name}`)
                        })
                    })
                })
            })
        })
    })
})