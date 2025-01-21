import { Interracion } from "./manejoDom.js";

const main = () => {
    const interaccion = new Interracion()
    
    interaccion.cargarTareas()
    interaccion.agregarTarea()
    interaccion.focusInput()
    interaccion.listaDesplegableHeader()
    interaccion.interaccionTarea()

} 
main()