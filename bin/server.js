const mongoose = require('mongoose')
const app = require('../app')
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

const { DB_HOST, PORT = 3000 } = process.env

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT)
    console.log(`Server running. Use our API on port: ${PORT}`)
    console.log('Database connection successful')
    // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
  )
  .catch((error) => {
    console.log(error.message)
    process.exit(1)
  })