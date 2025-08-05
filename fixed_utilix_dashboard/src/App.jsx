import React from 'react';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Utilix Dashboard</h1>
      <p>Welcome to the UTX Staking Portal</p>
      <a href="https://raydium.io/swap/?input=sol&output=2gCF26yxnBGCBjfHEa1A2j76weG1cG1YhWSXnxbc8PVK" target="_blank" rel="noopener noreferrer">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Buy on Raydium
        </button>
      </a>
    </div>
  );
}