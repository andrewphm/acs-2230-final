const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

require('./config/db-setup');

app.listen(process.env.PORT || 5000, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 5000}`);
  console.log(`http://localhost:${process.env.PORT || 5000}`);
});
