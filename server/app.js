const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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