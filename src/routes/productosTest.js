const express = require("express");
const faker = require("faker")

const app = express();
const {
    Router
} = express;
const router = new Router();


//GET
router.get("/", (req, res) => {
    //Genero array vacio, pusheo 5 productos con faker y lo envio
    let arrayPtos = [];

    for (let index = 0; index < 5; index++) {
        arrayPtos.push({
            titulo: faker.commerce.productName(),
            precio: faker.commerce.price(),
            thumbail: faker.image.image()
        })
    }

    res.send(arrayPtos)
});

//EXPORT MODULO ROUTER
module.exports = router;