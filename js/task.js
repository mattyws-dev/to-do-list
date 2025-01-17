export class Tareas {
    constructor(id, desc, fecha, estaCompletado = false) {
        this.id = id
        this.descripcion = desc
        this.fecha = fecha
        this.estaCompletado = estaCompletado
    }

    completarTarea(){
        this.estaCompletado = !this.estaCompletado
    }
}