/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { getUserSubmissionAPI, submitGrievanceAPI } from "../Services/allAPI";
import { Button, Modal } from "react-bootstrap";
import { TokenAuthContext } from "../Auth/Auth";
import Footer from "../Components/Footer/Footer";
import { Server_URL } from "../Services/Server_URL";

function SubmissionPage() {
  const {isAuthorized,setIsAuthorized}=useContext(TokenAuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [fetchGrievance,setFetchGrievance]=useState([])
  console.log(fetchGrievance);
  
  const [formHide, setFormHide] = useState(false);
  const [preview, setPreview] = useState([]);
  const [grievance, setGrievance] = useState({
    address: "",
    type: "",
    message: "",
    evidence: [],
  });

  console.log(grievance);
useEffect(()=>{
  getUserSubmissions()
},[])
const getUserSubmissions=async()=>{
  const token=sessionStorage.getItem("token")
  const reqHeader={
    "Authorization":`Bearer ${token}` 
  }
  if(token){
   try {
    const result=await getUserSubmissionAPI(reqHeader)
    if(result.status==200){
      setFetchGrievance(result.data)
    }
   } catch (error) {
    console.error(error);
    
   }
  }
}
  const handleClick = () => {
    setOpacity((preopacity) => (preopacity === 1 ? 0 :1));
  };
  const handleSubmit = async () => {
    //api call
    const { type, message, evidence, address } = grievance;
    if (!type || !message || !address) {
      toast.error("Fill Required Fields");
    } else {
      const token = sessionStorage.getItem("token");
      console.log(token);
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const reqBody = new FormData();
      reqBody.append("address", grievance.address);
      reqBody.append("type", grievance.type);
      reqBody.append("message", grievance.message);
      grievance.evidence.forEach((media) => {
        reqBody.append("evidence", media);
      });
      console.log(reqBody);

      try {
        const result = await submitGrievanceAPI(reqBody, reqHeader);
        console.log(result);
        if (result.status == 201) {
          toast.success("Sent Your Grievance.");
          handleSendMail()
          getUserSubmissions()
          setFormHide(true);
          setOpacity((preopacity) => (preopacity === 1 ? 0 : 1));
          setGrievance({
            address: "",
            type: "",
            message: "",
            evidence: [],
          });
          setPreview([]);
        } else {
          console.error(result.response);
          toast.error("something happened");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEvidence = (e) => {
    const medias = Array.from(e.target.files);
    setGrievance({
      ...grievance,
      evidence: [...grievance.evidence, ...medias],
    });
    const newpreview = medias.map((media) => URL.createObjectURL(media));
    setPreview([...preview, ...newpreview]);
  };
  const handleLogOut=()=>{
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
  }

  const handleSendMail = async () => {
  
  const email=sessionStorage.getItem("email")
    const payload = { email: email, message: grievance.message };
  
    try {
      const response = await fetch(`${Server_URL}/api/send-mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();  
      } catch (error) {
      console.error('Error:', error);
    }
  };




  const[selectedGrievance,setSelectedGrievance]=useState("null")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header style={{ color: "silver" }} />
      <ToastContainer
        position="top-center"
        transition={Bounce}
        autoClose={3000}
      />
      <div
        className="mb-3"
        style={{ minHeight: "", backgroundColor: "black" ,margin:"0",padding:"0"}}
      >
        <div className="row border p-2 mx-auto" style={{minHeight:"90vh"}}>
          <div className="col-md-8 mt-3" style={{overflow:"hidden"}}>
            <div
              className="container   "
              style={{ minHeight: "60vh", marginTop: "", borderRadius: "20px" }}
            >
              <div  style={{position: "relative"}}>
                <img
                  src="./pngwing.com.png"
                  width={"90vw"}
                  className="img-fluid"
                  alt=""
                  style={{
                    display: "flex",
                    position: "absolute",
                    top:"4vh",
                     transform: "rotate(-17deg)",
                    left: "34vw",
                    opacity: `${opacity}`,
                  }}
                />
                 <img
                  src="./—Pngtree—dark cloud effect_8395726.png"
                  width={"100%"}
                  className="img-fluid"
                  alt=""
                  style={{
                    display: "flex",
                    height:"250px",
                    position: "absolute",
                    top:"-8vh",
                    left: "",
                  
                  }}

                /> 
               <img style={{position:"absolute",left:"35vw",top:"4vw",transform:"rotate(-15deg)scale(2.6)",opacity:`${opacity}`}} src="./light_rays.png" className="img-fluid" alt="" width={"60vw"} />
              </div>
              <div className="text-center mt-4 p-0">
           
                <img

                  src="./gotham2.png"
                  className="img-fluid"
                  style={{width:formHide?"1200px":"880px"}}
                  height={"200px"}
                  alt=""
                />
              </div>
              {!formHide ? (
                <>
                  <h1 className="text-light text-center p-2">Send A Grievance</h1>
            
                  {" "}
                  <form
                    action=""
                    className="form-control p-3 mt-1 text-light"
                    style={{ backgroundColor: "black", borderRadius: "20px" }}
                  >
                    <label htmlFor="options">Type of encounter</label>
                    <select
                      defaultValue=""
                      onChange={(e) =>
                        setGrievance({ ...grievance, type: e.target.value })
                      }
                      id="options"
                      className="mb-3 bg-dark form-control text-light"
                    >
                      <option value="" disabled hidden>
                        Options
                      </option>
                      <option value="Corruption">Corruption</option>
                      <option value="Suspicious Activity">
                        Supicious Activity
                      </option>
                      <option value="Most Wanted Sightings">
                        Most Wanted Sightings
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    <label htmlFor="address"> Address </label>
                    <input
                      onChange={(e) =>
                        setGrievance({ ...grievance, address: e.target.value })
                      }
                      type="address"
                      id="address"
                      className="mb-3 bg-dark form-control text-light"
                    />
                    <label htmlFor="matter">Describe The Incident</label>
                    <textarea
                      onChange={(e) =>
                        setGrievance({ ...grievance, message: e.target.value })
                      }
                      id="matter"
                      className="mb-2 bg-dark form-control text-light"
                      rows="4"
                      placeholder="Describe the incident"
                    ></textarea>
                    <label htmlFor="" className="">
                      Any Evidence
                      <div className="d-flex gap-5">
                        <input
                          placeholder="image or videos"
                          multiple
                          onChange={handleEvidence}
                          type="file"
                          accept=".jpg, .jpeg, .png, .svg, .gif,.mp4"
                          className="mb-3 bg-dark form-control"
                        />
                        {preview.map((src, index) => (
                          <div key={index} className="border p-1">
                            <img
                              src={src}
                              alt={`preview-${index}`}
                              style={{ width: "100px", height: "44px" }}
                            />
                          </div>
                        ))}
                      </div>
                    </label>
                  </form>{" "}
                  <div className="text-center mt-3 mb-3">
                    <button className="btn btn-light" onClick={handleSubmit}>
                      Send Alert
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4 className="text-center text-light mt-5">
                      Your grievance fuels Gotham's fight for justice.
                    </h4>
                    <div className="text-center mt-2 ">
                      <button
                        onClick={handleClick}
                        className="p-0 btn btn-lg batbutton "
                        style={{ borderRadius: "120px" }}
                      >
                        <img
                          style={{
                            borderRadius: "70px",
                            transform: "scaleX(-1)",
                          }}
                          className="img-fluid"
                          src="Downpic.cc-762686977.jpg"
                          width={"80px"}
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-light mt-5" onClick={()=>setFormHide(!formHide)}>
                      Send Another? →
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
         

          <div
            className="d-flex"
            style={{
              position: "absolute",
              top: "20vh",
              left: "35vw",
              transform: "rotate(-15deg)scale(2.5)",
              opacity: `${opacity}`,
            }}
          >

          </div>
          </div>
          <div className="col-md-4 " style={{borderLeft:"1px solid silver"}}>
            <h1 className="text-center text-light">Your Submissions</h1>
            <Modal position="top-left" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedGrievance.type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedGrievance.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            <table className="table table-striped table-hover table-responsive table-dark">
              <thead>
                <th>No.</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Status</th>
               
              </thead>
              <tbody>
               {fetchGrievance?.length>0?(fetchGrievance.map((grievance,index)=>(
                <tr key={index} onClick={() => {
                  setShow(true);
                  setSelectedGrievance(grievance); 
                }}>
                  <td>{index+1}</td>
                  <td>{grievance.type}</td>
                  <td>{new Date(grievance.createdAt).toLocaleString()}</td>
                  <td>{grievance.status}</td>
                
               
                </tr>
               ))):(<tr>
                <td colSpan={2} style={{textAlign:"center"}}>No Submissions Yet</td>
               </tr>)
               
               }
              </tbody>
            </table>

           <button className="btn btn-danger w-100 mt-5 p-3 " onClick={handleLogOut}>LogOut</button>
   
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
}

export default SubmissionPage;
