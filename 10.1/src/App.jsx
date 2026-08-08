import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/neet/online-coaching-class-11" element={ <Class11Program/> } />
            <Route path="/neet/online-coaching-class-12" element={ <Class12Program/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout() {
  return <div>
    <Link to="/neet/online-coaching-class-11">class 11</Link>
    <Link to="/neet/online-coaching-class-12">class 12</Link>
    <Outlet/>
    footer
  </div>
}

function Class11Program() {
  return <div>
    Neet programs for class 11
  </div>
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/")
  }

  return <div>
    Neet programs for class 12
    <button onClick={redirectUser}>go back to landing</button>
  </div>
}

export default App
