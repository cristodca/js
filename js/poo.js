// CLASES 21 - 24

// Clase 21 - Clases en JS o Prototipos

function Persona(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
    return this
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var cristo = new Persona("Cristopher", "D. Chavez")
var marce = new Persona("Marcela", "Jacobo")

cristo.saludar()