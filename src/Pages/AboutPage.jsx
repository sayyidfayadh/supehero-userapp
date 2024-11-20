import React from 'react'
import "./About.css";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
function AboutPage() {
  const navigate=useNavigate()
  return (
    <div>
      <Header style={{ color: "silver" }}/>
      <div>
      
      <header className="hero">
        <div className="hero-content">
          <h1 style={{fontSize:"3rem"}}>Welcome to the Dark Side of Justice</h1>
          <p style={{fontSize:"1.2rem",marginBottom:"1.8rem"}}>Where your voice echoes through the shadows.</p>
          <button className='btn btn-light' onClick={()=>navigate('/submission')}>
         <div >
        <div> Submit Your Grievance </div>
         <div className='batt '>
         <img src="pngwing.com.png" width={"50px"}  alt="" />
        
         </div>
         </div>
          </button>
          
        </div>
      </header>

      
      <section className="about ">
        <h2>About Us</h2>
        <p>
          Gotham is full of challenges, injustice, and unsolved mysteries. This is your platform to reach the Dark Knight
          himself. Submit your grievances, concerns, or tips. Together, we can fight the darkness.
        </p>
        
      </section>

<div className='row'>
      <section className="col-6 missions text-center">
        <h2>My Mission</h2>
        <ul>
          <li>
            <strong>Anonymity:</strong> Your secrets are safe in the Batcave.
          </li>
          <li>
            <strong>Justice:</strong> Every grievance is treated with vigilance.
          </li>
          <li>
            <strong>Empathy:</strong> Every voice, no matter how small, deserves to be heard.
          </li>
        </ul>
      </section>
      <section className="col-6 missions">
          <h2>How It Works</h2>
          <ol>
            <li>
              <strong>Submit:</strong> Use the form to share your grievance or tip.
            </li>
            <li>
              <strong>Investigate:</strong> Our team reviews and investigates each submission.
            </li>
            <li>
              <strong>Act:</strong> Action is taken to bring justice and resolution.
            </li>
          </ol>
        </section>
        </div>

  
  <Footer/>
    </div>
    </div>
  )
}

export default AboutPage