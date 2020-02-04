import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);
  const [newValue, setNewTech] = useState('');

  function handleADD() {
    setTech([...tech, newValue]);
    setNewTech('');
  }
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
