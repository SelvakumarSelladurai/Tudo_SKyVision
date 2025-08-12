import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function FruitList() {
  const [Detail, setDetail] = useState(['Founder : SELVAKUMAR']);
  const [newDetails, setNewDetails] = useState('');

  const addFruit = () => {
    if (newDetails.trim() !== '') {
      setDetail([...Detail, newDetails.trim()]);
      setNewDetails('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Add Member Detail of SKyVision_Technology</h1>

      <ul>
        {Detail.map((Detail, index) => (
          <li key={index}>{Detail}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter Name"
        value={newDetails}
        onChange={(e) => setNewDetails(e.target.value)}
      />
      <button onClick={addFruit}>Add member</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FruitList />);
