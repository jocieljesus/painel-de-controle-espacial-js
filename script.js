// Nivel 1
const btnEnergia = document.getElementById('btn-energia');
const body = document.body;

btnEnergia.addEventListener('click', function() {
    body.classList.toggle('energia-restaurada');
    
    if(body.classList.contains('energia-restaurada')) {
        btnEnergia.textContent = "Energia Estável";
        btnEnergia.style.backgroundColor = "#4caf50";
        aumentarProgresso(1)

    } else {
        btnEnergia.textContent = "Restaurar Energia";
        btnEnergia.style.backgroundColor = "#e94560";
    }
});

//  Nivel 2
const areaRastreio = document.getElementById('area-rastreio');
const coordX = document.getElementById('coord-x');
const coordY = document.getElementById('coord-y');

areaRastreio.addEventListener('mousemove', function(evento) {
    coordX.textContent = evento.offsetX;
    coordY.textContent = evento.offsetY;

    aumentarProgresso(2)
    
   
});

areaRastreio.addEventListener('mouseleave', function() {
    coordX.textContent = "0";
    coordY.textContent = "0";
});

// Nivel 3

const botoesAlerta = document.querySelectorAll('.btn-alerta');
const imgEscudo = document.getElementById('img-escudo');

botoesAlerta.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const cor = botao.getAttribute('data-cor');
        const status = botao.getAttribute('data-status');
        
        imgEscudo.setAttribute('src', `https://placehold.co/150x150/${cor}/white?text=${status}`);
        imgEscudo.setAttribute('alt', `Escudo em modo ${status}`);
      
    });
});

// Nivel 4

const inputTarefa = document.getElementById('input-tarefa');
const btnAddTarefa = document.getElementById('btn-add-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

btnAddTarefa.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();
    
    if (texto !== '') {
        const novoItem = document.createElement('li');
        novoItem.textContent = texto;
        
        novoItem.addEventListener('click', function() {
            novoItem.classList.toggle('concluida');
        });
        
        listaTarefas.appendChild(novoItem);
        inputTarefa.value = '';
        inputTarefa.focus();
      
    } else {
        alert("Por favor, digite um item para o checklist de voo.");
    }
}

// Nivel 5

const inputMensagem = document.getElementById('input-mensagem');
const visorTransmissao = document.getElementById('visor-transmissao');

inputMensagem.addEventListener('keyup', function() {
    if (inputMensagem.value.trim() === '') {
        visorTransmissao.textContent = 'AGUARDANDO SINAL...';
    } else {
        visorTransmissao.textContent = inputMensagem.value;
    }
});


// Nivel 6

const selectDestino = document.getElementById('select-destino');
const painelPrincipal = document.querySelector('.painel');

selectDestino.addEventListener('change', function() {
    painelPrincipal.style.backgroundColor = selectDestino.value;

});

// Nivel 7

const inputSenha = document.getElementById('input-senha');
const btnAutenticar = document.getElementById('btn-autenticar');
const msgAcesso = document.getElementById('msg-acesso');

btnAutenticar.addEventListener('click', function() {
    if (inputSenha.value.toLowerCase() === 'senac2026') {
        msgAcesso.textContent = "ACESSO CONCEDIDO, COMANDANTE!";
        msgAcesso.className = 'status-sucesso';
        
    } else {
        msgAcesso.textContent = "ACESSO NEGADO! INTRUSO DETECTADO!";
        msgAcesso.className = 'status-erro';
    }
});

// Nivel 8
const btnAquecer = document.getElementById('btn-aquecer');
const btnResfriar = document.getElementById('btn-resfriar');
const valorTemp = document.getElementById('valor-temp');
const displayTemp = document.getElementById('display-temperatura');

let temperatura = 20;
let intervaloAquecimento;

btnAquecer.addEventListener('click', function() {
    btnAquecer.disabled = true;
   
    
    intervaloAquecimento = setInterval(function() {
        temperatura += 5;
        valorTemp.textContent = temperatura;

        if (temperatura >= 80) {
            displayTemp.classList.add('perigo-critico');
        }

        if (temperatura >= 100) {
            clearInterval(intervaloAquecimento);
            valorTemp.textContent = "100 - EXPLOSÃO IMINENTE!";
            btnResfriar.disabled = false;
        }
    }, 500); 
});

btnResfriar.addEventListener('click', function() {
   
 intervaloAquecimento = setInterval(function() {
        temperatura -= 5;
        valorTemp.textContent = temperatura;

        if (temperatura == 20) {
            clearInterval(intervaloAquecimento);
            valorTemp.textContent = temperatura;
            displayTemp.classList.remove('perigo-critico');
            displayTemp.classList.add('resfriamento')

            btnAquecer.disabled = false;
        }
    }, 500); 

    
    btnResfriar.disabled = true;
   
});

