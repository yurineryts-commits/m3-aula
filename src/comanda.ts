function emReais(centavos:number):string{

    return "R$" + (centavos/100).toFixed(2);
}