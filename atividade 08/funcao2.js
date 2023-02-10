//armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a+b);
}
imprimirSoma (9, 7);
//armazanando uma funcao arrow em uma variavel
const soma = (a, b)=>{
    return a + b
}
console.log(soma(2, 7));
//retorno implicido
const substracao= (a, b)=> a - b
console.log(substracao(2, 6))


const imprimir2= a => console.log(a)
imprimir2("Botafogo");
