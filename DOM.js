const icono = document.querySelector(".icono");
const iconoHover = document.querySelector(".icono-hover"); 
const iconoItem = document.querySelector(".icono-item"); 


icono.addEventListener("click", (e)=> {
    if(window.innerWidth > 600) {
       if(e.target.classList.contains("icono")) {
        iconoHover.classList.toggle("icono-hover-visible");
        // console.log("hola");
        }  else {
        iconoHover.classList.toggle("icono-hover-visible");

        }  
    }
    
   
})