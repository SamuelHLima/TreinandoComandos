
function ValorComDesconto(Valor,Desconto) {
    
    let ValorFinal = ( (-1*((Desconto/100) - 1))* Valor);
    return console.log(`${ValorFinal.toFixed(2)}R$`)
        }

    ValorComDesconto (300,44);