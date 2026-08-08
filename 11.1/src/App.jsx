import { useState } from 'react';
import './App.css';
import { usePrev } from './hooks/userPrev';
import { useRef } from 'react';

// custom hook - function thats start with use prefix

function useDebounce(originalFn) {
  const currentClock = useRef();
  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, 200);
  }

  return fn; 
}


function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  function sendDataToBackend() {
    fetch("api.amazon.com/search/")
  }

  const debouncedFn = useDebounce(sendDataToBackend);


  return (
    <div>
      <p>{state}</p>
      <button onClick={() => {
        setState((curr) => curr + 1);
      }}>
        Click me
      </button>
      <p>the previous value was {prev}</p>
      <input type='text' onChange={debouncedFn} ></input>
    </div>
  )

}

export default App
