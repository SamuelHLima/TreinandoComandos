let ValorComDesconto = (Valor,Desconto) => {
    
    return ( (-1*((Desconto/100) - 1))* Valor);
     
        }
console.log(ValorComDesconto(100,10));