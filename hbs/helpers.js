const hbs = require('hbs');

// helpers
hbs.registerHelper('getAnio', () => { // nombre del helper seguid de funcion que pue o no recii argumento y que haga return de new date
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => { // nombre del helper seguid de funcion que pue o no recii argumento y que haga return de new date

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});