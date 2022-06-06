import { useEffect, useRef, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    startTimer();
  }, []);

  const startTimer = () => {
    ref.current = setInterval(() => {
      setCounter((p) => p + 1);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        className="btn"
        onClick={() => {
          clearInterval(ref.current);
        }}
      >
        Stop
      </button>
      <button className="btn" onClick={startTimer}>
        Start
      </button>
      <button
        className="btn"
        onClick={() => {
          clearInterval(ref.current);
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
