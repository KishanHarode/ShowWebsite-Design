import React from 'react';
import img from '../Assets/UPTO.png';
import img1 from '../Assets/Undefeated-BlueCroc1-removebg-preview.png'
import img2 from '../Assets/custom-nike-dunk-high-by-you-shoes-removebg-preview.png'
import '../Css_Styles/Collection.css';
export const Collection = () => {
  return (
    <div className='container-fluid pb-3 bg-dark'>
    <div className='container mt-5 bg-dark'>
      <span className='text-white' style={{ fontSize: '22px', fontFamily: "sans-serif", fontWeight: "bold" }}>OUR COLLECTION</span>
      <div className='collectionContainer'>
        <div className='child-item-1'>
          <div className='ch1'>
            <span className='customFont1 mt-3'>BLACK FRIDAY <span className='text-danger' style={{ fontFamily: "sans-serif" }}>SALES</span></span>
            <div className='imgCustom' style={{ height: "70px", width: "210px" }}>
              <img src={img} className='img-fluid rounded' alt='....' />
            </div>
            <span className='customFont3'>55% OFF</span>
            <button className='btn btn-danger d-block btn1'>SHOP NOW</button>
          </div>
          <div className='ch2' style={{ height: "auto", width: "60%" }}>
            <img src={img1} alt='...' className='img-fluid imgCh1' />
          </div>
        </div>
        <div className='child-item-2  d-flex'>
          <div className='ch1'>
            <span className='customFont1 mt-3'>NIKE DUNK HIGH</span>
            <span className='customFont4 mt-1 text-white d-block'>The Nike Dunk High is a classic basketball-inspired sneaker.</span>
            <span className='customFont5 text-white d-block'>silhouette that first debuted in 1985 as part of Nike's basketball. </span>
            <span className='customFont5 text-white d-block'>Over the years, it has transitioned from the courts to the streets.</span>
            <button className='btn btn-danger text-white d-block mt-3'>SHOP NOW</button>
          </div>
          <div className='ch2 ' style={{height:"auto",width:"50%"}}>
            <img src={img2} className='img-fluid ' alt='..'/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

