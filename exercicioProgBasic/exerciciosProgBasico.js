function exer1(){

    console.log("Hello World");
    }

function exer2(){

    window.alert("Não Implantado")
}

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

function exer6(){

        var num1 = prompt(`Digite um número`);
        
        if (num1 < 0) {
      
            console.log(`O Número digitado (${num1}) é negativo`)
    
        }else {
    
            console.log(`O Número digitado (${num1}) é positivo`)
        
        }
        }

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
            function exer8(){

                var anos = parseInt(prompt(`Quantos anos você tem?`));
                var meses = parseInt(prompt(`Quantos meses além dos ${anos} anos?`));
                var dias = parseInt(prompt(`Quantos dias além dos ${anos} anos e ${meses} meses?`));
                
                dias = (dias+(anos*365)+(meses*30));

                console.log(`Contando todos os dados, você nasceu há ${dias} dias`);

                }           
function exer9(){

    var num1 = 1;

    while(num1 < 11){

        console.log(`Número ${num1}`);
num1++;
    }


}

function exer10(){

    var num1 = 10;

    while(num1 > 0){

        console.log(`Número ${num1}`);
num1--;
    }


}

function exer11(){

    var num1 = 100;


    console.log("os Números maiores que 100 são")
    while(num1 < 111){

        console.log(`Número ${num1}`);
        num1++;
    }


}

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

function exer15(){

    var num1 = parseInt(prompt(`Por favor, apenas digite valores acima de zero`));
    
console.log(`O Número anterior à ${num1} é ${num1-1} e sucessor é ${num1+1}`);
    
}


