<<<<<<< HEAD
const getAllTasks = (req, res) => {
    res.send(' Get All Items');
  };
  const createTask = (req, res) => {
    res.send('create Task');
  };
  const getTask = (req, res) => {
    res.send('get single Task');
  };
  const updateTask = (req, res) => {
    res.send('update Task');
  };
  const deleteTask = (req, res) => {
    res.send('delete Task');
  };

  module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
=======
const getAllTasks = (req, res) => {
  res.send(' Get All Items');
};
const createTask = (req, res) => {
  res.send('create Task');
};
const getTask = (req, res) => {
  res.send('get single Task');
};
const updateTask = (req, res) => {
  res.send('update Task');
};
const deleteTask = (req, res) => {
  res.send('delete Task');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
>>>>>>> 5adb36f6f7964dc04d8d29cc29785461d2e45feb
