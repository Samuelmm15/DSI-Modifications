// import {connect} from 'mongoose';

// connect('mongodb://127.0.0.1:27017/notes-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).then(() => {
//   console.log('Connected to the database');
// }).catch(() => {
//   console.log('Something went wrong when conecting to the database');
// });

// import {Document, connect, model, Schema} from 'mongoose';

// connect('mongodb://127.0.0.1:27017/notes-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).then(() => {
//   console.log('Connected to the database');
// }).catch(() => {
//   console.log('Something went wrong when conecting to the database');
// });

// interface NoteDocumentInterface extends Document { // Document permite definir la estructura de las interfaces, para este caso, define la estructura de las notas
//   title: string,
//   body: string,
//   color: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// const NoteSchema = new Schema<NoteDocumentInterface>({ // El schema permite establecer el tipo de datos de cada uno de los campos de los distintos elementos de la nota
//   title: {
//     type: String,
//   },
//   body: {
//     type: String,
//   },
//   color: {
//     type: String,
//   },
// });

// const Note = model<NoteDocumentInterface>('Note', NoteSchema); // El modelo indica literalmente que se trata del modelo de objetos que debe de ser usado para cada objeto que
// // haga uso del objeto que este definido mediante el modelo que ha sido especificado anteriormente

// const note = new Note({
//   title: 'Red note',
//   body: 'This is a red note',
//   color: 'black',
// });

// note.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// import {Document, connect, model, Schema} from 'mongoose';

// connect('mongodb://127.0.0.1:27017/notes-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).then(() => {
//   console.log('Connected to the database');
// }).catch(() => {
//   console.log('Something went wrong when conecting to the database');
// });

// interface NoteDocumentInterface extends Document {
//   title: string,
//   body: string,
//   color?: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// const NoteSchema = new Schema<NoteDocumentInterface>({
//   title: {
//     type: String,
//     required: true, // Con esta propiedad se especifica que un campo concreto del schema es obligatorio para que sea creado
//   }, // cada vez que se genere un objeto con dicho schema
//   body: {
//     type: String,
//     required: true,
//   },
//   color: {
//     type: String,
//   },
// });

// const Note = model<NoteDocumentInterface>('Note', NoteSchema);

// const note = new Note({
//   title: 'Blue note',
// });

// note.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// import {Document, connect, model, Schema} from 'mongoose';

// connect('mongodb://127.0.0.1:27017/notes-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).then(() => {
//   console.log('Connected to the database');
// }).catch(() => {
//   console.log('Something went wrong when conecting to the database');
// });

// interface NoteDocumentInterface extends Document {
//   title: string,
//   body: string,
//   color?: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// const NoteSchema = new Schema<NoteDocumentInterface>({
//   title: {
//     type: String,
//     required: true,
//   },
//   body: {
//     type: String,
//     required: true,
//   },
//   color: {
//     type: String,
//     default: 'yellow', // De esta manera se establece que una de las opciones es por defecto de cierta manera
//   },
// });

// const Note = model<NoteDocumentInterface>('Note', NoteSchema);

// const note = new Note({
//   title: 'Yellow note',
//   body: 'This is a yellow note',
// });

// note.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// import {Document, connect, model, Schema} from 'mongoose';

// connect('mongodb://127.0.0.1:27017/notes-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).then(() => {
//   console.log('Connected to the database');
// }).catch(() => {
//   console.log('Something went wrong when conecting to the database');
// });

// interface NoteDocumentInterface extends Document {
//   title: string,
//   body: string,
//   color?: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// const NoteSchema = new Schema<NoteDocumentInterface>({
//   title: {
//     type: String,
//     required: true,
//     validate: (value: string) => {
//       if (!value.match(/^[A-Z]/)) { // Se hace uso de comprobaciones para ciertos campos para poder comprobar si los datos introducidos han sido introducidos
//         throw new Error('Note title must start with a capital letter'); // de manera correcta, para ello se hace uso de una expresión regular, permitiendo comprobar si
//       } // dicho dato ha sido introducido de manera correcta.
//     },
//   },
//   body: {
//     type: String,
//     required: true,
//   },
//   color: {
//     type: String,
//     default: 'yellow',
//     enum: ['blue', 'green', 'red', 'yellow', 'magenta'],
//   },
// });

// const Note = model<NoteDocumentInterface>('Note', NoteSchema);

// const note = new Note({
//   title: 'green note',
//   body: 'This is a green note',
//   color: 'green',
// });

// note.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// import {Document, connect, model, Schema} from 'mongoose';
// import validator from 'validator';

// connect('mongodb://127.0.0.1:27017/notes-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).then(() => {
//   console.log('Connected to the database');
// }).catch(() => {
//   console.log('Something went wrong when conecting to the database');
// });

// interface NoteDocumentInterface extends Document {
//   title: string,
//   body: string,
//   color?: 'blue' | 'green' | 'red' | 'yellow' | 'magenta'
// }

// const NoteSchema = new Schema<NoteDocumentInterface>({
//   title: {
//     type: String,
//     required: true,
//     validate: (value: string) => {
//       if (!value.match(/^[A-Z]/)) {
//         throw new Error('Note title must start with a capital letter');
//       } else if (!validator.isAlphanumeric(value)) { // De esta manera se puede comprobar si un determinado valor se trata de un tipo de valor concreto
//         throw new Error('Note title must contain alphanumeric characters only'); // Todo esto gracias al validator
//       }
//     },
//   },
//   body: {
//     type: String,
//     required: true,
//   },
//   color: {
//     type: String,
//     default: 'yellow',
//     enum: ['blue', 'green', 'red', 'yellow', 'magenta'],
//   },
// });

// const Note = model<NoteDocumentInterface>('Note', NoteSchema);

// const note = new Note({
//   title: 'Green note 2',
//   body: 'This is a green note',
//   color: 'green',
// });

// note.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });


