// Importa o módulo HTTP do Node.js
//Este módulo já vem nativo no node e permite criar
// servidores web
const http = require("http");

// req (resquest) => informações da requisição
// res (response) => resposta que vamos enviar ao cliente
const servidor = http.createServer((req, res) => {
    res.end("Meu primeiro servidor Node!");
});

//Faz o servidor buscar na porta 3000 (escolhida por nós)
servidor.listen(3000);

// Portas comuns:
// 3000 => desenvolvimento
// 5000 => comum para API's
// 8080 => alternativas pra web
// 80 => HTTP padrão
// 443 => HTTPS