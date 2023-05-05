import { Route ,Routes } from 'react-router'
import Home from './pages/home/Home'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/login' element={<Login/>}>Login</Route>
        <Route path='/signup' element={<Signup/>}>Signup</Route>
  
      </Routes>

    </>
  )
}

export default App
