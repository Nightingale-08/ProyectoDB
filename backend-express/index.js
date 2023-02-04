/* const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    const read = fs.createReadStream('./src/index.html')    
    read.pipe(res)
})

server.listen(3000)
console.log(`server on port ${3000}`) */

const express = require("express");
const { get } = require("http");
const morgan = require("morgan");
const {Pool} = require("pg");
const path = require("path");


const app = express();

//archivos js
const products = require('./src/Routes/product')
const loginUser = require('./src/Routes/loginUser')
const loginWorker = require('./src/Routes/loginWorker')
const config ={
  user:'postgres',
  host: 'postgres',
  password: '123456',
  database: 'mande_db',
  port: 5432,
  max: 10
};

//manejar base de datos

const pool = new Pool(config)

const getpersonas = async() =>{
  try {
    const respuesta = await pool.query('SELECT * FROM persona');
    console.log(respuesta.rows)
  } catch (error) {
    console.log(error)
  }
  //pool.end() para terminar la ejecucion
}


//configuraciones
app.set('serverName','Mande')
app.set('port', 3001)

//middlewares
app.use(morgan("dev"));
app.use(express.text());
app.use(express.json());

//rutas js
app.use(products)
app.use(loginUser)
app.use(loginWorker)

//routes propias
app.get("/", (req, res) => {
  res.send("Estoy en el Home");
});

app.post("/leyendoUnRequest", (req, res) => {
  console.log(req.body);
  res.send("Hello world");
});

app.get("/probandobasededatos", (req, res) => {
  getpersonas()
  res.send("hola mundo")
});

app.get("/user", (req, res) => {
  res.json({
    name: "sebas",
    age: 40,
  });
});

//confirma si el servidor esta en pie, y manda un status code
app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

//caso de cualquier otra ruta
app.use((req, res) => {
  res.status(404).send("No se encontro la pagina");
});

app.listen(app.get('port'));
console.log(`Server ${app.get('serverName')} on port ${app.get('port')}`);
