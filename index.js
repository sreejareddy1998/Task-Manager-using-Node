const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const tasks = require('./routes/tasks');
// app.use(express.static('static'));
app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
