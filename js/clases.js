// CLASES 1 - 2

// Clase 1 - Variables

// console.log("Hello world!")

var myName = "Cristopher", myLastName = "D. Chavez"
var myAge = 20, myWeight = 60

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

