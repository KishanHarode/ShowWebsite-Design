import React, { useState } from 'react';
import redShoe from '../Assets/red shoe img1.png';
import select1 from '../Assets/select1-removebg-preview.png';
import select2 from '../Assets/select2-removebg-preview.png';
import select3 from '../Assets/select3-removebg-preview.png';
import select4 from '../Assets/select4-removebg-preview.png';
import select5 from '../Assets/select 5.png';
import '../Css_Styles/Home.css';
import { Collection } from './Collection';
import { Men } from './Men';
import { About } from './About';
import { Women } from './Women';
import { Footer } from './Footer';

export const Home = () => {
    const [displayImage, setDisplayImage] = useState(redShoe);
    const [selectedColor, setSelectedColor] = useState("red");

    const handleImage = (image) => {
        setDisplayImage(image);
    }

    const handleColor = (color) => {
        setSelectedColor(color);
    }

    const getRotate = (selectColor) => {
        switch (selectColor) {
            case 'red':
                return "0deg";
            case 'purple':
                return "1000deg";
            case 'blue':
                return "600deg";
            case 'brown':
                return "380deg";
            default:
                return "0deg";
        }
    }

    return (
        <>
            <div className='container-fluid bg-dark p-3' style={{ marginTop: "56px" }}>
                <div className='container shoeContainer'>
                    <div className='item-1 p-3'>
                        <span className='span1'>THE ULTIMATE</span>
                        <span className='span2'>SNEAK <span className='text-white fs-4' style={{ letterSpacing: "0px", fontWeight: "normal" }}>SHOE</span></span>
                        <span className='span4'>PARADISE</span>
                        <span className='span5'>Step up your style game with our sleek</span>
                        <span className='span6'>and trendy shoe collection!</span>
                        <button type='button' className='btn btn-danger mt-3'>BUY NOW</button>
                        <div className='colourChange mt-3'>
                            <span className='Uspan1' style={{ backgroundColor: "red" }} onClick={() => handleColor("red")}></span>
                            <span className='Uspan2' style={{ backgroundColor: "purple" }} onClick={() => handleColor("purple")}></span>
                            <span className='Uspan3' style={{ backgroundColor: "blue" }} onClick={() => handleColor("blue")}></span>
                            <span className='Uspan4' style={{ backgroundColor: "brown" }} onClick={() => handleColor("brown")}></span>
                        </div>
                    </div>
                    <div className='item-2'>
                        <img className='img-fluid' src={displayImage} alt='...' style={{ height: "100%", width: "100%", filter: `hue-rotate(${getRotate(selectedColor)})` }} />
                    </div>
                    <div className='item-3'>
                        <div className='itemButton1' onClick={() => handleImage(redShoe)}>
                            <img src={redShoe} className='img-fluid' alt='...' style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className='itemButton2' onClick={() => handleImage(select1)}>
                            <img src={select1} className='img-fluid' alt='...' style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className='itemButton3' onClick={() => handleImage(select2)}>
                            <img src={select2} className='img-fluid' alt='...' style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className='itemButton4' onClick={() => handleImage(select3)}>
                            <img src={select3} className='img-fluid' alt='...' style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className='itemButton4' onClick={() => handleImage(select4)}>
                            <img src={select4} className='img-fluid' alt='...' style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className='itemButton4' onClick={() => handleImage(select5)}>
                            <img src={select5} className='img-fluid' alt='...' style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </div>
                <Collection />
                <Men />
                <About />
                <Women />
                <Footer />
            </div>
            {/* <Collection/> */}
        </>
    );
}
