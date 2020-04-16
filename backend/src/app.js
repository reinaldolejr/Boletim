const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const app = express();

app.use(cors());
app.use(express.json());
app.use('/reportCard', require('./routes/reportCard'));
app.use('/student', require('./routes/student'));

app.use(errors());


module.exports = app;
/**
 * Tipos de parâmetros:
 *
 * Query: Parâmetros nomeados e enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Paâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*')
 */

