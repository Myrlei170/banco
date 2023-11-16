class person {
    constructor(nome){
        this.nome = nome
    }
    agencia(newagencia){
        if (typeof newagencia == "string") {
            this.agencia = newagencia
        }
    }

    get agencia(){
        return this._agencia
    }

    set agencia(A){
        if(typeof x == "string"){
            this._agencia = A
        }
    }
    FK(){
        alert(`${this.nome} que dizer NADA!!`)
 }
    FK1(){
       alert(`${this.nome} que dizer TUDO!!`)
}   
}





class tipodebanco extends person{
    constructor(tipo){
        super(nome);
        this.tipo = tipo;
  
    }

}

try {
    throw new Error ("Isto é um erro")
} catch (error) {
    console.error (error.message)
}

let p1 = new person ("lua");

p1._agencia = "nubank"
p1.tipo = "corrente"
p1.FK()
p1.FK1()
console.log(`${p1.nome} tem a conta na agencia ${p1._agencia} do tipo ${p1.tipo}`)