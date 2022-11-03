//tipos de dados

//Todos são primitivos exceto os objetos.
var nome = "Maria" // String
var idade = 17 // number
var VerdadeiroOuFalso = true // Boolean
var time; //Undefined
var comida = null // null 
var novoObjeto = {} // Object

//objetos
    const Alunos = {
        NomeDoAluno: 'Maria',
        IdadeDoAluno: 17,
        TimeDoAluno: false,
    }

    console.log(Alunos.NomeDoAluno)

//Verificar os tipos de dados
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof VerdadeiroOuFalso);
console.log(typeof time);
console.log(typeof comida);
console.log(typeof novoObjeto);

//Você pode somar string e assim concatenar as palavras. 

var nome2 = "Maria Eduarda"
var sobrenome = "Ramalho Gomes"
var nomeCompleto = nome2 + " " + sobrenome;
console.log(nomeCompleto)

//Você pode somar números com strings, o resultado final será sempre uma string.

var gols = 1000;
var frase = 'Pelé fez ' +  gols + 'gols'
console.log(frase)

//Template string
var golacos = 1000;
var frase2 = `Maria Eduarda fez mais de ${golacos} gols`
console.log(frase2);

//Declarar uma variável contendo uma string

let carro = "Voyage";

//Declarar uma variável contendo um número dentro de uma string

let NumeroString = "26";

//Declare uma variável com a sua idade

var MinhaIdade = 17;

//Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas

var MeuNome = "Maria Eduarda"
var MeuSobrenome ="Ramalho"
var MeuNomeCompleto = MeuNome + " " + MeuSobrenome

//Coloque a seguinte frase em uma variável: It's time

let Itstime = "It's time"

//verifique o tipo da variável que contém o seu nome

console.log(typeof MeuNomeCompleto)


//var numero = prompt("Digite um valor: ");
//console.log(numero)

//Faça um programa que peça dois numeros para o usuário. Imprima a soma desses dois números.

//Criar dois prompt dentro de variáveis
let x = parseInt(prompt("Digite o 1º valor: ") )
let y = parseInt(prompt("Digite o 2º valor: ") )

//somar os resultados
let soma = x + y
console.log(soma)

