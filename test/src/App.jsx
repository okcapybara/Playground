import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroAnimation from './components/IntroAnimation'
import ExhibitionGallery from './components/ExhibitionGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <IntroAnimation />
      <ExhibitionGallery />
    </div>
  )
}

export default App
