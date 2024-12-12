const express = require("express");

const app = express();
const port = 5002;

// Rota principal que responde com "Olá mundo | EXPRESS"
app.get('/', (req, res) => {
    res.send('Olá mundo | EXPRESS');
  });

app.get('/rota/:numeroRota', (req, res) => {
    res.send(`ROTA ${req.params['numeroRota']} - Olá mundo | EXPRESS`);
});

app.get('/rota/:numeroRota/:nome', (req, res) => {
    res.send(`ROTA ${req.params['numeroRota']} - Olá ${req.params['nome']} | EXPRESS`);
});
  
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});