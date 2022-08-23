const fs = require("fs");
const file = "./products.json";

class Container {
  constructor(file) {
    this.file = file;
  }

  async save(object) {
    const dataToParse = await fs.readFileSync(this.file, "utf-8");
    const dataParsed = JSON.parse(dataToParse);

    const productFound = dataParsed.find(({ title }) => title == object.title);

    try {
      if (productFound) {
       
        console.log("El producto ya existe");
      } else {
   
        object.id = dataParsed.length + 1;
        dataParsed.push(object);
        const updatedFile = JSON.stringify(dataParsed, null, " ");
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
    const dataToParse = await fs.readFileSync(this.file, "utf-8");
    const dataParsed = JSON.parse(dataToParse);

    const idFound = dataParsed.find(({ id }) => id == id);

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

  getAll() {}

  deleteById() {}

  deleteAll() {}
}

const contenedor = new Container(file);

let newObject = {
    title : "Vino Dilema",
    price: 1000,
    img: "https://i.ibb.co/QF8jz0w/dilema.jpg"

};

contenedor.save(newObject);
contenedor.getById(1)