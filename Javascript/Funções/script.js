//Funções
/*
    function nomeDaFunção (parâmetros){
        ações
    }
*/

var a = 7
var b = 8
var total = a + b
console.log(total)


function soma(c,d){
    var total1 = c + d
    return console.log(total1)
}

soma(10,50)
soma(7,5)

//Calculo da área de um quadrado
function areaDeUmQuadrado(lado){
    var area = lado*lado;
    return console.log(area)
}

areaDeUmQuadrado(4)

//Faça uma função que calcule a area de um retângulo de lados diferentes.
    function areaDeUmRetangulo(lado,lado2){
        var area = lado*lado
        return console.log(area)
    }
areaDeUmRetangulo(7,8)

//função

function pi(){
    return 3.1415
}


function corfavorita(cor){
    if(cor === 'azul'){
        return 'Gosta do céu'
    }else if(cor === 'preto'){
        return 'É Corintiana'
    }else{
        return 'Você gosta de nada'
    }
}
    
//Crie uma função matemática que retorne o perímetro de um quadrado //lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro (l1,l2,l3,l4){
    var total = l1 + l2 + l3 + l4
    console.log(total)
    return total
}

//Crie uma fração que retorne o seu nome completo
//ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome,sobrenome){
    var somaNomes = nome + " " + sobrenome
    console.log(somaNomes)
    return somaNomes
}

//Crie uma função que verifica se um número é par

function par(numero){
    if(numero % 2 == 0){
        console.log('par')
    }else{
        console.log('Impar')
    }
}
