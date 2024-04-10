const dv = document.querySelector('#dv');
const rc = document.querySelector('#rc');
const pg = document.querySelector('#pg');
const button = document.querySelector('#button');
const sit =document.querySelector('#sit');


button.addEventListener('click',()=>{


dvv=Number(dv.value);
rcv=Number(rc.value);
pgv=Number(pg.value);


custo =(dvv/rcv)*pgv



sit.textContent=`O Custo total da viagem sera ${custo.toFixed(2)}`;






})