module.exports = {
    entry: './scripts/index.js', //Punto de entrada de la aplicación.

    output: {
        path: __dirname + '/public', //Ruta de salida para el archivo generado por Webpack.
        filename: 'bundle.js', //Nombre del archivo de salida.
    }
}