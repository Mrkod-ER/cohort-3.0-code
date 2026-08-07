function App() {

  return (
    <div>
      <PostComponent/>
    </div>
  )
}

const style = {
  width: 200, 
  height: 100, 
  backgroundColor: "green",
  borderRadius: 10, 
  borderColor: "gray",
}

function PostComponent() {
  return <div style={style} >
    <img style={{ width: 20, height: 20, borderRadius: 20}} />
    <div>
      <b>
        100xdevs
      </b>
      <div>23,888 followers</div>
    </div>
  </div>
}

export default App
