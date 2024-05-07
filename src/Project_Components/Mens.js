import React from 'react'
import { Footer } from './Footer';
import { MensCard } from '../Project_Components/MW';
import StockCard from './StockCard';
import '../Css_Styles/Men.css';


const Mens = () => {
  const menCards = MensCard;
 
  return (
    <>
      <div className='container-fluid bg-dark mensContainer'>
        <div className='container bg-dark mt-5'>
          <span className='text-white' style={{ fontSize: "22px", fontWeight: "bold", fontFamily: "sans-serif" }}>FOR <span style={{color:"red"}}>MENS</span></span>
          <div className='mensCardContainer'>
            {
              menCards.map((card) => {
                return (
                  <>
                    <StockCard gender={card.gender} id={card.id} imageSource={card.imageSource} card_title_custom1={card.card_title_custom1} card_text_custom1={card.card_text_custom1} card_text_custom2={card.card_text_custom2} card_price1={card.card_price1} card_price2={card.card_price2} />
                  </>
                );
              })
            }
          </div>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Mens