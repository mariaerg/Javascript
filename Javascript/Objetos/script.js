//Objetos 
//Conjuntos de variáveis e funções, que são chamadas de propriedades e métados 

var pessoa = {
    nome:'Grazi',
    Idade: 20,
    profissao: 'Monitora do professor bonitão',
    faculdade: true,
}

pessoa.nome
console.table(pessoa)

//Objeto com funções ou métados

var quadrado = {
    perimetro: function(lado){
        return lado + lado + lado + lado
    },
    area: function(area){
        return area*area 
    },
}

//Arrays 

//É um grupo de valores geralmente relacionados. servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['PS4', 'XBox', 'Switch']

console.log(videoGames.length)
