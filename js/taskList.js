import { Tareas } from "./task.js";

export class ListaTareas {
    constructor() {
        this.tareas = []
    }

    agregarTarea(descripcion){
        const id = Date.now().toString()   
        const fecha = new Date()    
        const tarea = new Tareas(id, descripcion, fecha)        
        this.tareas.unshift(tarea)                
    }

    removerTarea(id){
        this.tareas = this.tareas.filter(tarea => tarea.id != id)
    }

    completarTarea(id){
        this.tareas.forEach((item)=>{
            if (item.id === id) {
              item.estaCompletado = true              
            }
        })
    }

    obtenerTareas(){
        return this.tareas
    }

    renderizarListaDeTarea(){
        document.querySelector("#tareas").innerHTML = ""
        for (const tarea of this.tareas) {
            document.querySelector("#tareas").innerHTML += `
            <tr>
            <td>
            <div class="tarea" id="tarea${tarea.id}">
            <div class="descripcion-tarea">${tarea.descripcion}</div>
            <div class="btns-tarea">  
            <button title="Marcar como completada"><i id="${tarea.id}" class="fas fa-check"></i></button>
            <button title="Eliminar tarea"><i id="${tarea.id}" class="fas fa-trash"></i></button>
            </div>
            </div>
            </td>
            </tr>
            `
            if (tarea.estaCompletado) {
                document.querySelector(`#tarea${tarea.id}`).classList.add("tarea-completada")
                document.getElementById(`${tarea.id}`).remove()
            }
        }
        if(document.querySelector("#tareas").innerHTML == ""){
            this.renderizarSinTareas("Agrega una nueva tarea!")
        }
    }    

    renderizarSinTareas(mensaje){
        document.querySelector("#tareas").innerHTML += `
            <tr><td><h3 style="text-align:center">${mensaje}</h3></td></tr>
        `
    }

}