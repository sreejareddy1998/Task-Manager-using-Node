const express = require('express');
const app = express();
const path = require('path');
const tasks = require('./static/routes/tasks');
const connectDB = require('./static/db/connect'); // Corrected require statement
require('dotenv').config();
const notFound=require('./static/middleware/not-found');
const errorHandlerMiddleware= require('./static/middleware/error-handler');
// middleware

app.use(express.static('./public/public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
