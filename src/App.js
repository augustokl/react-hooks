import React, { useState, useEffect, useMemo } from 'react';

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

  const techSize = useMemo(() => tech.length, [tech]);

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
      <br />
      <br />
      <span>Total de tecnologias: {techSize} </span>
    </>
  );
}

export default App;
