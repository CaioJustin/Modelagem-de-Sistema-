//dom

const jogador=document.querySelector('#images')
const bt1=document.querySelector('#bt1')
const bt2=document.querySelector('#bt2')
const bt3=document.querySelector('#bt3')



//evento

bt1.addEventListener('click',Christiano)
bt2.addEventListener('click',ney)
bt3.addEventListener('click',ronald)



//função

function Christiano(){
    jogador.src='images/Sem título.jpg'
}

function ney(){
    jogador.src='images/images.jpg'
}


function ronald(){
    jogador.src='images/Sem títulor.jpg'
}
