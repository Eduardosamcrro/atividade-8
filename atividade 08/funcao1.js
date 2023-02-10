//funcao sem retorno
function imprimirSoma(a, b){
console.log(a + b)}

imprimirSoma(8, 7)
imprimirSoma(8)//a soma ira dar "NaN", pois como somente foi citado o numero 8 o outro valor fica indefinido "Uderfined"
imprimirSoma(8, 7, 9, 8, 8 ,7)//imprimira somente os numeros A e B, o resto nao aparecerar
imprimirSoma()//como a propriedade nao foi definidada ela da NaN.

//funcao com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2 , 3))//retronara o valor 5, pq o a + b seria 2 + 3
console.log(soma(2))//retornarar 2, pq na funcao informamos que o valor de b é 0, se ele fosse 1 ou qualquer valor seria somado tambem

