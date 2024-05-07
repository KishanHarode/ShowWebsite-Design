import React, {  useState } from 'react';
import '../Css_Styles/DetailSection.css';
import { FaRupeeSign,FaDollarSign } from 'react-icons/fa';
import { Footer } from './Footer';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import MenSelect6 from '../Assets/MenSelect6.jpeg';
import MenSelect8 from '../Assets/MenSelect8.jpeg';
import MenSelect11 from '../Assets/MenSelect11.jpeg';
import MenSelect13 from '../Assets/MenSelect13.jpeg';
import WomenSelect10 from '../Assets/WomenSelect11.jpeg';
import WomenSelect11 from '../Assets/WomenSelect12.jpeg';
import SectionCard from './SectionCard';
import { useParams } from 'react-router-dom';
import {MensCard, WomensCard} from './MW';
const DetailSectionShoe = () => {
    const {id,gender} = useParams();
    const [gender_1] = useState(parseInt(gender));
    const MenCard = MensCard;
    const womenCard = WomensCard;
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let selectedCardData = gender_1 === 1 ? MenCard.find((card)=>card.id===parseInt(id)):womenCard.find((card)=>card.id===parseInt(id));
    const [image,setImage] = useState(selectedCardData.imageSource);
    
    const handleImage = (img)=>{
        setImage((prevImage)=>{
            return img;
        })
    }

   
     
    const SectionCards = [
        {
            id: 1,
            imageSource: MenSelect6,
            card_title1: "Nike Air Force 1'07",
            card_text: "Men's Shoes",
            card_title2: "7,945.00"
        },
        {
            id: 2,
            imageSource: MenSelect8,
            card_title1: "Air Jordan 1 Low",
            card_text: "Men's Shoes",
            card_title2: "8,995.00"
        },
        {
            id: 3,
            imageSource: MenSelect11,
            card_title1: "Air Jordan 1 Low",
            card_text: "Women's Shoes",
            card_title2: "8,295.00"
        },
        {
            id: 4,
            imageSource: MenSelect13,
            card_title1: "Nike OffCourt Adjust",
            card_text: "Men's Slides",
            card_title2: "3,195.00"
        },
        {
            id: 5,
            imageSource: WomenSelect10,
            card_title1: "Nike Interact Run SE",
            card_text: "Men's Road Running Shoes",
            card_title2: "7,095.00"
        },
        {
            id: 6,
            imageSource: WomenSelect11,
            card_title1: "Nike DownShifter 13",
            card_text: "Men's Shoes",
            card_title2: "4,295.00"
        },
        {
            id: 7,
            imageSource: MenSelect6,
            card_title1: "Nike Air Force 1'07",
            card_text: "Men's Shoes",
            card_title2: "7,945.00"
        },
        {
            id: 8,
            imageSource: MenSelect8,
            card_title1: "Air Jordan 1 Low",
            card_text: "Men's Shoes",
            card_title2: "8,995.00"
        },
        {
            id: 9,
            imageSource: MenSelect11,
            card_title1: "Air Jordan 1 Low",
            card_text: "Women's Shoes",
            card_title2: "8,295.00"
        },
        {
            id: 10,
            imageSource: MenSelect13,
            card_title1: "Nike OffCourt Adjust",
            card_text: "Men's Slides",
            card_title2: "3,195.00"
        },
        {
            id: 11,
            imageSource: WomenSelect10,
            card_title1: "Nike Interact Run SE",
            card_text: "Men's Road Running Shoes",
            card_title2: "7,095.00"
        },
        {
            id: 12,
            imageSource: WomenSelect11,
            card_title1: "Nike DownShifter 13",
            card_text: "Men's Shoes",
            card_title2: "4,295.00"
        }
    ]
    return (
        <>
            <div className='container-fluid  bg-dark text-white' style={{ height: "auto", marginTop: "55px", border: "1px solid #333" }}>
                <div className='container  mt-5 text-white p-1'>
                    <div className='DetailSectionContainer'>
                        <div className='sec-1'>
                            <div className='image-sec'>
                                <img src={selectedCardData.relatedImages[0]} className='img-fluid f-1' style={{borderRadius:"10px"}} alt='...' onClick={()=>handleImage(selectedCardData.relatedImages[0])} />
                            </div>
                            <div className='image-sec'>
                                <img src={selectedCardData.relatedImages[1]} className='img-fluid f-1' style={{borderRadius:"10px"}} alt='...' onClick={()=>handleImage(selectedCardData.relatedImages[1])} />

                            </div>
                            <div className='image-sec'>
                                <img src={selectedCardData.relatedImages[2]} className='img-fluid f-1' style={{borderRadius:"10px"}} alt='...' onClick={()=>handleImage(selectedCardData.relatedImages[2])} />

                            </div>
                            <div className='image-sec'>
                                <img src={selectedCardData.relatedImages[3]} className='img-fluid f-1' style={{borderRadius:"10px"}} alt='...' onClick={()=>handleImage(selectedCardData.relatedImages[3])} />

                            </div>
                            <div className='image-sec'>
                                <img src={selectedCardData.relatedImages[4]} className='img-fluid f-1' style={{borderRadius:"10px"}} alt='...' onClick={()=>handleImage(selectedCardData.relatedImages[4])} />

                            </div>
                            <div className='image-sec'>
                                <img src={selectedCardData.relatedImages[5]} className='img-fluid f-1' style={{borderRadius:"10px"}} alt='...' onClick={()=>handleImage(selectedCardData.relatedImages[5])} />
                            </div>
                            <div className='image-sec'>
                                <img src={selectedCardData.relatedImages[6]} className='img-fluid f-1' style={{borderRadius:"10px"}} alt='...' onClick={()=>handleImage(selectedCardData.relatedImages[6])} />

                            </div>
                            <div className='image-sec'>
                                <img src={selectedCardData.relatedImages[7]} className='img-fluid f-1' style={{borderRadius:"10px"}} alt='...' onClick={()=>handleImage(selectedCardData.relatedImages[7])} />
                            </div>
                        </div>
                        <div className='sec-2'>
                        <img src={image} alt='...' className='img-fluid ' style={{height:"100%",width:"100%",borderRadius:"10px"}} />                        
                        </div>
                        <div className='sec-3'>
                            <span style={{ color: "red", display: "block", fontFamily: "sans-serif", fontSize: "19px", fontWeight: "normal" }}>Sustainable Materials</span>
                            <span style={{ fontSize: "22px", display: "block", fontWeight: "bolder", fontFamily: "sans-serif" }}>{selectedCardData.card_title_custom1} </span>
                            <span style={{ fontWeight: "bold", display: "block", fontFamily: "sans-serif" }}>{selectedCardData.card_text_custom1} {selectedCardData.card_text_custom2}</span>
                            <div className='sec-3Div mt-3'>
                                <span style={{ fontWeight: "bolder", display: "block", fontFamily: "sans-serif" }}>$ : <FaDollarSign />{selectedCardData.card_price1}</span>
                                <span style={{ fontWeight: "normal", display: "block", fontFamily: "sans-serif" }}>MRP : <FaRupeeSign />{selectedCardData.card_price2}</span>
                            </div>
                            <span style={{ display: "block", fontFamily: "sans-serif" }}>incl. of taxes</span>
                            <span style={{ display: "block", fontFamily: "sans-serif" }}>(Also includes all applicable duties)</span>
                            <div className='jumbotron_1'>
                                <span style={{ display: "block", fontFamily: "sans-serif" }}>These product is made with at least 20%</span>
                                <span style={{ display: "block", fontFamily: "sans-serif" }}>recycled content by weight</span>
                            </div>
                            <div className='customInformation_1'>
                                <span style={{ display: "block", fontSize: "15px" }}>{selectedCardData.customInformation}</span>
                                {/* {selectData.customInfomation} */}
                            </div>
                            <div className='list-item mt-4'>
                                <ul>
                                    <li>Colour Shown: White/Star Blue/Green Strike/Black</li>
                                    <li>Style: {selectedCardData.style_Data}</li>
                                </ul>
                            </div>
                        
                            {/* Model */}
                            <Button variant="dark" className='btn btn-outline-light' style={{ fontFamily: "sans-serif", fontWeight: "bold" }} onClick={handleShow}>
                                View Product Details
                            </Button>

                            <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
                                <Modal.Header closeButton closeVariant='white'>
                                    <Modal.Title className='modalFont'>{selectedCardData.card_title_custom1}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className='modelContent1'>
                                        <div className='modelImage'>
                                            <img src={selectedCardData.imageSource} alt='..' className='img-fluid' style={{borderRadius:"10px"}} />
                                        </div>
                                        
                                        <div className='modelAbout'>
                                            <span>{selectedCardData.card_title_custom1}</span>
                                            <div className='sec-3Div sec-model'>
                                                <span style={{ display: "block", fontFamily: "sans-serif" }}>$ : <FaDollarSign />{selectedCardData.card_price1}</span>
                                                <span style={{ display: "block", fontFamily: "sans-serif" }}>MRP : <FaRupeeSign /> {selectedCardData.card_price2}</span>
                                            </div>
                                            <span style={{ display: "block", fontFamily: "sans-serif" }} className='f-custom'>incl. of taxes</span>
                                            <span style={{ display: "block", fontFamily: "sans-serif" }} className='f-custom'>(Also includes all applicable duties)</span>
                                        </div>
                                    </div>
                                    <hr style={{border:"1px solid white"}}/>
                                    <div className='modelContent2'>
                                        <div className='p-1' >
                                            <span>{selectedCardData.customInformation}</span>
                                        </div>
                                        <div className='p-1'>
                                            <span style={{ fontWeight: "bold", display: "block", marginBottom: "3px" }}>Made from Nike Grind</span>
                                            <span style={{ fontWeight: "normal" }}>The outsole is made from at least 15% Nike Grind material, derived from scraps from the footwear manufacturing process.</span>
                                        </div>
                                        <div className='p-1'>
                                            <span style={{ fontWeight: "bold", display: "block", marginBottom: "3px" }}>Breathable mesh</span>
                                            <span style={{ fontWeight: "normal" }}>Soft and comfortable mesh offers a high level of breathability.</span>
                                        </div>
                                        <div className='p-1'>
                                            <span style={{ fontWeight: "bold", display: "block", marginBottom: "3px" }}>Supportive and secure</span>
                                            <span style={{ fontWeight: "normal" }}>An updated internal fit band offers containment around the midfoot for support and security.</span>
                                        </div>
                                        <div className='p-1'>
                                            <span style={{ fontWeight: "bold", display: "block", marginBottom: "3px" }}>Product Details</span>
                                            <ul>
                                                <li>Reflective design details</li>
                                                <li>Not intended for use as personal protective equipment (PPE)</li>
                                                <li>Colour Shown: White/Star Blue/Green Strike/Black</li>
                                                <li>Style: {selectedCardData.style_Data}</li>
                                                <li>Country/Region of Origin: Indonesia</li>
                                            </ul>
                                        </div>

                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                                    <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                                </Modal.Footer>
                            </Modal>
                            <hr style={{ border: "1px solid white" }} />
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ wordSpacing: "3px", fontWeight: "bold" }}>
                                    Delivery & Returns
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant='dark' className='p-2 menu-x' style={{ opacity: "1" }}>
                                    <span style={{ display: "block" }}>All purchases are subject to delivery fees.</span>
                                    <li style={{ listStyleType: "circle" }}>Standard delivery 4–9 business days</li>
                                    <li style={{ listStyleType: "circle" }}>Something else</li>
                                    <span style={{ display: "block" }}>Orders are processed and delivered Monday–Friday (excluding public holidays)</span>
                                    <span>Nike Members enjoy free returns.</span>
                                </Dropdown.Menu>
                            </Dropdown>
                            <hr style={{ border: "1px solid white" }} />
                            <Dropdown>
                                <Dropdown.Toggle variant='dark' id='dropdown-basic' style={{ wordSpacing: "3px", fontWeight: "bold", fontFamily: "sans-serif" }}>
                                    Product Information
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant='dark' className='p-2 menu-x' style={{  opacity: "1" }}>
                                    <span style={{ display: "block", paddingBottom: "10px" }}>Declaration of Importer: Direct import by the individual customer.</span>
                                    <span style={{ display: "block", paddingBottom: "10px" }}>Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440</span>
                                    <span style={{ display: "block", paddingBottom: "10px", fontWeight: "bolder" }}>Net Quantity: 1 Pair</span>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>
                </div>
                <div className='container mt-5 p-0'>
                    <span style={{ fontSize: "22px", color: "white", fontWeight: "bold", textAlign: "left", display: "block", fontFamily: "sans-serif", paddingLeft: "5px" }}>You Might Also Like</span>
                    <div class="cardSwiper mt-5">
                        {
                            SectionCards.map((card)=>{
                               return(
                                <>
                                  <SectionCard id={card.id} imageSource={card.imageSource} card_title1={card.card_title1} card_text={card.card_text} card_title2={card.card_title2}/>
                                </>
                               );
                            })
                        }
                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
};

export default DetailSectionShoe;
