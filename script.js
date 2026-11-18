const btnEnergia = document.querySelector("#btn-energia")

const body = document.body




btnEnergia.addEventListener("click", ()=>{
    body.classList.toggle("energia-restaurada")

    if(body.classList.contains("energia-restaurada")){
        btnEnergia.style.backgroundColor = "#17b811"
        btnEnergia.style.Color = "#e0e0e0"
        btnEnergia.textContent = "Energia Estavel"
    }else{
        btnEnergia.style.backgroundColor = "#e94560"
        btnEnergia.style.Color = "#e0e0e0"
        btnEnergia.textContent = "Restaurar Energia"
    }
})


const areaRastreio = document.getElementById("area-rastreio")
let coordX = document.getElementById( "coord-x")
let coordY = document.getElementById("coord-y")

areaRastreio.addEventListener( 'mousemove', (evento) => {
        coordX.textContent = evento.offsetX
        coordY.textContent = evento.offsetY

})





let imgEscudo = document.querySelector("#img-escudo")
let botoesAlerta =  document.querySelectorAll(".btn-alerta")

botoesAlerta.forEach((botao)=> {
    botao.addEventListener( 'click', ()=>{
        const cor =  botao.getAttribute('data-cor')
        const status = botao.getAttribute('data-status')

        imgEscudo.setAttribute('src', `https://placehold.co/150x150/${cor}/white?text=${status}`)
        imgEscudo.setAttribute('alt', `Escudo em modo ${status}`)
    })
})