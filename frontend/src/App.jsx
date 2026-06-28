import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import {Routes, Route} from 'react-router-dom';
import Dashboard from './components/DashBoard/Dashboard'
import History from './components/History/History'
import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'

//import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <SideBar />
      <Routes>
        <Route path = '/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </div>
  )
}

export default App
