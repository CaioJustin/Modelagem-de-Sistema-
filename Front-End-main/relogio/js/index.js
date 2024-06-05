//dom

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos =document.querySelector('#segundos')

const dia=document.querySelector('#dia')
const mes=document.querySelector('#mes')
const ano=document.querySelector('#ano')
const texto=document.querySelector('#texto')

//Eventos

setInterval(relogio,1000)


//função

function relogio (){
    //let  e const e pra criar variavel cons variavel constante fixar imutavel
    //let variavel mudavel mutavel
    // let vs var ambos sao variaveis mutavveis
    //o let e função que so vivi na funcao variavel local
    //ja o var funciona ate em outro arquivo variavel global
    let day = new Date()
    
    let h = day.getHours()
    let m= day.getMinutes()
    let s=day.getSeconds()

    let dd=day.getDate()
    let mm=day.getMonth()+1
    let aa=day.getFullYear()


if(h<10){
    h="0"+h
}


if(m<10){
    m="0"+m
}

if(s<10){
    s="0"+s
}

if(h>=5 && h <12){
    texto.textContent='Bom dia ! ☀️';
    
}else if(h >=12 && h <=18){
    texto.textContent='Boa Tarde !🌄';
    document.body.style.background="url(images/R.png)"
}else {
    texto.textContent='Boa Noite !🌕';





















}

if(mm<10){
    mm="0"+mm
}

if(dd<10){
    dd="0"+dd
}

horas.textContent=h
    minutos.textContent=m
    segundos.textContent=s

    dia.textContent=dd
    mes.textContent=mm
    ano.textContent=aa  



}