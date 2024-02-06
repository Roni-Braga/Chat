const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');


// parte do front-end para estabelecer comunicação com o back-end
const socket = io();


botaoEnviar.addEventListener('click', ()=>{
    // verifica se a caixa de texto está vazia 
    if(caixaMensagem.value !== ""){
        // emite a mensagem que foi digitada
        socket.emit('nova mensagem', caixaMensagem.value);
        // depois de enviar a mensagem a caixa de texto fica cazia
        caixaMensagem.value = "";
    }
})
// o front-End recebeu uma nova mensagem do back-end
socket.addEventListener('nova mensagem',(msg)=>{
    const elementoMensagem = document.createElement('li');// <li> criada
    elementoMensagem.textContent = msg; // mensagem recebida do back
    elementoMensagem.classList.add('mensagem'); // recebe o estilo do css que está na classe mensagem
    chat.appendChild(elementoMensagem); // adicionando a mensagem na caixa de texto 
})