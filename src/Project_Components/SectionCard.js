import React from 'react'
import '../Css_Styles/SectionCard.css';
import { FaRupeeSign } from 'react-icons/fa';
const SectionCard = (props) => {
    const {id,imageSource,card_title1,card_text,card_title2}=props;
    return (
        <>
            <div className='card SectionCard rounded-1' key={id} >
                <img src={imageSource} className='card-img-top' alt='../' />
                <div className='card-body text-start'>
                    <h5 class="card-title" style={{fontWeight:"bold",fontFamily:"sans-serif"}}>{card_title1}</h5>
                    <p class="card-text" style={{fontSize:"16px",fontWeight:"normal",fontFamily:"sans-serif"}}>{card_text}</p>
                    <h5 class="card-title" style={{fontSize:"15px"}}>MRP: <FaRupeeSign style={{fontSize:"15px",marginBottom:"2px"}}/> {card_title2}</h5>
                </div>
            </div>
        </>
    );
}

export default SectionCard;