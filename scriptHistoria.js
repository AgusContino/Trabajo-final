/* Controles de video */

let videoHistoria=document.querySelector("#videoHistoria")
let play=document.querySelector(".play")
let pausa=document.querySelector(".pausa")
let duracion=document.querySelector("#duracion")

play.addEventListener("click",()=>{
    videoHistoria.play()
    duracion.textContent=`${videoHistoria.duration.toFixed(2)}`
    console.log()
})
pausa.addEventListener("click",()=>{
    videoHistoria.pause()
})

// Esto nunca funciono:
// No pude hacer que la duracion aparezca sin antes darle play al video :(
// duracion.textContent=`${videoHistoria.duration}`
// Ni siquiera con console.log(videoHistoria.duration)