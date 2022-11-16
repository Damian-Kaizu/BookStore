import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Bookshowcase from './components/Bookshowcase'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <div className=' mx-3'>
        <Slider />
        <Bookshowcase />
      </div>
    </div>
  )
}

export default App
