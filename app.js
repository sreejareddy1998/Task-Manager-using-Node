const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const tasks = require('./static/routes/tasks');
const connectDB = require('./static/db/connect'); // Corrected require statement
require('dotenv').config();

app.use(express.json());
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve('pages/index.html'));
// });

app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Task Manager listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
