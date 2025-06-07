import React from 'react'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'green' }}>EngageNatural - TEST VERSION</h1>
      <p>If you can see this, React is working!</p>
      <button style={{ 
        backgroundColor: 'green', 
        color: 'white', 
        padding: '10px 20px', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Test Button
      </button>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>Debug Info:</h2>
        <p>React is mounted and working correctly!</p>
        <p>Date: {new Date().toLocaleString()}</p>
      </div>
    </div>
  )
}

export default App

