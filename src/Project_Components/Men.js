import React from 'react'
import { Cards } from './Cards';
import cardImg1 from '../Assets/IMG_20240415_135401-removebg-preview.png';
import cardImg2 from '../Assets/61EH1ONmC1L._AC_UY1000_-removebg-preview.png';
import cardImg3 from '../Assets/images-removebg-preview.png';
import cardImg4 from '../Assets/air-jordan-1-hi-flyease-older-shoes-LdMh25-removebg-preview.png';
import '../Css_Styles/Men.css';


export const Men = () => {
  
  const cardsData = [
    {
      id: 1,
      cardTitle: "NIKE AIR",
      cardText1: "SF AIR FORCE MID",
      cardText2: "TRIPLE WHITE",
      cardText3: "30.00",
      imgSource: cardImg1
    },
    {
      id: 2,
      cardTitle: "NIKE AIR",
      cardText1: "AIR FORCE 1",
      cardText2: "HIGH '07",
      cardText3: "50.00",
      imgSource: cardImg2
    },
    {
      id: 3,
      cardTitle: "NIKE AIR",
      cardText1: "SNEAKERS SF AIR",
      cardText2: "MAX FORCE 1",
      cardText3: "100.00",
      imgSource: cardImg3
    },
    {
      id: 4,
      cardTitle: "NIKE AIR",
      cardText1: "AIR FORCE AIR",
      cardText2: "JORDAN NIKE",
      cardText3: "150.00",
      imgSource: cardImg4
    }


  ]
  return (
    <>
      <div className='container-fluid bg-dark'>
        <div className='container mt-5 bg-dark '>
          <span className='text-white' style={{ fontSize: '22px', fontFamily: "sans-serif", fontWeight: "bold" }}>FOR MENS</span>
          <div className='CardContainer'>
            {
              cardsData.map((cardData)=>{
                return (
                   <Cards id={cardData.id} cardTitle={cardData.cardTitle} cardText1={cardData.cardText1} cardText2={cardData.cardText2} cardText3={cardData.cardText3} image={cardData.imgSource}/>
                );
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}
