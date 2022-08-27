
import './estilo.css'
import './normalize1.css'






const menuCelular  = document.getElementById("btn-menu")
const nav = document.querySelector("nav")


const contenedorAnimado = document.querySelector("#contenedor-seccion");



let efectoAparecer = document.querySelectorAll(".efecto-java");



const link = document.querySelectorAll(".menu-a") 




const boton = document.getElementById("boton-arriba");







menuCelular.addEventListener("click",(e)=>{
    nav.classList.toggle("active");
    
});

for(let vinculo of link){
    vinculo.addEventListener("click",(e)=>{
        nav.classList.toggle("active");
    })
}


const moverDerecha = ()=>{
    let ultimaSeccionAnimada = document.querySelectorAll(".seccion-animada")[0];
    contenedorAnimado.style.marginLeft= "-100%";
    contenedorAnimado.style.transition= "all 2s";

setTimeout(()=>{
    contenedorAnimado.style.transition="none";
    contenedorAnimado.insertAdjacentElement('beforeend',ultimaSeccionAnimada);
    contenedorAnimado.style.marginLeft="0%"; 
},2000);
}

setInterval(()=>{
    moverDerecha()
},3000)
 
function efectoScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i =0;i < efectoAparecer.length ; i++){
        let distanciaAltura =  efectoAparecer[i].offsetTop;
        if(distanciaAltura - 600 < scrollTop){
            efectoAparecer[i].style.opacity=1;  
        }
    }
}
window.addEventListener("scroll",efectoScroll);





boton.addEventListener("click",scrollAriba);


function scrollAriba (){
    let desplazamientoDeScroll = document.documentElement.scrollTop;
    if(desplazamientoDeScroll > 0){
        window.requestAnimationFrame(scrollAriba); 
        window.scrollTo(0, desplazamientoDeScroll -(desplazamientoDeScroll/5)); 
    }
}



window.onscroll = function(){
    let scroll = document.documentElement.scrollTop; 
    if( scroll > 300){
        boton.style.transform = "scale(1)";
    }
    else if(scroll < 300){
        boton.style.transform = "scale(0)";
    }
}


