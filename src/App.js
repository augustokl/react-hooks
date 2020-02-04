import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newValue, setNewTech] = useState('');

  function handleADD() {
    setTech([...tech, newValue]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTech = JSON.parse(localStorage.getItem('tech'));

    if (storageTech) {
      setTech(storageTech);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newValue} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleADD}>
        Adicionar
      </button>
    </>
  );
}

export default App;
