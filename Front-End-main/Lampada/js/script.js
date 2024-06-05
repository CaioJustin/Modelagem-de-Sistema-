//dom     :e pra informa quais sao objetos do html que vão participar 
//eventos :e oque o usuario vai ter que fazer pra(o) evento acontecer | lampada acender 
//funções :

//dom

//querySelector Metodo de Procura
//mudei o nome do objeto com Id botao de apagar agora e chamado bt1

const lampada =document.querySelector('#Lampada')
const bt1 =document.querySelector('#Apagar')
const bt2 =document.querySelector('#Acender')


//Eventos

//addventlistener definir oque o usuario vai fazer no botao e oque vai acontecer

bt1.addEventListener('click',desligar)
bt2.addEventListener('click',liga)
lampada.addEventListener('dblclick',quebrar)

//funções 

function liga(){
    lampada.src='images/acesa.gif'
}

function desligar(){
    lampada.src='images/apagada.gif'
}

function quebrar(){
    lampada.src='images/quebrada.jpg'
}


