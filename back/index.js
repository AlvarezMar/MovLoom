//Punto de entrada (entry point) de la aplicacion.

const app = require('./src/server') //Importando el módulo app (instancia de Express) desde el archivo server.js.
const dbCon = require('./src/config/dbCon');


dbCon().then((res) => {
    
    //Se inicia el servidor Express en el puerto 3000. La función callback se ejecuta cuando el servidor esta listo para aceptar conexiones entrantes.
    app.listen(3000, () => {
        console.log("Servidor escuchando en el puerto 3000.");
    })

}).catch((err) => {
    console.log('Error al conectar a la base de datos.');
})