
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import SubmissionPage from './Pages/SubmissionPage'
import 'react-toastify/dist/ReactToastify.css';
import { TokenAuthContext } from './Auth/Auth';
import { useContext } from 'react';
import UserAuth from './Pages/UserAuth';
function App() {
  const {isAuthorized,setIsAuthorized}=useContext(TokenAuthContext)

  return (
    <>
       <Routes>
     <Route path='/' element={<HomePage/>}></Route>
     <Route path='/about' element= {<AboutPage/>}></Route>
     <Route path='/submission' element={isAuthorized?<SubmissionPage/>:<UserAuth/>}></Route>
     
    </Routes>
    </>
  )
}

export default App
