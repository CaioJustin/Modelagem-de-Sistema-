const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const botao = document.querySelector('.botao')
const scoreDisplay = document.querySelector('#score');
const Mbotao=document.querySelector('.Mbotao')


const jump = () => {
    mario.classList.add('jump');


    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'image/game-over.png'
        mario.style.width = '75px'
        mario.style.marginleft = '75px'


        
        clearInterval(loop);
    }


}, 10);

document.addEventListener('keydown', jump)


botao.addEventListener('click', () => {
    window.location.href = 'GameRun.html'

})



Mbotao.addEventListener('click',()=>{

    window.location.href='index.html'

})

