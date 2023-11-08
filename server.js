const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080; // Usa a variável de ambiente PORT ou a porta 8080 se não definida.

const appName = 'new-portfolio-app';
const staticDir = path.join(__dirname, 'dist', appName); // Caminho para o diretório de arquivos estáticos.

app.use(express.static(staticDir));

app.get('/*', function(req, res) {
    res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(port, () => {
    console.log(`Aplicativo está rodando na porta ${port}`);
});