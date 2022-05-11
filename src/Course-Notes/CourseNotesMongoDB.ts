// import {MongoClient} from 'mongodb';

// const dbURL = 'mongodb://localhost:27017';
// const dbName = 'notes-app';

// MongoClient.connect(dbURL, { // Esto sirve para poder establecer cualquier tipo de conexión con la base de datos alojada en mongodb.
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);
//   console.log(db.databaseName);
// }).catch((error) => {
//   console.log(`Unable to connect to database: ${error.message}`);
//   console.log(error);
// });

// import {MongoClient} from 'mongodb'; // Esto se encarga de introducir ciertos valores

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').insertOne({ // Se introduce una interfaz en forma de json a la nueva base de datos creada
//     title: 'Red note',
//     body: 'This is a red note',
//     color: 'red',
//   });
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// import {MongoClient} from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').insertOne({
//     title: 'Red note',
//     body: 'This is a red note',
//     color: 'red',
//   });
// }).then((result) => {
//   console.log(result.insertedCount); // En este punto en vez de mostrar por pantalla el objeto introducido
// }).catch((error) => { // se muestra el número de elementos que se encuentran dentro de la propia base de datos
//   console.log(error);
// });

// import {MongoClient} from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').insertMany([ // Este tipo de método se encarga de insertar varios elementos a la base de datos
//     {
//       title: 'Yellow note', // Como se puede observar, varios elementos, en este caso interfaces a modo de ficheros de tipo json, son insertados dentro de la base de datos
//       body: 'This is a yellow note',
//       color: 'yellow',
//     },
//     {
//       title: 'Magenta note',
//       body: 'This is a magenta note',
//       color: 'magenta',
//     },
//   ]);
// }).then((result) => {
//   console.log(result.insertedCount);
// }).catch((error) => {
//   console.log(error);
// });

// import {MongoClient, ObjectID} from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').findOne({ // Haciendo uso de este método, se buscan los distintos elementos dentro de la base
//     _id: new ObjectID('627c3607b68c8a295417932f'), // de datos según el propio identificador del elemento.
//   });
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// import {MongoClient} from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').find({ // Como se puede ver, de esta manera no se buscan los distintos
//     title: 'Red note', // elementos dentro de la base de datos, haciendo uso del identificador propio de una nota en concreto, sino de caracteristicas en común
//   }).toArray();
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// import {MongoClient} from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').find({
//     title: 'Red note',
//   }).count(); // De esta manera se establece el número de coincidencias que existen dentro de la propia base de datos.
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// import {MongoClient, ObjectID} from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

// interface NoteInterface {
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').updateOne({ // De esta manera se puede actualizar los valores en concreto de un elemento
//     _id: new ObjectID('627c3607b68c8a295417932f'), // en concreto, pero, hay que tener en cuenta que se hace uso del identificador propio del elemento
//   }, {
//     $set: {
//       title: 'Green note',
//       body: 'This is a green note',
//       color: 'green',
//     },
//   });
// }).then((result) => {
//   console.log(result.modifiedCount);
// }).catch((error) => {
//   console.log(error);
// });

/**
 * De la misma manera que se puede observar anteriormente, se puede hacer uso de
 * updateMany, que se encarga de actualizar a muchos elementos que posean características
 * similares.
 */

// import {MongoClient} from 'mongodb';

// const dbURL = 'mongodb://127.0.0.1:27017';
// const dbName = 'notes-app';

//  interface NoteInterface {
//    title: string,
//    body: string,
//    color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
//  }

// MongoClient.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then((client) => {
//   const db = client.db(dbName);

//   return db.collection<NoteInterface>('notes').deleteOne({ // De esta manera se elimina una nota en concreto
//     title: 'Red note',
//   });
// }).then((result) => {
//   console.log(result.deletedCount);
// }).catch((error) => {
//   console.log(error);
// });

/**
 * Hay que tener en cuenta que para eliminar muchos elementos
 * que sigan una misma estructura en común, se hace uso del método `deleteMany()`
 */
