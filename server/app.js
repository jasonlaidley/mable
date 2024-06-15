const express = require('express');
const app = express();
const port = 5000;

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// People Data
const peopleData = [
  { id: '1', name: 'Bruce Wayne', age: 40, location: 'Brisbane'},
  { id: '2', name: 'Peter Parker', age: 20, location: 'Sydney'},
  { id: '3', name: 'Clarke Kent', age: 30, location: 'Melbourne'},
  { id: '4', name: 'Tony Stark', age: 50, location: 'Perth'},
  { id: '5', name: 'Steve Rogers', age: 100, location: 'Adelaide'},
  { id: '6', name: 'Natasha Romanoff', age: 35, location: 'Canberra'},
  { id: '7', name: 'Wanda Maximoff', age: 25, location: 'Darwin'},
  { id: '8', name: 'Vision', age: 30, location: 'Hobart'},
  { id: '9', name: 'Scott Lang', age: 45, location: 'Gold Coast'},
  { id: '10', name: 'Hope van Dyne', age: 35, location: 'Sunshine Coast'}
];

// API route
app.get('/people', (req, res) => {
  res.send(peopleData);
});

// Start server
app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);