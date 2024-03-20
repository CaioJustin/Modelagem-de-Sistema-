//dom

const horas =document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos =document.querySelector('#segundos')
const gooday=document.querySelector('#gooday')


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


    horas.textContent=h
    minutos.textContent=m
    segundos.textContent=s

if(h<10){
    h="0"+h
}


if(m<10){
    m="0"+m
}

if(s<10){
    s="0"+s
}


    let no;

    if(h<11){
        no="Good Morning";
    }else if (h<18){
        no="Good Afternoon";
    }else if (h<18){
        no="Good everning";
    }

    gooday.textContent=no
}