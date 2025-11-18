// src/hooks/useJokeGenerator.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const JOKE_API_URL = 'https://official-joke-api.appspot.com/random_joke';

const useJokeGenerator = (trigger) => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewJoke() {
      setIsLoading(true);
      setError(null);
      
      try {
        // Send the GET request
        const response = await axios.get(JOKE_API_URL);
        
        // The response.data will look like:
        // { type: 'general', setup: '...', punchline: '...' }
        setJoke(response.data); 
        
      } catch (err) {
        console.error("Joke fetch error: ", err);
        setError("Failed to fetch joke. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchNewJoke();
    // 💡 Dependency Array: The effect runs whenever the 'trigger' value changes
  }, [trigger]); 

  // The component using this hook will use 'trigger' to request a new joke
  return { joke, isLoading, error };
};

export default useJokeGenerator;