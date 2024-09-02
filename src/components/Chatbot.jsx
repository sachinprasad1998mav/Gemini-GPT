import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [inputValue, setInputValue] = useState("");
  const [promptResponses, setPromptResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getResponseForGivenPrompt = async () => {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(inputValue);
      setInputValue("");
      const response = result.response;
      const text = await response.text();
      setPromptResponses([...promptResponses, text]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log("Something Went Wrong");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col h-screen">
          <div className="flex-grow p-4 overflow-y-auto">
            <p className="text-5xl flex justify-center">Sachin GPT</p>
            {promptResponses.map((promptResponse, index) => (
              <div key={index}>
                <div
                  className={`response-text p-2 rounded-lg mb-2 ${
                    index === promptResponses.length - 1
                      ? "fw-bold bg-gray-100 text-gray-700 self-start"
                      : "bg-blue-100 text-blue-700 self-end"
                  }`}
                >
                  {promptResponse}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              getResponseForGivenPrompt();
            }}
            className="p-4 bg-gray-200 flex items-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask Me Something You Want"
              className="flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              type="submit"
              disabled={loading}
              className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Send
            </button>
          </form>

          {loading && (
            <div className="p-4 text-center text-gray-500">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chatbot;
