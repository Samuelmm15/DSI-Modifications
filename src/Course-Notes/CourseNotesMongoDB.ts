import {MongoClient} from 'mongodb';

const dbURL = 'mongodb://127.0.0.1:27017';
const dbName = 'notes-app';

MongoClient.connect(dbURL, { // Esto sirve para poder establecer cualquier tipo de conexión con la base de datos alojada en mongodb.
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);
  console.log(db.databaseName);
}).catch((error) => {
  console.log(`Unable to connect to database: ${error.message}`);
});
