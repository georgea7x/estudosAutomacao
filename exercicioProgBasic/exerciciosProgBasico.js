require('dotenv/config');


/* Exercício 1 - função que ao ser executada no terminal mostre a frase : 
"Hello World"*/
function exer1(){

    console.log("Hello World");
    }

/* Exercício 2 -  Função que ao ser executada no terminal enviando a variavel de ambiente $MY_NAME_IS mostre a frase : 
- "Hello $MY_NAME_IS, how are you?". 
- Do contrario a frase : "Hello World! Who's there?"*/
function exer2(){

var name = process.env.MY_NAME_IS;

if (name == ""){

   console.log(`Hello World! Who's there?`)

}else{

    console.log(`Hello ${name}, how are you?`)

}


}

//Exercício 3 - Função que ao ser executada no terminal que lê dois números inteiros distintos e diz qual desses dois números é o maior.
function exer3(){

var num1 = prompt(`Digite um número`);
var num2 = prompt(`Digite outro número`);

if (num1 < num2) {

console.log(`O Segundo número (${num2}) é maior que o primeiro (${num1})`)

}else if(num1 > num2) {

    console.log(`O Primeiro número (${num1}) é maior que o segundo (${num2})`)

}else {

    console.log(`Os dois números são iguais`)

}
}

//Exercício 4 - Função que ao ser executada no terminal leia três números distintos e mostra o maior dos 3.
function exer4(){

    var num1 = prompt(`Digite o primeiro número`);    
    var num2 = prompt(`Digite o segundo número`);
    var num3 = prompt(`Digite o terceiro número`);

    

if(num2 == num1 && num2 > num3) {

    console.log(`O Primeiro e o Segundo número (${num1} e ${num2}) é maior que o terceiro (${num3})`)

}else if(num2 == num3 && num2 > num1) {

    console.log(`O Segundo e o terceiro número (${num2} e ${num3}) é maior que o Primeiro (${num1})`)

}else if(num1 == num3 && num1 > num2) {

    console.log(`O Primeiro e o terceiro número (${num1} e ${num3}) é maior que o Segundo (${num2})`)
    


}else if (num1 > num2 && num1 > num3) {

    console.log(`O Primeiro número (${num1}) é maior que os outros dois (${num2}, ${num3})`)
    
    }else if(num2 > num1 && num2 > num3) {

        console.log(`O Segundo número (${num2}) é maior que os outros dois (${num1}, ${num3})`)

    }else if(num3 > num1 && num3 > num2) {

        console.log(`O Terceiro número (${num3}) é maior que os outros dois (${num1}, ${num2})`)

    }
    else

    console.log(`Todos os números são iguais`)
}

//Exercício 5 - função que ao ser executada no terminal leia um valor e escrever a frase "É  MAIOR  QUE  10!" se o valor lido for maior que 10, caso contrário escrever "NÃO É MAIOR QUE 10!" 
function exer5(){

    var num1 = prompt(`Digite um número`);
    
    if (num1 > 10) {

    console.log(`O Número digitado (${num1}) é maior que 10`)
    
    }else if(num1 < 10) {

        console.log(`O Número digitado (${num1}) é menor que 10`)

    }else {

        console.log(`O Número digitado (${num1}) é igual à 10`)
    
    }
    }

//Exercício 6 - Função que ao ser executada no terminal ao ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo.  
function exer6(){

        var num1 = prompt(`Digite um número`);
        
        if (num1 < 0) {
      
            console.log(`O Número digitado (${num1}) é negativo`)
    
        }else {
    
            console.log(`O Número digitado (${num1}) é positivo`)
        
        }
        }

//Exercício 7 - Função que ao ser executada no terminal ao ler um valor e escrever se é positivo, negativo ou zero.
function exer7(){

            var num1 = prompt(`Digite um número`);
            
            if (num1 < 0) {
          
                console.log(`O Número digitado (${num1}) é negativo`)
        
            }else if (num1 > 0){
        
                console.log(`O Número digitado (${num1}) é positivo`)

            }else{

                console.log(`O Número digitado (${num1}) é igual à zero`)

                }
            
}

/*Exercício 8 - Função que ao ser executada no terminal que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. 
Considerar variaveis de retorno como : 
- Ano com 365 dias
- Mês com 30 dias. */
function exer8(){

    var anos = parseInt(prompt(`Quantos anos você tem?`));
    var meses = parseInt(prompt(`Quantos meses além dos ${anos} anos?`));
    var dias = parseInt(prompt(`Quantos dias além dos ${anos} anos e ${meses} meses?`));
              
    dias = (dias+(anos*365)+(meses*30));

    console.log(`Contando todos os dados, você nasceu há ${dias} dias`);

}           

//Exercício 9 - Função que ao ser executada no terminal  para  imprimir  os  números  de  1  (inclusive)  a  10  (inclusive)  em  ordem crescente.
function exer9(){

    var num1 = 1;

    while(num1 < 11){

        console.log(`Número ${num1}`);
num1++;
    }


}

//Exercício 10 - Função que ao ser executada no terminal para  imprimir  os  números  de  1  (inclusive)  a  10  (inclusive)  em  ordem decrescente.
function exer10(){

    var num1 = 10;

    while(num1 > 0){

        console.log(`Número ${num1}`);
num1--;
    }


}

//Exercício 11 - Função que ao ser executada no terminal para imprimir os 10 primeiros números inteiros maiores que 100.
function exer11(){

    var num1 = 100;


    console.log("os Números maiores que 100 são")
    while(num1 < 111){

        console.log(`Número ${num1}`);
        num1++;
    }


}

//Exercício 12 - Função que ao ser executada no terminal ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
function exer12(){

    var num1 = 1;
    var num2 = parseInt(prompt(`Digite um número`));

if(num2 < num1){
    console.log(`Desculpe, o número precisa ser maior que zero`);
}else{

    console.log(`Os números entre ${num1} e ${num2} são:`);
    while(num1 <= num2){

        console.log(`Número ${num1}`);
        num1++;
    }
}
}

//Exercício 13 - Função que ao ser executada no terminal que modifique o  exercício anterior para aceitar somente  valores maiores  que 0 para N. Caso o valor informado (para N) não seja maior que 0, deverá ser lido um novo valor para N.
function exer13(){

    var num1 = 1;
    var num2 = parseInt(prompt(`Digite um número`));

    while(num2 < num1 || isNaN(num2) ){
        num2 = parseInt(prompt(`Por favor, apenas digite valores acima de zero`));
    }

    console.log(`Os números entre ${num1} e ${num2} são:`);
    while(num1 <= num2){

        console.log(`Número ${num1}`);
        num1++;
    }
}

//Exercício 14 - Função que ao ser executada no terminal leia 10 valores e escrever quantos desses valores lidos são NEGATIVOS.
function exer14(){

    var num1 = 1;
    var compara = Array(10);

    while(num1 < 11){

        compara[num1] = parseInt(prompt(`Digite o número`));

        num1++;
    }

    num1 = 1;
    while(num1 < 11){

        if(compara[num1] < 0){
        console.log(`Número ${compara[num1]} é negativo`);

        }else{

            console.log(`Número ${compara[num1]} é positivo`);

        }
        num1++;
    }
    
}

//Exercício 15 - Função que ao ser executada no terminal que leia um número inteiro e imprima o seu antecessor e seu sucessor.
function exer15(){

    var num1 = parseInt(prompt(`Por favor, apenas digite valores acima de zero`));
    
console.log(`O Número anterior à ${num1} é ${num1-1} e sucessor é ${num1+1}`);
    
}


