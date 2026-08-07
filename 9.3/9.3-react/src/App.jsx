import { useState } from "react";
import { PostComponent } from "./post";

function App() {

  const [posts, setPosts] = useState([]);

  // const posts = [{
  //   name: "harkirat", 
  //   subtitle: "1000 followers",
  //   time: "12 ago", 
  //   image: "",
  //   description: "hello"
  // }]

  const postComponent = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
    />)

    function addPost() {

      setPosts([...posts, 
                {
            name: "harkirat", 
            subtitle: "1000 followers",
            time: "12 ago", 
            image: "",
            description: "hello"
          }
      ])
      posts.push(
              {
          name: "harkirat", 
          subtitle: "1000 followers",
          time: "12 ago", 
          image: "",
          description: "hello"
        }
      )
    }

  return (
    <div>
      <button onClick={addPost}>
      add post
      </button>
      <div>
        {postComponent}
      </div>
    </div>
  )
}

// const ToggleMessage = () => {
//   const [isVisible, setIsVisible] = useState(false); //defining a new state variable
//   // when the value of a state variable changes, 
//   // the component that uses that state variable rerenders 
//   function toggleMessage() {
//     setIsVisible(!isVisible); 
//   }
//   return (
//     <div>
//       <button onClick={toggleMessage} > 
//           Toggle Message
//       </button>
//       {isVisible && <div> this is conditionally renders </div>}
//     </div>
//   )
// }



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
