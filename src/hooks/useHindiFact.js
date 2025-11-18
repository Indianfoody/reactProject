// src/hooks/useHindiFact.js (Example using a placeholder URL)
import { useState, useEffect } from 'react';
import axios from 'axios';

// ⚠️ Replace this with a working Hindi Joke API URL if you find one!
// This URL will just return a placeholder for demonstration purposes.
const HINDI_FACT_URL = 'https://hindi-api-example.com/random_fact'; 

const useHindiFact = (trigger) => {
  const [fact, setFact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewFact() {
      setIsLoading(true);
      setError(null);
      
      try {
        // --- Placeholder Data Fetching ---
        // Replace this entire block with the real Axios call
        // const response = await axios.get(HINDI_FACT_URL);
        // setFact(response.data);
        
        // --- Temporary Placeholder Logic for Hindi Data ---
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
        const placeholderFacts = [
          { setup: "एक टीचर ने बच्चों से पूछा...", punchline: "आठ, क्योंकि दो पहले से ही थे।" },
          { setup: "मरीज: डॉक्टर, मुझे अपनी याददाश्त वापस चाहिए।", punchline: "डॉक्टर: इसके लिए तुम्हें 5000 रुपये देने होंगे। " },
          { setup: "पति: तुम मेरी हर बात का उल्टा क्यों करती हो?", punchline: "पत्नी: नहीं करती!" }
        ];
        const randomFact = placeholderFacts[Math.floor(Math.random() * placeholderFacts.length)];
        setFact(randomFact);
        // --- End Temporary Placeholder Logic ---
        
      } catch (err) {
        console.error("Fetch error: ", err);
        setError("डेटा लाने में विफल रहा। कृपया पुनः प्रयास करें।"); // Failed to fetch data. Please try again.
      } finally {
        setIsLoading(false);
      }
    }

    if (trigger !== 0) { // Fetch only after the first click
        fetchNewFact();
    }
  }, [trigger]); 

  return { fact, isLoading, error };
};

export default useHindiFact;