import './App.css'

function App() {
  
  return (
    <>
      <div className="grid grid-cols-12">
        <div className='bg-red-200 col-span-5'>
          child 1
        </div>
        <div className='bg-blue-200 col-span-5'>
          child 2
        </div>
        <div className='bg-green-300 col-span-2'>
          child 2
        </div>
      </div>

    </>
  )
}

export default App
