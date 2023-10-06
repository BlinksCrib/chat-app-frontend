import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import SetAvatar from './components/SetAvatar'
import Chat from './pages/Chat'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/setAvatar' element={<SetAvatar />} />
        <Route path='/' element={<Chat />} />
      </Routes>
      0{' '}
    </div>
  )
}

export default App
