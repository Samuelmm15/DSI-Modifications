/* eslint-disable new-cap */
import {MongooseOperations} from './mongooseOperations';
import {user} from './models/userModel';

const Samuel = new user({
  name: 'Samuel',
  surnames: 'Martín Morales',
  age: 21,
  email: 'samuelmm80@gmail.com',
  password: 'abcA$45op',
});

const Pepe = new user({
  name: 'Pepe',
  surnames: 'Martín Morales',
  age: 32,
  email: 'Pepemm80@gmail.com',
  password: 'abcA$45op',
});

const PepeMod = new user({
  name: 'Pepe',
  surnames: 'Martín Moral',
  age: 32,
  email: 'Pepemm80@gmail.com',
  password: 'abcA$45op',
});

const newOBJ = new MongooseOperations();

newOBJ.addOperation(Samuel);
newOBJ.addOperation(Pepe);
// newOBJ.deleteOperation(Samuel);
// newOBJ.deleteOperation(Pepe);
newOBJ.patchOperation(PepeMod);
// newOBJ.searchOperation(Samuel);
