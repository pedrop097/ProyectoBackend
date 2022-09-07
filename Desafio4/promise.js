const fs = require("fs");


class Container {
  constructor(file) {
    this.file = file;
  }

  async save(object) {
    let data = await fs.readFileSync(this.file, "utf-8");
    let analictData = JSON.parse(data);

    const productFound = analictData.find(({ title }) => title == object.title);

    try {
      if (productFound) {
       
        console.log("El producto ya existe");
      } else {
   
        object.id = analictData.length + 1;
        analictData.push(object);
        const updatedFile = JSON.stringify(analictData, null, " ");
        fs.writeFileSync(this.file, updatedFile);
      
        console.log(
          `Se ha agregado el siguiente producto: ${object.title} con el id ${object.id}`
        );
        return object.id;
      }
    } catch (error) {
      console.log(`Se produjo un error ${error}`);
    }
  }

  async getById(id) {
    let data = await fs.readFileSync(this.file, "utf-8");
    let analictData = JSON.parse(data);

    let idFound = analictData.find(({ id }) => id == id);

    try {
      if (idFound) {
        return idFound
      } else {
        null
      }
    } catch (error) {
      console.error(`Se produjo un error en getByID: ${error}`)
    }
  }

  async getAll() {
    let data = await fs.readFileSync(this.file, "utf-8");
    let analictData = JSON.parse(data);
    try {
        if (analictData.length > 0) {
          console.log(analictData);
          return analictData;
        } else {
          console.log("No hay productos disponibles");
        }
      } catch (error) {
        console.error(`Se ha producido un error: ${error}`);
      }


  }

  async deleteById(idDelete) {
    const data = await fs.readFileSync(this.file, "utf-8");
    const analictData = JSON.parse(dataToParse);

    const idfilter = analictData.filter(({ id }) => id !== idDelete);
 
    const idFound = analictData.find(({ id }) => id === idDelete);

    try {
      if (idFound) {
        console.log(
          `Se ha eliminado el objeto con id:${idDelete} >> [[${idFound.title}]]`
        );
    
        const updatedFile = JSON.stringify(idfilter, null, " ");
        fs.writeFileSync(this.file, updatedFile);
      } else {
        console.log(`No se ha encontrado el objeto con id: ${idDelete}`);
      }
    } catch (error) {
      console.error(`Se ha producido un error en deleteById: ${error}`);
    }
    
  }

  async deleteAll() {
    try {
        console.log("Todos los productos fueron eliminados");

        await fs.writeFileSync(this.file, "[]");
      } catch (error) {
        console.error(`Se ha producido un error en deleteAll: ${error}`);
      }
    }
  }

  module.exports = Container;

   