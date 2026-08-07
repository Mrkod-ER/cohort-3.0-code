import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count => count + 1);
  }

  useEffect(function() {
    console.log("above setinterval");
    setInterval(increaseCount, 2000);
  }, []);

  return (
    <div>
      {count}
    </div>
  )
}

export default App
