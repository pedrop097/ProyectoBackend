const express = require('express')

const Contenedor = require('./contenedor')

const products = new Contenedor('./productos.txt');




const app = express()

//devuelve un array con todos los productos
app.get("/productos", async (req, res) => {
    const data = await products.getAll();
    res.send(data);
  });

    
//devuelve un producto al azar
app.get('/productoRandom', (req, res)=>{
    const promesa = new Promise ((resolve, reject)=>{
        const allProducts = products.getAll();
        resolve(allProducts)
    })
    promesa.then((result)=>{
        let numId = Math.round(Math.random() * result.length +1);
        new Promise ((resolve, reject)=>{
            let searchProd = products.getById(numId)
            resolve(searchProd)
        }).then((result)=>{
            res.send(result)
        })
        
        
        })  
  })

    const server = app.listen(8080, ()=>{
        console.log('servidor de express iniciado')
    })