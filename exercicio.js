class Pokemon {
    constructor(nome, tipo){
        this.especie = "Pokémon"
        this.nome = nome
        this.tipo = tipo
    }

    apresentacao(){
        console.log(`${this.nome}, o ${this.especie}! Do tipo: ${this.tipo}, da espécie ${this.especie}.`)
    }
}

class PokemonAgua extends Pokemon {
    constructor(nome) {
        super(nome, "Água")
    }
}

class PokemonEletrico extends Pokemon {
    constructor(nome) {
        super(nome, "Elétrico")
    }
}

class Totodile extends PokemonAgua {}
class Piplup extends PokemonAgua {}
class Pikachu extends PokemonEletrico {}
class Zapdos extends PokemonEletrico {}

const pokemon1 = new Totodile("Totodile")
const pokemon2 = new Piplup("Piplup")
const pokemon3 = new Pikachu("Pikachu")
const pokemon4 = new Zapdos("Zapdos")

pokemon1.apresentacao()
pokemon2.apresentacao()
pokemon3.apresentacao()
pokemon4.apresentacao()