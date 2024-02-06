// requer o método HTTP
const http = require('http');
// requer a ferramenta express
const express = require('express');
const aplicacao = express();
//criando o servidor HTTP

const servidorHTTP = http.createServer(aplicacao);
// requer o WebSocket para termos um canal de comunicação
const io = require('socket.io')(servidorHTTP);



io.addListener('connection', (socket)=>{
    console.log("Alguém está conectado");
    // escutando o evento enviado pelo front-End
    socket.addListener('nova mensagem',(msg)=>{
        io.emit('nova mensagem', msg);
    })
})

// informando para a aplicacao os recursos que ela tem que usar
aplicacao.use(express.static('public'));
// servidor escuta a porta criada
servidorHTTP.listen(2430);