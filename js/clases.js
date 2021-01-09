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