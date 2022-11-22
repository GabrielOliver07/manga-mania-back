// pacotes
require('dotenv/config'); // permite acesso ao arquivo .env
const express = require('express');
const { isAuthenticated } = require('./middlewares/jwt.middleware');
const app = express();


// banco de dados
require('./db');
// configurações
require('./configs')(app);
// rotas
app.use('/auth', require('./routes/auth.routes'));
app.use('/manga', isAuthenticated, require('./routes/manga.routes'));
// erros
 require('./error-handling')(app); // importamos e executamos a função já executando ela.

// exportar app
module.exports = app;