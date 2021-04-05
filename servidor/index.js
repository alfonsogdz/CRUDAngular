const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');


//creamos el servidor
const app = express();

//conectamos a la bd
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));



app.listen(4000, ()=>[
    console.log("El servidor esta corriendo perfectamente")
]);