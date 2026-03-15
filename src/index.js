const express = require('express');
const app = express();
const productosRouter = require('./routes/productos');

app.use(express.json());
app.use('/api/productos', productosRouter);

app.listen(3000, ()=> console.log('API en http://localhost:3000'));