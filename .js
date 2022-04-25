//Elaine rodrigues dos santos 
//1 - Muitas estruturas algorítmicas tem sua lógica inspirada em coisas do seu cotidiano, como por exemplo o ato de tomar água e depois ter que ir ao banheiro. Baseado nos seus conhecimentos de estruturas algorítmicas 
//e na sua vivência pessoal, descreva uma situação cotidiana que se assemelha a essas respectivas estruturas abaixo:

//a - Array
//Tipos de flores orquideas  girassol 
//b - Função
//Varrer a casa pegar a vassoura a pa
//c - Laço de repetição (for)
//quantidade de agua em um copo de  300ml 
//d - Laço de repetição (while) roupas em uma gaveta 
//e - Condicionais (if e else) quantidades de doces falso e verdadeiro 

//2 - Agora, com base nas suas respostas a cima, repita essa mesma situação que você descreveu, porém transformando-as em código JavaScript.

//a - Array
const tipoDeFlores=[["Orquideas"],["girassol"]];
//b - Função
function varrer(){
    console.log("varrer a casa pegar a vassoura e a pa");
}
//c - Laço de repetição (for)
function agua(){
    for(let copo=0;copo<=300;copo++){
        console.log("copo com"+copo+"ml")
    }
}
//d - Laço de repetição (while)
function gaveta(){
    let roupas=0;
while(roupas<10){
    roupas++;
    console.log("guardando roupas "+roupas)
}
}
//e - Condicionais (if e else)
function doces (d){
    if(d==10){
        return true 
    }else{
        return false 
    }

}
