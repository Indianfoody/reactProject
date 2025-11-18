// src/components/HindiJokeGenerator.jsx
import React, { useState } from 'react';
import useHindiFact from '../hooks/useHindiFact';

function HindiJokeGenerator() {
  const [factTrigger, setFactTrigger] = useState(1); // Start at 1 to fetch the first joke
  const { fact, isLoading, error } = useHindiFact(factTrigger); 

  const generateNewFact = () => {
    setFactTrigger(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #0056b3', borderRadius: '8px' }}>
      <h2>😂 हिंदी चुटकुला जनरेटर (Hindi Joke Generator)</h2>

      <button 
        onClick={generateNewFact} 
        disabled={isLoading} 
        style={{ padding: '10px 20px', marginBottom: '20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        {isLoading ? 'लोड हो रहा है...' : 'नया चुटकुला पाएं (Get New Joke)'}
      </button>

      {/* --- Conditional Rendering --- */}
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {fact && !isLoading && (
        <div style={{ marginTop: '20px', backgroundColor: '#f0f8ff', padding: '15px', borderRadius: '4px' }}>
          <p style={{ fontSize: '1.1em' }}>
            **सेटअप (Setup):** {fact.setup}
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '1.3em', color: '#0056b3', marginTop: '10px' }}>
            **पंचलाइन (Punchline):** {fact.punchline}
          </p>
        </div>
      )}
      
      {!fact && !isLoading && !error && (
        <p>बटन दबाएँ और अपना पहला चुटकुला जनरेट करें! (Click the button to generate your first joke!)</p>
      )}
    </div>
  );
}

export default HindiJokeGenerator;