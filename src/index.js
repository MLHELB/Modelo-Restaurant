
import './estilo.css'
import './normalize1.css'
// Variables Menu celular
const menuCelular  = document.getElementById("btn-menu")
const nav = document.querySelector("nav")
// 
// 
// 
// Variables Slider
const contenedorAnimado = document.querySelector("#contenedor-seccion");
let  seccionesAnimadas = document.querySelectorAll(".seccion-animada");
let  ultimaSeccionAnimada = seccionesAnimadas[seccionesAnimadas.length -1];
// 
// 
// 
// Variables Efecto scroll 
let efectoAparecer = document.querySelectorAll(".efecto-java");
// 
// 
// 
// Variables efecto con el scroll behavior

const link = document.querySelectorAll(".menu-a") //cuando usamos este selector para varios elementos, addeventlistener no funciona es necesario usar un for para que recorra cada elemento.


// Variables Scroll boton-arriba

const boton = document.getElementById("boton-arriba");





// Scroll boton-arriba
boton.addEventListener("click",scrollAriba);


function scrollAriba (){
    let desplazamientoDeScroll = document.documentElement.scrollTop;
    if(desplazamientoDeScroll > 0){
        window.requestAnimationFrame(scrollAriba);  //para que el efecto no sea tan brusco, convertimos la funcion a una animacion.
        window.scrollTo(0, desplazamientoDeScroll -(desplazamientoDeScroll/5)); //mientras por mas lo divida + lento sera el efecto.
    }
}


//Aparece o no el boton
//a medida que hacemos scroll vamos a ejecutar una funcion
window.onscroll = function(){
    let scroll = document.documentElement.scrollTop; // en que posicion esta el scroll
    if( scroll > 300){
        boton.style.transform = "scale(1)";
    }
    else if(scroll < 300){
        boton.style.transform = "scale(0)";
    }
}

// Efecto Scroll
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


// Slider automatico
contenedorAnimado.insertAdjacentElement('afterbegin',ultimaSeccionAnimada);

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







// Menu celular
menuCelular.addEventListener("click",(e)=>{
    nav.classList.toggle("active");
    
});
//  efecto menu celular/scroll behavior
for(a of link){
    a.addEventListener("click",()=>{
        nav.classList.toggle("active");
    })
}