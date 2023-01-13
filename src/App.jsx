import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/home';
import './App.css'
import MenuIcon from '@mui/icons-material/Menu';
import Nav from './components/nav';


function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  )
}

export default App
