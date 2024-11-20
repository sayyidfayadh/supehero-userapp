/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "../Components/Header/Header";
import "./HomePage.css";
function HomePage() {

  return (
    <div
      className=""
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        backgroundImage: "url('./Environment-GothamRooftop-ezgif.com-optimize (1).gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="video-background">
  {/* <video autoPlay muted loop playsInline>
    <source src="Environment-GothamRooftop-ezgif.com-optimize (1).gif" type="video/mp4"/>
    
  </video> */}
</div>
      <Header />
      <div className="titleone text-center ">
      <p className="titleone text-center  ">THE BATMAN</p>
        <img src="./pngwing.com.png"  width={"200px"} alt="" />
       
      </div>
     
      <div 
        className="d-flex intro"
        style={{
          width: "",
          marginInline:"150px",
          marginTop:"8vw",
          fontFamily: "monospace",
          boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
          backgroundColor: " rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          color: "white",
          // textShadow: "3px 3px black",
        }}
      >
        
        <p className=" p-2  text-center   ">
          This is Gotham’s last line of defense. If you've encountered
          corruption, crime, or injustice in the shadows of our city, this is
          where your voice is heard. <br /> Whether you’re reporting a villain’s
          schemes, a corrupt official, or simply a disturbance in the night,
          your grievance is important. <br /> Trust that Gotham’s protector is
          always listening. <br /> If it’s bad enough, it won’t just stay in the
          shadows—it’ll reach the Batcave. <br />
         
          Leave your message down, and the Dark Knight will handle the rest
      
        </p>

       </div>
         <div className="text-center">
         {/* <img src="./pngwing.com.png" width={"100px"} alt="" /> */}
    
         </div>
    </div>
  );
}

export default HomePage;
