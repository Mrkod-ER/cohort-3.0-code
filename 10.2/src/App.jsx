import { createContext } from 'react';
import './App.css'
import { useState } from 'react';
import { useContext } from 'react';


const BulbContext = createContext();

function BulbProvider({ children }) {
    const [bulbOn, setBulbOn] = useState(true);

   return <BulbContext.Provider value={{
      bulb: bulbOn,
      setBulbOn: setBulbOn
    }} >
      {children}
    </BulbContext.Provider>
}


function App() {
  return (
    <>
    <div>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
    </div>
    </>
  )
}
function LightBulb() {
  
  return <div>
    <BulbState />
    <ToggleBulbState/>
  </div>
}

function BulbState() {
  const { bulb } = useContext(BulbContext);
  return <div>
      {bulb ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState() {
  const {setBulbOn} = useContext(BulbContext);
  function toggle() {
    setBulbOn(currentState => !currentState)
  }
  return <div>
      <button onClick={toggle} >
        toggle the bulb
      </button>
  </div>
}

export default App
