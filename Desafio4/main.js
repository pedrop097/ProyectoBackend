const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

const productosRouter = require('./productos.js');

app.use(express.json())



app.use('/api/productos', productosRouter);

app.use('/static', express.static(__dirname + "/assets"));

const server = app.listen(8080, ()=>{
    console.log('iniciado')
})
server.on("error", error => console.log('Error en este servidor', error)) 