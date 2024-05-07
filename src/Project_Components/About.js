import React from 'react';
import '../Css_Styles/About.css';
import img1 from '../Assets/red shoe img1.png';
export const About = ()=>{
    return(
        <>
           <div className="container-fluid">
               <div className='container mt-5'>
                 <div className='aboutContainer'>
                    <div className='about-item-1 text-white'>
                        <div className='aboutChild-1'>
                        <span style={{fontSize:"20px",fontWeight:"bolder",display:"block",fontFamily:"sans-serif",color:"red"}}>ABOUT US</span>
                        <span className='text-white' style={{fontSize:"25px",fontWeight:"bold",display:"block",fontFamily:"sans-serif",fontStyle:"italic"}}>ELEVATE YOUR</span>
                        <span className='text-white' style={{fontSize:"25px",fontWeight:"bold",display:"block",fontFamily:"sans-serif",fontStyle:"italic"}}>LOOK WITH <span style={{color:"red"}}>SHOES</span></span>
                        <span className='text-white d-block' style={{fontSize:"12px",fontFamily:"sans-serif"}}>FROM SNEAKERS TO STOLET TO YOUR SHOE DESTINATION</span>
                        <span className='text-white d-block mb-3' style={{fontSize:"12px",fontFamily:"sans-serif"}}>EXPERIENCE COMFORT AND STYLE WITH OUR SHOES</span>
                        <button className='btn btn-danger mb-3' style={{fontFamily:"sans-serif"}}>SHOP NOW</button>
                        <button className='btn btn-outline-light mb-3 ms-1' style={{fontFamily:"sans-serif"}}>LEARN MORE</button>
                        </div>
                    </div>
                    <div className='about-item-2  text-white' style={{boxSizing:"border-box"}}>
                        <img src={img1} alt='..' className='img-fluid imgAboutContent'/>
                    </div>
                 </div>
               </div>
           </div>
        </>
    );
}