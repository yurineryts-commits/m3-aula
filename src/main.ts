// let nome: string = "Joao";
// let preco: number = 29.90;
// // let pedido: number[]=[];
// let aberto:boolean = true;

// let precos: number[] =[20.99 , 50.99, 35.90,40.99]
// let item: string[] = [];

// let exemplo = 3;
// let exemplo2: any =0;

// import emReais from "./comanda";

// const itens: string[] = [];
// const precos: number[] =[20.99 , 50.99, 35.90,40.99]
// const quantidades: number[] = [];

// function adicionar(item: string, 
//                    precoCentavos:number,
//                      quantidade:number):void
                     
// {

//     itens.push(item);
//     precos.push(precoCentavos);
//     quantidades.push(quantidade)

// }


//  function emReais(centavos:number):string{

//     return "R$" + (centavos/100).toFixed(2);
// }

// export default emReais;


import { ItemComanda, Comanda } from "./comanda";
import { Cardapio } from "./cardapio";
const cardapio = new Cardapio("dados/cardapio.json")
console.log(cardapio.itens.length , "itens no cardapio");
console.log("Recusados: " , cardapio.itens.length , cardapio.recusados);

const mesa7= new Comanda(7)
const pedido = ["x-burguer", "refrigerante lata", "batata frita"]

for(let i=0; i< pedido.length; i++){

    const item= cardapio.buscar(pedido[i])
    if( item === undefined){

        console.log(pedido[i], " não esta no cardapio")
    }
    else{

        mesa7.adicionar(new ItemComanda(item.nome, item.preco_centavos, 1))
    }

}

// const burguer = new ItemComanda("X-Burguer",18.00,1)

// mesa7.adicionar(burguer);
// mesa7.adicionar(new ItemComanda("X-Burguer",19.00,1))
// mesa7.adicionar(new ItemComanda("X-Burguer",20.00,1))

console.log(mesa7.fechar())
// console.log(burguer.subTotal())
// // console.log(burguer)
// console.log(burguer.nome)

// const mesa3 = new Comanda(3);
try{

 mesa7.adicionar (new ItemComanda("suco de manga  " , 850,0))

} catch(erro){

    console.log("Não entrou. " + erro)

}

const suco= new ItemComanda("suco de caju", 750, 1);
console.log("chegou aqui....");