const generarDoc = (dato, cb) =>{ 
    //generar el documento con el dato
    const result = dato + 'dato procesado'
    cb(result)
}
const procesarDato = (texto) =>{
    const escrito = "el dato se obtuvo fue este =>" + texto
    console.log(escrito)
}
generarDoc("hola comision como esta?",procesarDato)
