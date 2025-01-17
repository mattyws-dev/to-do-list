import { Tareas } from "./task.js";

export class ListaTareas {
    constructor() {
        this.tareas = []
    }

    agregarTarea(descripcion){
        const id = Date.now().toString()         
        const tarea = new Tareas(id, descripcion, id)        
        this.tareas.push(tarea)                
    }

    removerTarea(id){
        this.tareas = this.tareas.filter(tarea => tarea.id != id)
    }

    obtenerTareas(){
        return this.tareas
    }
}