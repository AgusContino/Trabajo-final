/* --------------- JUEGO ------------------*/
let imgDrag = document.getElementsByClassName("imgDrag")
let zoneDrop = document.getElementsByClassName("drop")

let piezaSeleccionada
for (let i = 0; i < imgDrag.length; i++) {
    imgDrag[i].addEventListener("dragstart",()=>{
        piezaSeleccionada=imgDrag[i]
        console.log(piezaSeleccionada)  
    })
    imgDrag[i].addEventListener("dragend",()=>{
          
    })
}

for (let i = 0; i < zoneDrop.length; i++) {
    zoneDrop[i].addEventListener("dragover",(evento)=>{
        evento.preventDefault()
    })
    zoneDrop[i].addEventListener("drop",()=>{
        //console.log("drop:"+i)
        let piezaColocada=document.createElement("img")
    zoneDrop[i].textContent=""
    zoneDrop[i].appendChild(piezaColocada)
    piezaSeleccionada.style.visibility="hidden"
    piezaColocada.setAttribute("src",`${piezaSeleccionada.getAttribute("src")}`)
    })
}

let reinicio=document.querySelector("#reinicio")
reinicio.addEventListener("click",()=>{
    window.location.reload()
})
