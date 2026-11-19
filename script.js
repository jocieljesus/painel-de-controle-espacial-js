
// Etapa 1
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




// Etapa 2
const areaRastreio = document.getElementById("area-rastreio")
let coordX = document.getElementById( "coord-x")
let coordY = document.getElementById("coord-y")

areaRastreio.addEventListener( 'mousemove', (evento) => {
        coordX.textContent = evento.offsetX
        coordY.textContent = evento.offsetY

})




// Etapa 3

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



// Etapa 4

let inputTarefa = document.getElementById("input-tarefa")
let btnAddTarefa = document.getElementById("btn-add-tarefa")
let listaTarefas = document.getElementById("lista-tarefas")

btnAddTarefa.addEventListener("click", adicionarTarefa)

inputTarefa.addEventListener("keypress", (evento)=>{
    if(evento.key == "Enter"){
        adicionarTarefa()
    }
})

function adicionarTarefa(){
    var tarefa = inputTarefa.value.trim()

    if(tarefa !== ""){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        
        novaTarefa.addEventListener('click', ()=> novaTarefa.classList.toggle("concluida"))

        listaTarefas.appendChild(novaTarefa)
        inputTarefa.value = ""
        inputTarefa.focus()
    } else {
        alert("Digite um item para o checklist de voo.")
    }
}

// Etapa 5

let  inputMensagem = document.getElementById("input-mensagem")
let  visorTransmissao = document.getElementById("visor-transmissao")

inputMensagem.addEventListener("keyup", ()=>{
        let mensagem = inputMensagem.value.trim()
        if(mensagem !== ""){
            visorTransmissao.textContent = mensagem
        }else{
            visorTransmissao.textContent = "Aguardando Sinal..."
        }      
})

// Etapa 6
let painel = document.querySelector(".painel")
let selectDestino = document.querySelector("#select-destino")

selectDestino.addEventListener("change", ()=>{
    painel.style.backgroundColor = selectDestino.value
})


// Etapa 7

let inputSenha = document.getElementById('input-senha');
let btnAutenticar = document.getElementById('btn-autenticar');
let msgAcesso = document.getElementById('msg-acesso');


btnAutenticar.addEventListener('click', ()=> {
    if (inputSenha.value.toLowerCase() === 'senac2026') {
        msgAcesso.textContent = "ACESSO CONCEDIDO, COMANDANTE!";
        msgAcesso.className = 'status-sucesso';
        
    } else {
        msgAcesso.textContent = "ACESSO NEGADO! INTRUSO DETECTADO!";
        msgAcesso.className = 'status-erro';
    }
});


// Etapa 8

const btnAquecer = document.getElementById('btn-aquecer');
const btnResfriar = document.getElementById('btn-resfriar');
const valorTemp = document.getElementById('valor-temp');
const displayTemp = document.getElementById('display-temperatura');

let temperatura = 20;
let intervaloAquecimento;

btnAquecer.addEventListener('click', function() {
    btnAquecer.disabled = true;
    btnResfriar.disabled = false;
    
    intervaloAquecimento = setInterval(function() {
        temperatura += 5;
        valorTemp.textContent = temperatura;

        if (temperatura >= 80) {
            displayTemp.classList.add('perigo-critico');
        }

        if (temperatura >= 100) {
            clearInterval(intervaloAquecimento);
            valorTemp.textContent = "100 - EXPLOSÃO IMINENTE!";
        }
    }, 500); 
});

btnResfriar.addEventListener('click', function() {
    clearInterval(intervaloAquecimento);
    
    temperatura = 20;
    valorTemp.textContent = temperatura;
    displayTemp.classList.remove('perigo-critico');
    
    btnAquecer.disabled = false;
    btnResfriar.disabled = true;
});
















