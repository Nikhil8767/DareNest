  import { useState } from 'react'
  import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

  

  function App() {
    const [count, setCount] = useState(0)

    return (
     
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    
    )
  }

  export default App
