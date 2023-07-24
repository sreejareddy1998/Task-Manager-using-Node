const mongoose = require('mongoose');
const connectionString =
  'mongodb+srv://SreejaLearning:12345@nodeexpressprojects.df5dtgh.mongodb.net/TASK-MANAGER';

mongoose
  .connect(connectionString)
  .then(() => console.log('Connected to DB...'))
  .catch((err) => console.log(err));
