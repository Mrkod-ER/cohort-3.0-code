import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CreateContentModel } from './components/CreateContentModel'
import { Sidebar } from './components/Sidebar'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { useState } from 'react'

function App() {
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div>
      <Sidebar />
    <div className='p-4 ml-72 min-h-screen bg-gray-100' > 
    <CreateContentModel open={modalOpen} onClose={() => {
      setModalOpen(false);
    }} />
    <div className='flex justify-end gap-4'>
      <Button onClick={() => {
        setModalOpen(true)
      }}
       variant='primary' text="Add content" startIcon={<PlusIcon/>} />
      <Button variant='secondary' text="share brain" startIcon={<ShareIcon/>} />
    </div>
      
      <div className='flex gap-4'>
        <Card type='twitter' title="first tweet" link='https://x.com/_int_max/status/2026579596376944797?s=20' />
         
        <Card type='youtube' title="first yt video" link='https://www.youtube.com/watch?v=ZeAuihHe5OQ' />
      </div>
      </div>
    </div>
  )
}

export default App
