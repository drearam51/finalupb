const express = require('express'),
  path = require('path'), // add path module,
  app = express(),
  mysql = require('mysql'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tomas0523*',
    database: 'Bizarre'
  })

// use the modules
app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true})) // parsing incoming
app.use(express.json());

// routers
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');
app.use('/users', usersRouter);
// app.use('/product', productRouter);

app.use('/views', express.static('views'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/images', express.static('images'));

app.get('/', function(req, res){
    res.sendFile('index.html',
    {
        root: __dirname
    });
});

app.get('/listado', function(req, res){
    res.sendFile('views/listado.html',
    {
        root: __dirname
    });
});

app.get('/registro', function(req, res){
    res.sendFile('views/registro.html',
    {
        root: __dirname
    });
});

app.listen(port, function(){
    console.log(`Ya esta funcionando el servidor puerto ${port}`);
});