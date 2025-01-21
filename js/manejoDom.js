import { ListaTareas } from "./taskList.js"
import { TaskStorage } from "./taskStorage.js"

const tareas = new ListaTareas()
const almacenamiento = new TaskStorage()

export class Interracion {
  constructor() {
  } 

  cargarTareas = async () => {    
    try {
        const result = await almacenamiento.cargarListaTareas()
        const data = await JSON.parse(result)
        tareas.tareas = data 
        tareas.renderizarListaDeTarea()
    } catch (error) {        
        tareas.renderizarSinTareas(error)
    }   
  }

  agregarTarea(){
    document.querySelector("#agregarTarea").addEventListener('submit', (e)=>{     
      e.preventDefault()
      
      const inputTarea = document.querySelector("input")
      tareas.agregarTarea(inputTarea.value)
      inputTarea.value = ""     
          
      almacenamiento.guardarLista(tareas.obtenerTareas())

      tareas.renderizarListaDeTarea()
    
      
    })  
  }

  focusInput(){
    document.querySelector("#inputNuevaTarea").focus()
  }

  listaDesplegableHeader(){

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
  }

  interaccionTarea(){

    document.querySelector(".lista-tareas").addEventListener('click', (e)=>{
      e.preventDefault()
      if(e.target.localName === "i"){
    
        const idTarea = e.target.id
        const tarea = document.querySelector(`#tarea${idTarea}`)  
      
        if (e.target.classList[1] === "fa-check") {
          this.animacionTareaCompletada(tarea)  
          tareas.completarTarea(idTarea)                      
          almacenamiento.guardarLista(tareas.obtenerTareas())
        } else {
          this.animacionTareaEliminada(tarea)
          tareas.removerTarea(idTarea)
          almacenamiento.guardarLista(tareas.obtenerTareas())
          
        }        
      }
    })
  }

  animacionTareaCompletada(elementoTarea){
    elementoTarea.classList.add("tarea-completada")     

    elementoTarea.addEventListener('transitionend', (e) => {    
      elementoTarea.children[1].children[0].style.display = "none"
          }, { once: true }); 
  }

  animacionTareaEliminada(elementoTarea){
    elementoTarea.classList.add("tarea-eliminada")
      
    elementoTarea.addEventListener('transitionend', (e) => {    
      tareas.renderizarListaDeTarea()
    }, { once: true }); 
  }

}
