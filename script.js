function calculadora(numero1,numero2,operacao) {
    let resultado;

    if(operacao === "+"){
        resultado = numero1 + numero2;
    }else if (operacao === "-"){
        resultado = numero1 - numero2;
    }else if (operacao === "*"){
        resultado = numero1 * numero2;
    }else if (operacao === "/"){
        if (numero2 == 0){
            return "Não é possével dividir por zero!"; 
        }
        resultado = numero1 / numero2;
    }
}

console.log(helloworld("Dione"))
console.log(helloworld("Geovana"))
console.log(helloworld("Sarah"))
console.log(helloworld())