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

// function obtenerPersonaje(id, callback){
//     const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
//     $.get(URL, OPTS, callback).fail(() => {
//         console.log(`Ocurrió un error, no se pudo obtener el personaje: ${id}`)
//     })
// }

// obtenerPersonaje(1, function ({ name}) {
//     console.log(`Hola, soy ${name}`)

//     obtenerPersonaje(2, function({ name}) {
//         console.log(`Hola, soy ${name}`)

//         obtenerPersonaje(3, function({ name}) {
//             console.log(`Hola, soy ${name}`)

//             obtenerPersonaje(4, function({ name}) {
//                 console.log(`Hola, soy ${name}`)

//                 obtenerPersonaje(5, function({ name}) {
//                     console.log(`Hola, soy ${name}`)

//                     obtenerPersonaje(6, function({ name}) {
//                         console.log(`Hola, soy ${name}`)

//                         obtenerPersonaje(7, function ({name }) {
//                             console.log(`Hola, soy ${name}`)
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// ===============
// Clase 32 - Promesas
// Valores que no conocemos

// pending, fulfilled, rejected

// new Promise (function(resolve, reject){
//     // Code...  
// }).then(valor = > {

// }).catch(err => {

// })

function obtenerPersonaje(id){

    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
        $.get(URL, OPTS, data => {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError (id) {
    console.log.length(`Sucedió un error al obtener el personaje  ${id}`)
}

// obtenerPersonaje(1). then(personaje => {
//     console.log(`Hola, soy ${personaje.name}`)
// })
// .catch(onError)


// ===============
// Clase 33 - Promesas encadenadas



// ===============
// Clase 34 - Múltiples promesas en paralelo


// ===============
// Clase 35 - Asyn Await

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()


// ===============
// Clase 36 - Diferencias var, let, const

var cristo = {
    nombre: "Cristopher",
    apellido: "D. Chavez",
    edad: 20
}

// var
function esMayorDeEdad(persona) {
    var mensaje
    if (persona.edad >= 18) {
        mensaje = "Es mayor de edad"
    } else {
        mensaje = "Es menor de edad"
    }
    console.log(mensaje)
}

// let -> reduce el alcance al bloque de código donde es utilizado
function esMayorDeEdad(persona) {
    let mensaje
    const MAYORIA_EDAD = 18
    if (persona.edad >= MAYORIA_EDAD) {
        mensaje = "Es mayor de edad"
    } else {
        mensaje = "Es menor de edad"
    }
    console.log(mensaje)
}

// esMayorDeEdad(cristo)

for (let i = 0; i < 10; i++) {
    // console.log(i)
}

// console.log(`Terminó el ciclo for, el valor de i es ${i}`)


// ===============
// Clase 36 - Fechas en Js

function diasEntreFechas(d1, d2) {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(d1 - d2)

    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(2000, 5, 25)


// ===============
// Clase 37 - Recursividad

// 13 / 4

function divisionEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)
}


// ===============
// Clase 38 - Memorización
// Guardar en memoria para acceder rápidamente a este dato posteriormente

function factorial(n) {
    if (!this.cache){
        this.cache = {}
    }

    // debugger
    if (this.cache[n]) {
        return this.cache[n]
    }

    if (n === 1) {
        return 1
    }

    this.cache[n] = n * factorial(n - 1)
    // debugger
    return this.cache[n]
}


// ===============
// Clase 39 - Closures

function crearSaludo(finalDeFrase) {
    return function(nombre) {
        // console.log(`Hola, ${nombre}, ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo("che")
const saludoMexicano = crearSaludo("we")
const saludoColombiano = crearSaludo("parce")

saludoArgentino("Cristo")
saludoMexicano("Cristo")
saludoColombiano("Cristo")


// ===============
// Clase 40 - Estructuras de datos inmutables

const marcela = {
    nombre: "Marce",
    apellido: "Jacobo",
    edad: 20
}

// const cumpleanios = persona => persona.edad++

const cumpleaniosInmutable = persona => ({
    ...marcela,
    edad: persona.edad + 1
})


// ===============
// Clase 41 - Cambiando Contexto dentro de funciones

const cristopher = {
    nombre: "cristo",
    apellido: "dca"
}
const danersck = {
    nombre: "daner",
    apellido: "sck"
}

function saludar(saludo = "Hola") {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// const saludarACristo = saludar.bind(cristopher)
// const saludarADanerSck = saludar.bind(danersck)

// setTimeout(saludar.bind(cristopher, "Hola, che"), 1000)

// saludar.call(cristopher, "Hola we")    // bind, pero se ejecuta 

// saludar.apply(cristopher, ["Hola parce"])   // Igual que call pero los parámetros se envían en Array