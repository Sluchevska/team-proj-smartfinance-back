const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const path = require('path')

const usersRouter = require('./routes/api/users');
const operationsRouter = require('./routes/api/operations');
// const googleRouter = require('./routes/api/google')

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json({extended:}));

app.use('/api/users', usersRouter);
app.use('/api/operations', operationsRouter);
// app.use('/auth', googleRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/link', (req, res) => { 
  res.sendFile(path.join(__dirname, './public/link.html'))
})
app.use('/avatars', express.static(path.join(__dirname, 'avatars'));


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
