import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../Ai/foodai.css";
// import ai from "../../assets/ai.png";

const AiwithText = () => {
  // Initialize Google Generative AI with API key
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAwjprrVaO4RlkRQWm_7OwUMX-zMTx8AyI"
    // import.meta.env.VITE_AI_KEY // Uncomment for Vite environment key usage
  );

  // State variables for input, AI response, and loading state
  const [search, setSearch] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to call Generative AI and fetch recipe suggestions
  async function aiRun() {
    setLoading(true); // Set loading state
    setResponse(""); // Clear previous response
    console.log(aiResponse);
    

    // Get the Generative AI model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Define the prompt for AI generation
    const prompt = `Create a personalized tour itinerary for  ${search}. The itinerary should include day-by-day stop suggestions, covering must-see attractions, recommended activities, and historical landmarks. For each stop, provide detailed information on nearby hotels, services, and estimated costs, including accommodation, entry fees (if applicable), and other expenses. The itinerary should be tailored to maximize the travel experience, offering a seamless journey through the destination with all necessary logistics and budget considerations included`;

    // Generate content using the AI model
    const result = await model.generateContent(prompt);
    
    
    const response = await result.response;
    const text = await response.text();

    // Set AI response and turn off loading state
    setResponse(text);
   
    
    setLoading(false);
  }

  // Handler for input change
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handler for button click to trigger AI search
  const handleClick = () => {
    aiRun();
  };

  // Function to format the AI response for display
  const formatResponse = (response) => {
    // Remove ** from the response text
    const cleanResponse = response.replace(/\**\*/g, "");
    const lines = cleanResponse
      .split("\n")
      .filter((line) => line.trim() !== "");
    return lines.map((line, index) => {
      if (index === 0) {
        return (
          <h2 key={index} className="main-title">
            {line}
          </h2>
        );
      } else if (line.endsWith(":")) {
        return <h3 key={index}>{line}</h3>;
      } else if (line.startsWith("-")) {
        return <li key={index}>{line.substring(1).trim()}</li>;
      } else if (line.match(/^\d+\./)) {
        return <li key={index}>{line}</li>;
      } else {
        return <li key={index}>{line}</li>;
      }
    });
  };

  // Ensure scrolling to the top on component mount
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="guide_container">
      {/* AI title and description */}
      <div className="ai_title">
        <div className="ai_title_div">
          <h1>
            <span>AI</span>-Powered Smart Tour Guide
          </h1>{" "}
          {/* <img src={ai} alt="" /> */}
        </div>
        <p>Enter a destination to generate a personalized tour experience.</p>
        <p>
          Discover tailored tour recommendations with our AI-powered smart guide. Simply input a destination or point of interest, and receive detailed itineraries complete with must-see spots, historical insights, and travel tips. Explore the world with ease and make the most out of every journey!
        </p>
      </div>

      {/* Search bar */}
      <div className="guide_search-bar">
        <input
          className="guide_search-input"
          placeholder="Search Tour with Smart Tour Guide using Generative AI"
          onChange={handleChangeSearch}
        />
        <button className="guide_search-button" onClick={handleClick}>
          Search
        </button>
      </div>

      {/* Loading indicator and AI response display */}
      {loading && !aiResponse ? (
        <p className="loading-text">Loading ...</p>
      ) : (
        <div className="response-container">
          <div className="response-text">{formatResponse(aiResponse)}</div>
        </div>
      )}
    </div>
  );
};

export default AiwithText;
