import { useState } from "react";


function App() {
  return (
    <div>
      <ToggleMessage/>

    </div>
  )
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false); //defining a new state variable
  // when the value of a state variable changes, 
  // the component that uses that state variable rerenders 
  function toggleMessage() {
    setIsVisible(!isVisible); 
  }
  return (
    <div>
      <button onClick={toggleMessage} > 
          Toggle Message
      </button>
      {isVisible && <div> this is conditionally renders </div>}
    </div>
  )
}



// const style = {
//   width: 200, 
//   height: 100, 
//   backgroundColor: "green",
//   borderRadius: 10, 
//   borderColor: "gray",
// }

// function PostComponent() {
//   return <div style={style} >
//     <img style={{ width: 20, height: 20, borderRadius: 20}} />
//     <div>
//       <b>
//         100xdevs
//       </b>
//       <div>23,888 followers</div>
//     </div>
//   </div>
// }




// function ProfileComponent() {
//   return <div>
//     <div>

//     </div>
//   </div>
// }

export default App
