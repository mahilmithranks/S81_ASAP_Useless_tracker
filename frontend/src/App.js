import React, { useEffect, useState } from 'react';

function App() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/entities')
      .then(response => response.json())
      .then(data => setEntities(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Entities</h1>
      <ul>
        {entities.map(entity => (
          <li key={entity.id}>{entity.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
