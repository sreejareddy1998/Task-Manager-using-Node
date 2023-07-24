<<<<<<< HEAD
const mongoose = require('mongoose');

const connectDB =(url)=>{
   return mongoose.connect(url)
}
module.exports=connectDB;
=======
const mongoose = require('mongoose');
const connectionString =
  'mongodb+srv://SreejaLearning:12345@nodeexpressprojects.df5dtgh.mongodb.net/TASK-MANAGER';

mongoose
  .connect(connectionString)
  .then(() => console.log('Connected to DB...'))
  .catch((err) => console.log(err));
>>>>>>> 5adb36f6f7964dc04d8d29cc29785461d2e45feb
