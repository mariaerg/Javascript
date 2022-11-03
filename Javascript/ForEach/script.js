//Array 
//É um grupo de valores. Servem para guardarmos diferentes valores em uma unica variável.
/*
var videoGames = ['Switch', 'PS4', 'XBox'];

var numeros = [1,2,3]
console.log(videoGame[0])
console.log(videoGames[2])
console.log(videoGames[3])

console.log(numeros[0]+numeros[2])
*/

/*var i = 0;
while(i<10){
    console.log(i)
    i = i + 1
}
*/
/*
for (var i = 0; i <10; i = i+1){
    console.log(i)
}
*/
var videoGames = ['Switch', 'PS4', 'XBox'];

//ForEach
//forEach é um método que executa uma função para cada item array.É uma forma mais simples de utilizarmos um loop com array
videoGames.forEach(function(a,b,c){
    console.log(a,b,c)
})


//Crie uma array com os anos que o Brasil ganhou a copa 1958, 1962, 1970, 1994, 2002

var Brasil = [1958,1962,1970,1994,2002]

//Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, 'o brasil ganhou a copa de ${ano}

Brasil.forEach(function(c){
    console.log('o Brasil ganhou a copa ' + c)
})