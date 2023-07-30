const express = require(`express`);
const app = express();
const librosRouter = require(`./routes/libros`); //importamos la ruta de libros
const errorHandler = require(`./middlewares/errorHandler`); //Importamos el error handler

app.use(express.json());
app.use(`/libros`, librosRouter);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
