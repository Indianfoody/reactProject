// src/components/JokeGenerator.jsx
import React, { useState } from 'react';
import useJokeGenerator from '../hooks/useJokeGenerator';

function JokeGenerator() {
  // State to force the API call to re-run
  const [jokeTrigger, setJokeTrigger] = useState(0); 

  // Call the custom hook, passing the trigger state
  const { joke, isLoading, error } = useJokeGenerator(jokeTrigger); 

  // Function to update the trigger state, which triggers a re-fetch
  const generateNewJoke = () => {
    setJokeTrigger(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      ## 😂 Random Joke Generator

      <button 
        onClick={generateNewJoke} 
        disabled={isLoading} 
        style={{ padding: '10px 20px', marginBottom: '20px' }}
      >
        {isLoading ? 'Loading...' : 'Get a New Joke'}
      </button>

      {/* --- Conditional Rendering --- */}
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {joke && !isLoading && (
        <div style={{ marginTop: '20px' }}>
          <p>
            **Setup:** {joke.setup}
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#007bff' }}>
            **Punchline:** {joke.punchline}
          </p>
        </div>
      )}
      
      {!joke && !isLoading && !error && (
        <p>Click the button to generate your first laugh!</p>
      )}
    </div>
  );
}

export default JokeGenerator;