

var digito = document.querySelector('.digito');
const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');
const btnRestart = document.querySelector('.btnRestart');
var digitoHoras = document.querySelector('.hora');
var digitoMinutos = document.querySelector('.minuto');
var digitoSegundos = document.querySelector('.segundo');
var digitoMilisegundos = document.querySelector('.milisegundo');
var historicoH = document.querySelector('.hora3');
var historicoM = document.querySelector('.minuto3');
var historicoS = document.querySelector('.segundo3');
var historicoMs = document.querySelector('.milisegundo3');


var n = 0; //controlador do start/stop

btnStart.addEventListener('click', startCronometro);
btnStop.addEventListener('click', stop);
btnRestart.addEventListener('click', restart);

var clicked = 0; //controlador de click no btn start pra evitar um bug que ao clicar diversas vezes aumenta velocidade do cronometro

function startCronometro() {

    //essa estrutura so é executada caso clicked seja = '0' evitando o bug ja citado.
    if (clicked == 0) {

        //estrutura que faz o cronometro funcionar
        setInterval(() => {
            //abaixo, os valores atuais dos digitos do cronometro sao salvos nas respectivas variaveis para serem somadas com +1 e fazer funcionar o loop do cronometro
            let milisegundo2 = digitoMilisegundos.innerHTML; 
            let minuto2 = digitoMinutos.innerHTML;
            let segundo2 = digitoSegundos.innerHTML;
            let hora2 = digitoHoras.innerHTML;
            valor = 1; //valor que vai ser somado a cada loop do cronometro

            //primeiro e mais importante loop que vai decidir os outros, a cada 1000ms, vai somar aos segundos, a cada 60 segundos +1 aos miutos etc..
            if ( n== 0){ //loop milisegundos
            digitoMilisegundos.innerHTML = Number(milisegundo2) + Number(valor);
            }

            if (milisegundo2 > 99 && n == 0) { //loop segundos
                digitoMilisegundos.innerHTML = Number('00');
                digitoSegundos.innerHTML = Number(segundo2) + Number(valor);
            }

            if (segundo2 > 59 && n == 0) { //loop minutos
            digitoSegundos.innerHTML = Number('0');
            digitoMinutos.innerHTML = Number(minuto2) + Number(valor);
            }

             if (minuto2 > 59 && n == 0) { //loop horas
             digitoMinutos.innerHTML = Number('0');
             digitoHoras.innerHTML = Number(hora2) + Number(valor);
            }


        }, 10);
    }

    clicked++; //soma 1 a variavel clicked com a intencao de evitar que a estrutura anterior seja executada mais de uma vez pra corrigir o bug ja mencionado  
   
     n = 0; //seta a variavel n pra zero pra fazer a estrutura anterior voltar a funcionar depois de clikar em stop
   
}

function stop() {
    n++ //seta a variavel n pra 1 com a intencao de parar o cronometro
}

function restart() {

    //pega os valores atuais dos digitos e define esses valores ao historico
    historicoH.innerHTML = digitoHoras.innerHTML;
    historicoM.innerHTML = digitoMinutos.innerHTML;
    historicoS.innerHTML = digitoSegundos.innerHTML;
    historicoMs.innerHTML = digitoMilisegundos.innerHTML;
    
    //seta os valores do digito pra zero pra fazer o efeito de 'restart'
    digitoHoras.innerHTML = '00';
    digitoMinutos.innerHTML = '00';
    digitoSegundos.innerHTML = '00';
    digitoMilisegundos.innerHTML = '00';
    n++ //soma 1 a variavel n com a intencao de pausar o contador

}