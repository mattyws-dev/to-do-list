
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