const express = require('express');

const {Router} = express;
const router = Router();

const Container = require('./promise');
const productos = new Container('./productos.txt');

// devuelve todos los productos
    router.get('/', (req, res)=>{
        const promesa = new Promise ((resolve, reject)=>{
            const data = productos.getAll();
            resolve(data)
            
        })
        promesa.then((result)=>{
            res.send(result)
        })
        
        })

//devuelve 1 prod según id
    router.get('/:id', (req, res)=>{
    const {id} = req.params;
    new Promise ((resolve, reject)=>{
        const data = productos.getById(id);
        resolve(data)
    }).then((result)=>{
        res.send({producto:result})
    })
    })

//recibe y agrega un producto, y lo devuelve con su id asignado
router.post('/', (req, res)=>{
        const {title, price, thumbnail} = req.body;
        new Promise((resolve, rej)=>{
        let agregar = productos.save({title, price,thumbnail});
        resolve(agregar)
        }).then((result)=>{
            res.send({agregado: result});
        })
    })

//recibe y actualiza un producto según su id
    router.put('/:id', (req, res)=>{
        const {id} = req.params;
        const {title, price, thumbnail} = req.body;
        new Promise((resolve, rej)=>{
            let reemplazoArr = productos.replaceById(id, {title, price, thumbnail})
            resolve(reemplazoArr);
        }).then((result)=>{
            res.send({prodReemplazado: result})
        })
    })

    //elimina 1 prod según su id
    router.delete('/:id', (req, res)=>{
        const {id} = req.params;
        new Promise((resolve, rej)=>{
            let eliminarProd = productos.deleteById(id);
            resolve(eliminarProd);
        }).then(()=> res.send({eliminadoID: id}))
    })

module.exports = router;