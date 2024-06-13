const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

const peopleData = [
  { id: 1, name: 'Bruce Wayne', age: 40, location: 'Brisbane'},
  { id: 2, name: 'Peter Parker', age: 20, location: 'Sydney'},
  { id: 3, name: 'Clarke Kent', age: 30, location: 'Melbourne'}
];

app.get('/people', (req, res) => {
  res.send(peopleData);
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);