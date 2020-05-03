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
