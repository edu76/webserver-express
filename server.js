// constantes ya que no se van a modificar 
const express = require('express'); // del paquete que se encuentra en los modulos de node
const app = express(); //declara una variable llamada app que es producto de la funcion de express y permite usar express como deseamos

const hbs = require('hbs');
require('./hbs/helpers'); // defino la imortacion del archivo de helpers para poder usarlo

// heroku puede usar cualquier puerto y para obtenerlo lo hacemos con :
const port = process.env.PORT || 3000; // este objeto localmente no va a existir entonces si no existe le asigno 3000


app.use(express.static(__dirname + '/public'));

// Express HBS engine
// aca abajo le decimos a handlebars que ya tiene un directorio que va a contener todos mis parciales 
hbs.registerPartials(__dirname + '/views/parciales'); //con dirname no importa cual path tengas, toma esa variabale y concatena toda esa ruta 
app.set('view engine', 'hbs'); // al usar un template engine como el de aca, podemos renderiza esta pagina completamaente 


app.get('/', (req, res) => { // configuramos una solicitud get que indica que tdas las peticiones que entren por la pleca slash (/) van a ejecutar el callback aca indicado 


    res.render('home', {
        nombre: 'Eduardo',
        // anio: new Date().getFullYear() // asi genero el año de forma dinámica 
    });

});

app.get('/about', (req, res) => { // configuramos una solicitud get que indica que tdas las peticiones que entren por la pleca slash (/) van a ejecutar el callback aca indicado 


    res.render('about', {
        // anio: new Date().getFullYear() // asi genero el año de forma dinámica 
    });

});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port}`); // este console.log se activa cuando el app.listen se levante  
});