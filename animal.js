class Animal {
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
    }
    // Define um método "animal" para definir a propriedade "novosanimais"
    animal(novosanimais) {
        if (typeof novosanimais == "string") {
            this.animal = novosanimais
        }
    }

    // Defina um getter para a propriedade "animal".
    get animal() {
        return this._animal
    }

    // Define um setter para a propriedade "animal", configurando-o se a entrada for uma string.
    set animal(A){
        if (typeof A == "string") {
            this._animal = A
        }
    }
    // Define um método "ZOO" para mostrar um alerta com o nome e uma mensagem.
    ZOO() {
        alert(`${this.nome} ESSA E A  REDES DE ANIMALS!!`)
    }
    // Define um método "ZOO1" para mostrar um alerta com o nome e uma mensagem diferente.
    ZOO1() {
        alert(`${this.nome} BEM VINDO AO GRAU ANIMAIS!!`)
    }
}

// Define uma subclasse "espécie" que estende a classe "animal".
    // Construtor da classe "espécie", adicionando propriedades "tipo" ,"idade" e "origem".

        // Chama o construtor da primeira classe usando "super" e passando o parâmetro "nome".

class especies extends Animal {
    constructor(tipo,idade,origem) {
        super(nome);
        this.tipo = tipo;
        this.idade = idade;
        this.origem = origem

    }

}

// Bloco Try-catch para tratar e registrar um erro.

try {
    throw new Error("Isto é um erro do GRAU ANIMAIS!!")
} catch (error) {
    console.error(error.message)
}

// Cria instâncias da classe "animal".
let A1 = new Animal("PESSOAS");
let A2 = new Animal ("Neymar");
let A3 = new Animal("kiko");
let A4 = new Animal("Mia");
let A5 = new Animal("goku");
let A6 = new Animal("jiraya");
let A7 = new Animal("xuxa");


// Define propriedades para instâncias da classe "especies".
A2._animal = "Cachorro"
A2.tipo = "pinscher"
A2.idade = 2
A2.origem = "origem alemã "

A3._animal = "Papagaio"
A3.tipo = "Papagaio-de-cara-roxa"
A3.idade = 3
A3.origem = "origem latina América Central e do Sul"

A4._animal = "Gato"
A4.tipo = "Siamês"
A4.idade = 3
A4.origem = "origem thailadesa"

A5._animal = "Leopardo"
A5.tipo = "Leopardo de Java"
A5.idade = 5
A5.origem = "origem Africana"

A6._animal = "Sapo"
A6.tipo = "Phyllobates terribilis"
A6.idade = 1
A6.origem = "origem global"

A7._animal = "Gato"
A7.tipo = "gato neva masquerade"
A7.idade = 2
A7.origem = "origem russa"

// Chama métodos para mostrar alertas com mensagens.
A1.ZOO()
A1.ZOO1()

// Registra informações sobre cada classe e suas propriedades atribuídas.
console.log(`${A2.nome} e um ${A2._animal} do tipo ${A2.tipo} que tem ${A2.idade} anos de idade  que veio da ${A2.origem}`)
console.log(`${A3.nome} e um ${A3._animal} do tipo ${A3.tipo} que tem ${A3.idade} anos de idade  que veio de ${A3.origem}`)
console.log(`${A4.nome} e um ${A4._animal} do tipo ${A4.tipo}  que tem ${A4.idade} anos de idade  que veio da ${A4.origem}`)
console.log(`${A5.nome} e um ${A5._animal} do tipo ${A5.tipo}  que tem ${A5.idade} anos de idade  que veio de ${A5.origem}`)
console.log(`${A6.nome} e um ${A6._animal} do tipo ${A6.tipo}  que tem ${A6.idade} anos de idade que vem da ${A6.origem}`)
console.log(`${A7.nome} e um ${A7._animal} do tipo ${A7.tipo}  que tem ${A7.idade} anos que de idade  veio de ${A7.origem}`)

