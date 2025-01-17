import { ListaTareas } from "./taskList.js"

const tareas = new ListaTareas()

document.querySelector("#agregarTarea").addEventListener('click', (e)=>{
    e.stopPropagation()    
    e.preventDefault()

    const inputTarea = document.querySelector("input")
    if (e.target.localName === 'button') {
        const tarea = tareas.agregarTarea(inputTarea.value)
        inputTarea.value = ""     
        console.log(tareas.obtenerTareas());
    }
    
})

