
let Descontaço = function (Valor,Desconto) {
    
    let ValorFinal = ( (-1*((Desconto/100) - 1))* Valor);
    return console.log(`${ValorFinal.toFixed(2)}R$`)
    }

const ValorComDesconto= Descontaço(100,36)
console.log(ValorComDesconto);