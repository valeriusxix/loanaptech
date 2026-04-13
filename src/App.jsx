import { useState } from 'react'
import './App.css'
import About from './components/About'
import Privacy from './components/privacy'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <About />
      <Privacy />
      <Footer />
    </div>
  )
}

export default App
