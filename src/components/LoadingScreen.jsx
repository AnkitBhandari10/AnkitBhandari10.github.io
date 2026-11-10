import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Hello";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Update the displayed text for the typewriter effect
      setText(fullText.substring(0, index));
      
      // Increment the index for the next character
      index++;

      // When the entire text has been displayed, clear the interval
      // and schedule onComplete to be called after 1 second.
      if (index > fullText.length) {
        clearInterval(interval);
        
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100); 

    // The cleanup function clears both the interval and timeout.
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
