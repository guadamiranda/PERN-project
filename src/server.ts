import express from "express";
import router from "./router";
import db from "./config/db";

var colors = require('colors/safe');

async function connectDB() {
    try{
        await db.authenticate()
        db.sync()
        console.log(colors.rainbow('Conectado a la base de datos'))
    } catch (error) {
        console.log(error);
        console.log(colors.red('Hubo un error al conectar a la base de datos :('))
    }
}

connectDB()

//Instancia de Express
const server = express();

//Leer datos de formularios
server.use(express.json())

server.use('/api/products', router);

export default server;