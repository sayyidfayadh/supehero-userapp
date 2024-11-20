/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header/Header';
import { TokenAuthContext } from '../Auth/Auth';
import { loginUserAPI, registerUserAPI } from '../Services/allAPI';
import Footer from '../Components/Footer/Footer';

function UserAuth() {

  const {isAuthorized,setIsAuthorized}=useContext(TokenAuthContext)
  // const [user, setUser] = useState({});
  const[userData,setUserData]=useState({})
  const [toLogin, setToLogin] = useState(true);
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const setlogin = (e) => {
    e.preventDefault();
    setToLogin(!toLogin);
  };
  const handleRegister=async()=>{
    const {username,email,password}=userData
    // console.log(username,email,password);
    
    if(!username || !email || !password){

      toast.warn("fill empty field")
    }
    else{
        try {
          const result= await registerUserAPI(userData)
        // console.log(result);
        if(result.status===201){
          toast.success(`${result.data.username} has susccesfully registered`)
          setUserData({username:"",email:"",password:""}) 
          setToLogin(!toLogin);
        }
        else{
          toast.warn(result.response.data ||"registration failed")
        } 
      }
        catch (error) {
          console.error(error)
          toast.error("An error occurred during registration");
        }
 
  }
}
const handleLogin=async()=>{
  const {email,password}=userData
  if( !email || !password){
    toast.warn("fill empty field")
  }
  else{
    try {
      const result= await loginUserAPI(userData)
    // console.log(result);
    if(result.status===200){
      // setUser(result.data.existingUser)
      sessionStorage.setItem("username",result.data.existingUser.username)
      sessionStorage.setItem("email",result.data.existingUser.email)
      sessionStorage.setItem("token",result.data.token) 
      toast.success(`login successfull`)
      setUserData({email:"",password:""}) 
      setIsAuthorized(true)
    }
    else{
      toast.warn(result.response.data ||"Login Failed")
    } 
  }
    catch (error) {
      console.error(error)
      toast.error("An error occurred during login");
    }
  }
  
  }
  
  return (
    <div>
      <Header style={{ color: "silver" }}/>
      <ToastContainer position='top-center'theme='dark'/>
 <div
            className=" mb-2 container w-100 p-5  border mt-4"
            style={{
              // width:"400px",
              maxWidth:"600px",
              height:"70vh",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              backgroundColor:"black"
            }}
          >
            {!toLogin ? (
            <div  style={{ flex: 1, display: "flex", flexDirection: "column" }}>
             <Row className="pt-2 text-light">
              <h1 className='text-center'>Sign Up</h1>
              <div className="d-flex justify-content-center mb-4">
      <img src="batman-512.png" style={{ width: "150px", height: "150px" }} alt="aaa" />
    </div>
                <Col className="d-flex flex-column gap-2" >
                <label htmlFor="username">Username</label>
                <input
                    id='username'
                    type='text'
                    name="username"
                    onChange={handleChange}
                 className='form-control ````````````'
                  />  
                  <label htmlFor="email">E-Mail</label>             
                   <input
                  id='email' 
                  type='email' 
                    name="email"
                    onChange={handleChange}
                 className='form-control'
                  />

              <label htmlFor="password">Password</label> 
              <input
              id='password'
              type='password'
              placeholder=''
                    name="password"
                    onChange={handleChange}
                 className='form-control'
                  />


               
          
                </Col>
               
              </Row>
              <div className=""style={{ marginTop: "auto" }}>
              <button type="submit" color="success" className="btn btn-light w-100 mt-4 mb-4" onClick={handleRegister}>
                    Sign Up
                  </button>
                
                <div className="text-center mb-3">
                  <a href="" onClick={setlogin} style={{textDecoration:"none"}} className="">
                    Existing User?Login...
                  </a>
                </div>
              </div>
              </div>
            ) : (
              <>
               <Row  className="pt-2 text-light">
              <h1 className='text-center text-light'>Login</h1>
              <div className="d-flex justify-content-center mb-4">
      <img src="batman-512.png" style={{ width: "150px", height: "150px" }} alt="aaa" />
    </div>
                <Col className="d-flex flex-column gap-2">
               <label htmlFor="email">Email</label>
                   <input
                   type='email'
                    label="E-mail"
                    name="email"
                    
                    onChange={handleChange}
                 className='form-control'
                  />
    <label htmlFor="password">Password</label>
               
              <input
              type='password'
                  id='password'
                    name="password"
                    onChange={handleChange}
                 className='form-control'
                  />
 
                </Col>
              
              </Row>
              
              <div className=""style={{ marginTop: "auto" }}>
                 <button type="submit" color="success" className="btn btn-light w-100 mt-4 mb-4" onClick={handleLogin}>
                    Login
                  </button>
                
                <div className="text-center mb-3">
                  <a href="" onClick={setlogin} style={{textDecoration:"none"}} className="">
                    New User?Let's SignUp
                  </a>
                </div>
                 </div>
              </>
            )}
      </div>

 <div style={{position:"fixed",bottom:"0",width:"100%"}}>
  
 <Footer/>
 </div>
     
    </div>
  )
}

export default UserAuth