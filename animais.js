class Animal {
    constructor(nome) {
        this.nome = nome
        
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

// Define uma subclasse "espécie" que estende a classe "pessoa".
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

// Cria instâncias da classe "pessoa".
let A1 = new Animal("PESSOAS");
let A2 = new Animal ("Neymar");
let A3 = new Animal("kiko");
let A4 = new Animal("Mia");
let A5 = new Animal("goku");
let A6 = new Animal("jiraya");
let A7 = new Animal("xuxa");


// Define propriedades para instâncias da classe "person" e "especies".
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





class Alimentacao {
    constructor(tipoAlimento, frequencia) {
        this.tipoAlimento = tipoAlimento;
        this.frequencia = frequencia;
    }

    
}
// o método para mostrar a informação sobre a alimentação.
A2.tipoAlimento = "ração"
A2.frequencia = "3"

A3.tipoAlimento = "frutas,legumes,verduras"
A3.frequencia = "4"

A4.tipoAlimento = "ração"
A4.frequencia = "3"

A5.tipoAlimento = "outros animais"
A5.frequencia = "depente da situaçao mas e entre 2 a 3"

A6.tipoAlimento = "insetos,caracois,camundongos,mosca etc"
A6.frequencia = "incontavel"

A7.tipoAlimento = "ração"
A7.frequencia = "3"

console.log(`${A2.nome} e um tipo de animal se alimenta de ${A2.tipoAlimento} com uma frequência de ${A2.frequencia} vezes por dia.`);
console.log(`${A3.nome} e um tipo de animal se alimenta de ${A3.tipoAlimento} com uma frequência de ${A3.frequencia} vezes por dia.`);
console.log(`${A4.nome} e um tipo de animal se alimenta de ${A4.tipoAlimento} com uma frequência de ${A4.frequencia} vezes por dia.`);
console.log(`${A5.nome} e um tipo de animal se alimenta de ${A5.tipoAlimento} com uma frequência de ${A5.frequencia} vezes por dia.`);
console.log(`${A6.nome} e um tipo de animal se alimenta de ${A6.tipoAlimento} com uma frequência  ${A6.frequencia}  por dia.`);
console.log(`${A7.nome} e um tipo de animal se alimenta de ${A7.tipoAlimento} com uma frequência de ${A7.frequencia} vezes por dia.`);

// Define uma classe "Habitat" com a propriedade "local" representando o habitat do animal.
class Habitat {
    constructor(local) {
        this.local = local;
    }
    
}
// Define um método para exibir informações sobre o habitat.
A2.local = "casas , apartamentos , ruas"
A3.local = "florestas"
A4.local = "casas , apartamentos , ruas"
A5.local = "florestas"
A6.local = "riachos,brejos,lagoas"
A7.local = "casas , apartamentos , ruas"

 console.log(` ${A2._animal} O habitat deste animal é ${A2.local}.`);
 console.log(` ${A3._animal} O habitat deste animal é ${A3.local}.`);
 console.log(` ${A4._animal} O habitat deste animal é ${A4.local}.`);
 console.log(`${A5._animal} O habitat deste animal é ${A5.local}.`);
 console.log(` ${A6._animal} O habitat deste animal é ${A6.local}.`);
 console.log(` ${A7._animal} O habitat deste animal é ${A7.local}.`);

