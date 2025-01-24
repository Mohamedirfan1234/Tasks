import React, { useRef, useState } from "react";
import "./App.css"; 

function App() {
  const inputRef = useRef(null);
  const timerIdRef = useRef(null); 
  const [timer, setTimer] = useState(10); 
  const [isRunning, setIsRunning] = useState(false); 

  const focusTextBox = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerIdRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(timerIdRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(10);
  };

  return (
    <div className="App">
      <h1>Magical Timer and Input Box</h1>

      {/* Text Box Section */}
      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
        autoFocus
      />
      <button onClick={focusTextBox}>Focus Box</button>

      {/* Timer Section */}
      <div className="timer">
        <h2>
          {timer === 0 ? (
            <span style={{ color: "red", fontWeight: "bold" }}>Time's Up!</span>
          ) : (
            `Time Left: ${timer}s`
          )}
        </h2>
        <button onClick={startTimer} disabled={isRunning}>
          Start Timer
        </button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
      </div>
    </div>
  );
}

export default App;

