const helloworld = (nome="Visitante") => {
    let frase = `Olá,${nome}!`;
    return frase;
}

console.log(helloworld("Dione"))
console.log(helloworld("Geovana"))
console.log(helloworld("Sarah"))
console.log(helloworld())