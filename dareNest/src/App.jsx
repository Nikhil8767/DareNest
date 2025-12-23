  import { useState } from 'react'
  import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Session from './components/Session'
import FriendsDare from './components/FriendsDare'
import CoupleDare from './components/CoupleDare'
import PlayGame from './components/PlayGame'

  

  function App() {
    const [count, setCount] = useState(0)

    return (
     
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/session' element={<Session/>}/>
          <Route path='/friends-dares' element={<FriendsDare/>}/>
          <Route path='/couple-dares' element={<CoupleDare/>}/>
          <Route path='/play' element={<PlayGame/>}/>
        </Routes>
    
    )
  }

  export default App
