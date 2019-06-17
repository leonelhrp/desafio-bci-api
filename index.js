const express = require("express");
const cors = require('cors')
const app = express();
const { PORT } = require("./env");

// Configurar cabeceras y cors
app.use(cors())

require("./routes/api")(app);
require("./routes/views")(app);

function init(){
    console.log("Iniciando instancia de Express...");
    app.listen(PORT, ()=>{
        console.log("El servidor Express esta activo.");
    });
}

init();