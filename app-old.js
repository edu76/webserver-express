//aca creamos el webserver

const http = require('http');

//creamos el servidor que recibe un callback  que a su vex recibe los request(solicitudes) y respuestas que el servidor le va a enviar 
http.createServer((req, res) => {

        // podemos regrear un JSON y que sea un servicio con status 200 
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombres: 'Eduardo José',
            edad: 43,
            url: req.url // est es el lugar que solicita el usuario 

            // si quiere evitar esta sintaxis, hacer un codigo mas pequeño , una peticion post, mostrar contenido estatico http
            //para ello hay un paquete de tercerso llamado "express" 
        }

        res.write(JSON.stringify(salida));
        // res.write('Hola Mundo');
        res.end(); // para indicarle que ya termnamos y que no se quede cargando la pagina 

    })
    //luego configuro puerto donde voy a escuchar 
    .listen(8080);

console.log('Escuchando desde el puerto 8080');