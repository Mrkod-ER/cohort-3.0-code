
function App() {

  return (
    <div>
      <Card>

      </Card>
    </div>
  )
}

function Card({ children }) {
  return(
    <div style={{background: "black", borderRadius: 20, color: "white"}}>
      {children}
    </div>
  )
}

export default App
