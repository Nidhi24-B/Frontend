import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Alpha from './components/Alpha'
import Form from './components/Form'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import View from './page/View'
import Add from './page/Add'
import { ToastContainer, toast } from 'react-toastify';
import  Edit  from './page/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ToastContainer />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<View/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>

        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
