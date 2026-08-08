import { useState } from 'react'
import './App.css'

// custom hook - function thats start with use prefix
function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count => count + 1);
  }

  return {
    count: count, 
    increaseCount: increaseCount
  }
}

function App() {
  const {count, increaseCount} = useCounter();
  return (
    <div>
      <button onClick={increaseCount} >Increase {count}</button>
    </div>
  )
}

export default App
