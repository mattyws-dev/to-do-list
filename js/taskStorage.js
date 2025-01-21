
export class TaskStorage {
    constructor() {
    }

    guardarLista(listaTareas){                                
        localStorage.setItem("listaTareas", JSON.stringify(listaTareas))            
    }

    cargarListaTareas(){

        return new Promise((resolve, reject) => {
            if (localStorage.getItem("listaTareas") === null || localStorage.getItem("listaTareas") === '[]') {
                return reject("No se encontraron tareas!")
            }

            resolve(localStorage.getItem("listaTareas"))
        })
    }
}

