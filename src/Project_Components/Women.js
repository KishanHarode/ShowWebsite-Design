import React from 'react'
import '../Css_Styles/Women.css';
import cardImg1 from '../Assets/61snhmrmi7L._AC_UY1000_-removebg-preview.png';
import cardImg2 from '../Assets/nike-womens-flex-experience-run-10-running-shoes-9de36d06af2a4806b89cda2006e3f653-removebg-preview.png';
import cardImg3 from '../Assets/1564578678857_0.-removebg-preview.png';
import cardImg4 from '../Assets/71lDDO78YZL._AC_UY1000_-removebg-preview.png';
import { Cards } from './Cards';

export const Women = () => {
  const womensData = [
    {
      id:1,
      cardTitle:"NIKE AIR",
      cardText1:"GORE-TEX AIR FORCE",
      cardText2:"HIGH WTR 'PHANTOM'",
      cardText3:"30.00",
      imgSource:cardImg1
    },
    {
      id:2,
      cardTitle:"NIKE AIR",
      cardText1:"W AIR FORCE l",
      cardText2:"HIGH '07 MID LX",
      cardText3:"50.00",
      imgSource:cardImg2
    },
    {
      id:3,
      cardTitle:"NIKE AIR",
      cardText1:"AIR FORCE l '07",
      cardText2:"SAN FRANCISCO",
      cardText3:"100.00",
      imgSource:cardImg3
    },
    {
      id:4,
      cardTitle:"NIKE AIR",
      cardText1:"AIR FORCE l",
      cardText2:"MID TUNNEL WALK'",
      cardText3:"150.00",
      imgSource:cardImg4
    },
    
  ]
  return (
    <>
       <div className='container-fluid bg-dark'>
        <div className='container mt-5 bg-dark'>
          <span className='text-white' style={{ fontSize: '22px', fontFamily: "sans-serif", fontWeight: "bold" }}>FOR WOMEN</span>
          <div className='womenCardContainer'>
            {
              womensData.map((womenData)=>{
                return(
                  <Cards id={womenData.id} cardTitle={womenData.cardTitle} cardText1={womenData.cardText1} cardText2={womenData.cardText2} cardText3={womenData.cardText3} image={womenData.imgSource} />
                );
              })
            }
          </div>
        </div>
       </div>
    </>
  );
}

