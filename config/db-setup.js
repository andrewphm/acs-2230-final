const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const mongoURI =
  process.env.NODE_ENV === 'dev'
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/ecommerce-test-db';

(async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Mongoose connected to db');
  } catch (err) {
    console.log(err, 'mongoose error');
  }
})();
