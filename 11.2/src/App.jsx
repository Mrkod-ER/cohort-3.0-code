import { useState } from "react"



function App() {
  return (
    <>
    <Counter/>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  return <div>
    {count}
    <Increase setCount={setCount} />
    <Decrease setCount={setCount} />
  </div>
}

function Increase({setCount}) {
  function increase() {
    setCount(count => count + 1)
  }
  return <div>
    <button onClick={increase} >Increase</button>
  </div>
}
function Decrease({setCount}) {
  function decrease() {
    setCount(count => count - 1)
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

export default App
