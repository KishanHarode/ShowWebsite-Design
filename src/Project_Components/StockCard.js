import React from 'react';
import '../Css_Styles/StockCard.css';
import { FaDollarSign, FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StockCard = (props) => {
    const {gender,id,imageSource,card_title_custom1,card_text_custom1,card_text_custom2,card_price1,card_price2} = props;
    const navigate = useNavigate();
    const handleRedirect = (id,gender)=>{
       navigate(`/DetailSectionShoe/${id}/${gender}`);
    }
    return (
        <>
            <div className="card StockCard rounded-2" key={id} onClick={()=>handleRedirect(id,gender)}>
                <img src={imageSource} className='card-img-top' alt='...' style={{height:"200px"}}/>
                <div className='card-body'>
                    <h6 className='text-white text-start' style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Just <span className='text-danger'>In</span></h6>
                    <span className='card-title card-title-custom'>{card_title_custom1}</span>
                    <span className='card-text d-block text-start card-text-custom'>{card_text_custom1}</span>
                    <span className='card-text d-block text-start card-text-custom'>{card_text_custom2}</span>
                    <div className='card-body text-start-container'>
                        <span className='card-text d-block fw-bold'>$ : <FaDollarSign style={{fontSize:"15px",marginBottom:"2px"}}/> {card_price1}</span>
                        <span className='card-text d-block fw-bold'>MRP : <FaRupeeSign style={{fontSize:"15px",marginBottom:"2px"}}/> {card_price2}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default StockCard;