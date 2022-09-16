const express = require("express");

const { Router } = express;
const router = Router();

const Container = require("../API/Container");
const contenedor = new Container("products.json");

const completedFields = (req, res, next) => {
    const { title, price, thumbnail } = req.body;
    title && price && thumbnail
      ? next()
      : res.status(300).send({ message: "Debe completar todos los campos" });
  };





router.get("/", async (req, res) => {
    const data = await contenedor.getAll();
    res.status(200).render("products", {products: data});
    
  });
  

  
  router.get("/:id", async (req, res) => {
    const data = await contenedor.getById(req.params.id);
  
   
    data
      ? res.status(200).json(data)
      : res.status(404).json({ error: "Producto no encontrado" });
  });
  

  
  router.post("/", completedFields, async (req, res) => {
    const { title, price, thumbnail } = req.body;
    const data = await contenedor.save({ title, price, thumbnail });
    data == null
      ? res.status(500).json({ message: ` [[${title}]] ya existe en el archivo` })
      : res.status(200).redirect("index");
  });
  

  
  router.put("/:id", completedFields, async (req, res) => {
    const { id } = req.params;
    const newObject = req.body;
    const data = await contenedor.update(+id, newObject);
    
    data != null
      ? res.status(200).json({ message: `Producto ${id} modificado con éxito` })
      : res.status(404).json({ error: "Producto no encontrado" });
  
    
  });
  

  
  router.delete("/:id", async (req, res) => {
    const data = await contenedor.deleteById(req.params.id);
    data
      ? res
          .status(200)
          .send({ message: `Se ha eliminado el producto ${data.title}` })
      : res.status(404).send({ message: "No se ha encontrado el producto" });
  });
  

  module.exports = router