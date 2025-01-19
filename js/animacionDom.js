
document.querySelector("#btnMenu").addEventListener("click", (e)=>{
    e.stopPropagation()
    const listaDesplegable = document.querySelector(".lista-desplegable")
    listaDesplegable.classList.toggle("mostrar-lista-desplegable")

    window.addEventListener("click", (e) => {
        if (!e.target.matches("#btnMenu")) {
          listaDesplegable.classList.remove("mostrar-lista-desplegable");
        }
      });
})

document.querySelector(".lista-tareas").addEventListener('click', (e)=>{
  e.preventDefault()
  if(e.target.localName === "i"){

    const tarea = document.querySelector(`#tarea${e.target.id}`)  
  
    if (e.target.classList[1] === "fa-check") {
      tarea.classList.add("tarea-completada")
      
      tarea.addEventListener('transitionend', (e) => {    
        tarea.children[1].children[0].style.display = "none"
      }, { once: true }); // se hace una sola vez
          
    } else {
      tarea.classList.add("tarea-eliminada")
  
      tarea.addEventListener('transitionend', (e) => {    
        tarea.style.display = "none"
      }, { once: true }); // se hace una sola vez
    }
    
  }
  

})