const nome =document.querySelector('#nome')
const n1=document.querySelector('#uni1')
const n2 =document.querySelector('#uni2')
const n3 =document.querySelector('#uni3')
const button =document.querySelector('#button')
const ch =document.querySelector('#ch')
const sit =document.querySelector('#sit')


button.addEventListener('click', (e)=>{
    e.preventDefault()
    let n1, n2, n3 = 0
    
// n1=uni1 esta pegando somento o input e necessario coloca value pra pegar o que ta dentro
// como converte string para numero 
    n1=Number(uni1.value)
    n2=Number(uni2.value)
    n3=Number(uni3.value)


    media=(n1+n1+n3)/3
    
    
    if(media >=5){
        situacao='aprovado'
    }else{
        situacao='Recuperação'
    }
    
    //decidir qwuantas casas decimais vai arredonda toFixed(1) 1 signifca uma casa decimal 
    ch.textContent=`Sr(a) ${nome.value} sua media Final foi ${media.toFixed(1)} sua media final foi ${situacao}`;


})

