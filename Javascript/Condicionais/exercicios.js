//1.0 Crie um programa que lê um valor e imprima  dizendo se ele é maior ou menor que 10

var idade = prompt('Digite um numero:')

if(idade >=10 ){
    console.log('o seu numero é maior que 10')
}else{
    console.log("Os pais vão ser preso")
}

//Operadores lógicos

/*
    == -> ogualdade
    > -> maior que
    < -> menor que 
    != -> diferentes
    >= -> maior ou igual
    <= -> menor ou igual
*/

var a = 1,
    b = 5,
    c = 2,
    d = 1;

console.log(a>b) // false
console.log(a<b) // true
console.log( a == d) // true
console.log( b >= a) // true
console.log(c <= b) //true
console.log( d != a) //false
console.log(d != b) //true


