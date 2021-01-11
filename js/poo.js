// CLASES 21 - 24

// Clase 21 - Clases en JS o Prototipos

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    return this
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var cristo = new Persona("Cristopher", "D. Chavez", 1.75)
var marce = new Persona("Marcela", "Jacobo", 1.6)
var jordan = new Persona("Michael", "Jordan", 2.1)

cristo.saludar()

// ===============
// Clase 22 - Prototipo como Arrow Function

Persona.prototype.soyAlto = () => this.altura > 1.8


// ===============
// Clase 23 - Contexto de las funciones, quien es this

Persona.prototype.soyAlto = () => {
    // debugger
    return this.altura > 1.8
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}


