 
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/dbConnection');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    // Sync the database schema
    return sequelize.sync();
  })
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
