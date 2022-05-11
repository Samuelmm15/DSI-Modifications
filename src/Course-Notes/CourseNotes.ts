// import {request} from 'http';
// const url = 'http://api.weatherstack.com/current?access_key=c9acfa44b6msh727dbaab37ed928p1cb290jsn684c446f2abd&query=28.48,-16.31&units=m';

// const req = request(url, (response) => {
//   let data = '';
//   response.on('data', (chunk) => {
//     data += chunk;
//   });

//   response.on('end', () => {
//     const body = JSON.parse(data);
//     console.log(body);
//   });
// });

// req.on('error', (error) => {
//   console.log(error.message);
// });

// req.end();

// import request from "request"; // La librería se tiene que importar de esta manera

// const url = 'http://api.weatherstack.com/current?access_key=c9acfa44b6msh727dbaab37ed928p1cb290jsn684c446f2abd&query=28.48,-16.31&units=m';


// request({url: url, json: true}, (error, response) => { // Lo primero son opciones de configuración de la solicitud
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response.body);
//   }
// });


// import request from "request";

// const location = process.argv[2]; // De la manera como se puede observar en la derecha es como se pone los parámetros en variables para usarlas sobre la ruta.

// const url = `http://api.weatherstack.com/current?access_key=c9acfa44b6msh727dbaab37ed928p1cb290jsn684c446f2abd&query=${location}&units=m`;

// request({url: url, json: true}, (error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response.body);
//   }
// });

// MANEJANDO DE MEJOR MANERA LOS ERRORES

// import request from "request";

// const location = process.argv[2];

// const url = `http://api.weatherstack.com/current?access_key=c9acfa44b6msh727dbaab37ed928p1cb290jsn684c446f2abd&query=${location}&units=m`;

// request({url: url, json: true}, (error, response) => {
//   if (error) {
//     console.log(`Weatherstack API is not available: ${error.message}`);
//   } else if (response.body.error) {
//     console.log(`Weatherstack API error: ${response.body.error.type}`); // Necesario para indicar el tipo de error del cuerpo del mensaje que se produce
//   } else {
//     console.log(response.body);
//   }
// });


// Ejemplo de uso del método callbakc
// import request from "request";

// function weatherInfo1(location: string) {
//   const url = `http://api.weatherstack.com/current?access_key=c9acfa44b6msh727dbaab37ed928p1cb290jsn684c446f2abd&query=${encodeURIComponent(location)}&units=m`;

//   request({url: url, json: true}, (error, response) => {
//     if (error) {
//       console.log(`Weatherstack API is not available: ${error.message}`);
//     } else if (response.body.error) {
//       console.log(`Weatherstack API error: ${response.body.error.type}`);
//     } else {
//       console.log(response.body);
//     }
//   });
// };

// weatherInfo1(process.argv[2]);


// EN OTRO FICHERO DONDE SE VA A EJECUTAR DE MANERA INDEPENDIENTE LO SIGUIENTE:
// const weatherInfo = (location: string, callback: (
//   err: string | undefined, data: request.Response | undefined) => void) => {
//   const url = `http://api.weatherstack.com/current?access_key=c9acfa44b6msh727dbaab37ed928p1cb290jsn684c446f2abd&query=${encodeURIComponent(location)}&units=m`;

//   request({url: url, json: true}, (error, response) => {
//     if (error) {
//       callback(`Weatherstack API is not available: ${error.message}`,
//           undefined);
//     } else if (response.body.error) {
//       callback(`Weatherstack API error: ${response.body.error.type}`,
//           undefined);
//     } else {
//       callback(undefined, response);
//     }
//   });
// };

// weatherInfo(process.argv[2], (err, data) => {
//   if (err) {
//     console.log(err);
//   } else if (data) {
//     console.log(data.body);
//   }
// });

/**
 * Funciona de manera similar a la que se usó en P11 de la asignatura, pero hay que tener en cuenta que se tiene
 * que declarar la función o el método con ese callback para que cuando acceda a cierta zona de código se mande ese
 * mensaje de tipo callback y los test puedan cogerlos para poder obtener en resultado y comprobar si es correcto.
 */
