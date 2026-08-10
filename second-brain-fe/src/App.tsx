
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  return (
    <div>
      <Button startIcon={<PlusIcon size='md'/>} variant='primary' text='share' size='sm'></Button>
      <Button variant='secondary' text='add content' size='md'></Button>
      <Button variant='secondary' text='add content' size='lg'></Button>
    </div>
  )
}

export default App
