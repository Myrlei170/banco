class pessoa{

     constructor (nome,conta){

        this.nome = nome;
        this.conta = conta;

      }

        banco(tipobanco){
         if (typeof tipobanco == "string") {
            this.conta = tipobanco 
         }

        }
       
}

let p1 = new pessoa("mateus");
let p2 = new pessoa("maria");
let p3 = new pessoa("klaus");
let p4 = new pessoa("adressa");

p1.banco ("itau") 
p2.banco ("nubank") 
p3.banco ("paypal") 
p4.banco ("inter") 

console.log(`${p1.nome} tem conta no banco ${p1.conta}`);
console.log(`${p2.nome} tem conta no banco ${p2.conta}`);
console.log(`${p3.nome} tem conta no banco ${p3.conta}`);
console.log(`${p4.nome} tem conta no banco ${p4.conta}`);

