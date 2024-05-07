import React from 'react'
import '../Css_Styles/Contact.css';
import { FaFile, FaPhone, FaSave } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import { Footer } from './Footer';
import doubleShoe from '../Assets/IMG_20240418_095225-removebg-preview.png';

export const Contact = () => {
  const contactData = [
    {
      id: 1,
      icon: <FaMapLocation className='icon-text' />,
      title: "Our Office Location",
      companyName: "The Interior Design Studio Company",
      address: "The Courtyard, AI Quoz 1, Colorado, USA",
    },
    {
      id: 2,
      icon: <FaPhone className='icon-text' />,
      title: "Phone (Landline)",
      companyName: "+91 23567 8987",
      address: "+91 25252 3336"
    },
    {
      id: 3,
      icon: <FaFile className='icon-text' />,
      title: "E-mail",
      companyName: "SneaKiss@info.com",
      address: "Royal Complex Junction"
    },
    {
      id: 4,
      icon: <FaSave className='icon-text' />,
      title: "Save Payment ",
      companyName: "Secure your payments, save effortlessly",
      address: "Protect your transactions, save hasslefree."
    },
    
  ]
  return (
    <>
      <div className='container-fluid ContactContainer bg-dark pb-4'>
        <h1 className='custom-contact-font'>CONTACT <span style={{color:"red"}}>US</span></h1>
        <span className='customText d-block'>Use our contact form for all information request or contact us </span>
        <span className='customText d-block'>directly using the contact information below.</span>
        <div className='container  mb-3 mt-3'>
          <div className='contactContent'>
            {
              contactData.map((Data) => {
                return (
                  <>
                    <div className='contact-1' key={Data.id}>
                      <div style={{ backgroundColor: "rgb(239, 35, 35)", borderRadius: "100%", height: "70px", width: "70px", position: "relative" }} className='mx-auto'>
                        {Data.icon}
                      </div>
                      <span className='d-block py-2' style={{ fontWeight: "bolder", fontFamily: "sans-serif", fontSize: "17px" }}>{Data.title}</span>
                      <span className='d-block' style={{ fontSize: "13px", fontFamily: "sans-serif", wordSpacing: "4px" }}>{Data.companyName}</span>
                      <span className='d-block' style={{ fontSize: "13px", fontFamily: "sans-serif", wordSpacing: "4px" }}>{Data.address}</span>
                    </div>
                  </>
                );
              })
            }
          </div>
        </div>
        <div className='container  mt-5 bg-dark'>
          <div className='formContainer'>
            <div className='imgContact'>
              <img style={{ maxWidth: "100%" }} className='img-fluid' src={doubleShoe} alt='...'  />
            </div>
            <div className='formContact'>
              <form>
                <div className='row  mt-4'>
                  <div className='col' style={{ textAlign: "left" }}>
                    <label htmlFor="inputEmail" className='form-label text-white' style={{ fontFamily: "sans-serif" }}>Email</label>
                    <input type='email' placeholder='Enter your Email' className='form-control text-white placeholder-white' onFocus={(event) => event.target.style.borderColor = "red"} onBlur={(event) => event.target.style.borderColor = "#333"} style={{ backgroundColor: "#333", fontFamily: "sans-serif", borderColor: "#333" }} required />
                  </div>
                  <div className='col' style={{ textAlign: "left" }}>
                    <label htmlFor="inputName" className='form-label text-white' style={{ fontFamily: "sans-serif" }}>Name</label>
                    <input type='text' placeholder='Enter your Name' className='form-control text-white placeholder-white' onFocus={(event) => event.target.style.borderColor = "red"} onBlur={(event) => event.target.style.borderColor = "#333"} style={{ backgroundColor: "#333", fontFamily: "sans-serif", borderColor: "#333" }} required />
                  </div>
                </div>
                <div className='row  mt-4'>
                  <div className='col' style={{ textAlign: "left" }}>
                    <label htmlFor="inputAddress" className='form-label text-white' style={{ fontFamily: "sans-serif" }}>Address</label>
                    <input type='text' placeholder='Enter your address' className='form-control text-white placeholder-white' onFocus={(event) => event.target.style.borderColor = "red"} onBlur={(event) => event.target.style.borderColor = "#333"} style={{ backgroundColor: "#333", fontFamily: "sans-serif", borderColor: "#333" }} required />
                  </div>
                </div>
                <div className='row  mt-4'>
                  <div className='col' style={{ textAlign: "left" }}>
                    <label htmlFor="inputMessage" className='form-label text-white' style={{ fontFamily: "sans-serif" }}>Message</label>
                    <textarea placeholder='Enter your message' className='form-control text-white placeholder-white' onFocus={(event) => event.target.style.borderColor = "red"} onBlur={(event) => event.target.style.borderColor = "#333"} rows={3} style={{ backgroundColor: "#333", fontFamily: "sans-serif", borderColor: "#333",resize:"none" }} required></textarea>
                  </div>
                </div>
                <div className='customButton mt-4 mb-5' style={{position:"relative"}}>
                   <button className='btn btn-danger' style={{position:"absolute",left:"0px",width:"150px"}}>SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
