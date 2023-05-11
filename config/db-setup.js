const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
    console.log('Mongoose connected to db');
  } catch (err) {
    console.log(err, 'mongoose error');
  }
})();
