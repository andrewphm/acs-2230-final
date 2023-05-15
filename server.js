const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/category', require('./routes/category'));
app.use('/api/product', require('./routes/product'));
app.use('/api/order', require('./routes/order'));
app.use('/api/user', require('./routes/user'));
app.use('/docs', express.static(path.join(__dirname, 'docs')));

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to My Ecommerce API!</h1>
    <p>Visit the <a href="/docs">documentation</a> for more information.</p>
    <p>Made by <a href="https://github.com/andrewphm">Andrew Pham</a>🫶</p>
  `);
});

require('./config/db-setup');

app.listen(process.env.PORT || 5000, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 5000}`);
  console.log(`http://localhost:${process.env.PORT || 5000}`);
});
