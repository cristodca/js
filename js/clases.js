// CLASES 1 - 5

// Clase 1 - Variables

// console.log("Hello world!")

var myName = "Cristopher", myLastName = "D. Chavez"

// console.log(`Hi, ${myName} ${myLastName}`)
// console.log(`I'm ${myAge} years old`)


// ===============
// Clase 2 - Operaciones variables String

// Convierte cadenas de texto a Mayus o Minus
var myMayusName = myName.toUpperCase(), myMinusLastName = myLastName.toLowerCase()

// Toma el primer caracter de la cadena de texto
var firstLetterName = myName.charAt(0)

// Cantidad de letras del string
var letterQuantityName = myName.length

// var myCompleteName = myName + " " + myLastName
var myCompleteName = `${myName} ${myLastName}`

// Toma una cantidad de caracteres (3), desde una posición determinada (1)
var str = myName.substr(1, 3)


// ===============
// Clase 3 - Variables number

var myAge = 20, myWeight = 60
var food = 1, sport = 3

myAge++ // 21
myWeight -= 2   // 58

myWeight += food    // 59
myWeight -= sport   // 56

var winePrice = 200.3
var totalPrice = Math.round(winePrice * 100 * 3) / 100

// Convierte a String con dos Decimales
var totalPriceStr = totalPrice.toFixed(2)

// Convierte a Float desde String
var totalPrice2 = parseFloat(totalPriceStr)

var pizza = 8, persons = 2
var pizzaSlicesPerPerson = pizza / persons


// ===============
// Clase 4 - Funciones
 
function printAge(userName, userAge) {
    console.log(`${userName} is ${userAge} years old`)
}


// ===============
// Clase 5 - Scope

myName = "Cristopher"

function printMayusName(n) {
    n = n.toUpperCase()
    console.log(n)
}


// ===============
// Clase 6 - Objetos

var cristo = {
    nombre: "Cristopher",
    apellido: "D. Chavez",
    edad: 20
}

var marce = {
    nombre: "Marcela",
    apellido: "Jacobo",
    edad: 20
}

function printMayusName2({ nombre }) {
    console.log(nombre.toUpperCase())
}


// ===============
// Clase 7 - Desestructuración de Objetos

// function printMayusName2(person) {
//     var { nombre } = person
//     console.log(nombre.toUpperCase())
// }


// ===============
// Clase 8 - Parámetros como referencia o como valor

// No modifica el valor del objeto global
function birthday(edad) {
    edad += 1
}

// Modifica el valor del objeto global
function birthdayObj(persona) {
    return {
        ...persona,     // Copia el objeto que entra
        edad: persona.edad + 1  // Aumenta la edad en 1
        // Se podrían agregar nuevos campos
    }
    persona.edad += 1
}


// ===============
// Clase 9 - Comparaciones en Javascript

var x = 4, y = "4"
// x == y       -> true (mismo valor)
// x === y     -> false (mismo valor, distinto tipo)

// Estas características sólo aplican a objetos primitivos, no objetos ni otros complejos.
var daniel = {
    nombre: "Daniel"
}

var otroDaniel = {
    nombre: "Daniel"
}

// Estos siguen siendo dos objetos distintos
otroDaniel = {
    ...daniel
}

// Aunque se pueden generar excepciones
otroDaniel = daniel


// ===============
// Clase 10 - Condicionales

var cristo = {
    nombre: "Cristopher",
    apellido: "D. Chavez",
    edad: 20,
    ingeniero: true,
    rapero: false,
    dj: false,
    filmmaker: true
}

function printProfessions(person) {
    console.log(`${person.nombre} es:`)
    if (person.ingeniero) {
        console.log("Ingeniero")
    } else {
        console.log("No es ingeniero")
    }
    if (person.rapero) {
        console.log("Rapero")
    } else {
        console.log("No es rapero")
    }
    if (person.dj) {
        console.log("DJ")
    } else {
        console.log("No es DJ")
    }
    if (person.filmmaker) {
        console.log("Filmmaker")
    } else {
        console.log("No es filmmaker")
    }
}

function ifLegalAge(p) {
    if(compareLegalAge(p)) {
        console.log(`${p.nombre} es mayor de edad`)
    } else {
        console.log(`${p.nombre} es menor de edad`)
    }
}

// ===============
// Clase 11 - Funciones que retornan valores

const LEGAL_AGE = 18

function compareLegalAge(p) {
    return p.edad >= LEGAL_AGE
}


// ===============
// Clase 12 - Arrow Functions

// Función anónima
const compareLegalAge2 = function (p) {
    return p.edad >= LEGAL_AGE
}

// Arrow function
const compareLegalAge3 = p => p.edad >= LEGAL_AGE
// const compareLegalAge2 = ({ edad }) => edad >= LEGAL_AGE    // válido
// Se puede prescindir de los () si solo es un parámetro
// Pasa lo mismo con el return y las llaves {}

function permitirAcceso(p) {
    if (compareLegalAge3(p)) {
        console.log("ACESSO PERMITIDO")
    } else {
        console.log("ACCESO DENEGADO")
    }
}


// ===============
// Clase 13 - Estructura repetitiva For

var cristo = {
    nombre: "Cristopher",
    apellido: "D. Chavez",
    edad: 20,
    peso: 62
}

// console.log(`Al inicio del año ${cristo.nombre} pesa ${cristo.peso} kg.`)

const VARIACION_PESO = .3
const DIAS_ANNIO = 365

const aumetaPeso = p => p.peso += VARIACION_PESO
const pierdePeso = p => p.peso -= VARIACION_PESO

for (var i = 0; i < DIAS_ANNIO ; i++) {
    var r = Math.random()

    if (r < 0.25) {
        // aumetaPeso(cristo)
    } else if (r < 0.5){
        // pierdePeso(cristo)
    } else {

    }
}

// console.log(`Al final del año ${cristo.nombre} pesa ${cristo.peso.toFixed(2)} kg.`)


// ===============
// Clase 14 - Estructura repetitiva While

const META = cristo.peso - 3
const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

var dias = 0;

// while (cristo.peso > META) {
//     // debugger
//     if (comeMucho()) {
//         aumetaPeso(cristo)
//     }
//     if (haceDeporte()) {
//         pierdePeso(cristo)
//     }
//     dias++
// }

// console.log(`Pasaron ${dias} días hasta que ${cristo.nombre} adelgazó lo suficiente`)


// ===============
// Clase 15 - Ciclo Do While

var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve());

contador > 1 ? console.log(`Fui a ver si llovía ${contador} veces`) : console.log(`Fui a ver si llovía ${contador} vez`)