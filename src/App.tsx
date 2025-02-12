import { Route, Routes } from 'react-router-dom'
import './App.scss'
import ChatPage from './pages/chatPage/chatPage'

function App() {

  return (
    <div>

      <Routes>
        <Route path='/' element={<ChatPage />}></Route>
      </Routes>

    </div>
  )
}

export default App
