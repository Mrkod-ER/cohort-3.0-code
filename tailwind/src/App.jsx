import './App.css'

function App() {
  
  return (
    <>
      {/* <div className="grid grid-cols-12">
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
      <div className='xl:bg-yellow-500 md:bg-red-700 sm:bg-blue-400 bg-emerald-500'>
        reponsive div
      </div> */}

      <div className='grid sm:grid-cols-12 grid-cols-1'>
        <div className='col-span-1 sm:col-span-5 bg-red-300'>
          child 1
        </div>
        <div className='col-span-1 sm:col-span-5 bg-green-300'>
          child 1
        </div>
        <div className='col-span-1 sm:col-span-2 bg-blue-300'>
          child 1
        </div>
      </div>

    </>
  )
}

export default App
