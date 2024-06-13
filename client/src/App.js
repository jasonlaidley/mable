import './App.css';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/people')
      .then(response => setData(response.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.name}</p>
          </div>
        ))}
        <Button variant="contained">Hello world</Button>
      </header>
    </div>
  );
}

export default App;
