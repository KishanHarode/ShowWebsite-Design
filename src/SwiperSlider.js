import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import SectionCard from './Project_Components/SectionCard';
import MenSelect6 from './Assets/MenSelect6.jpeg';
import MenSelect8 from './Assets/MenSelect8.jpeg';
import MenSelect11 from './Assets/MenSelect11.jpeg';
import MenSelect13 from './Assets/MenSelect13.jpeg';
import WomenSelect10 from './Assets/WomenSelect11.jpeg';
import WomenSelect11 from './Assets/WomenSelect12.jpeg';
const SwiperSlider = () => {
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
    <> <div className='container-fluid border border-danger p-1 '>
       <Swiper navigation={true} 
         spaceBetween={50}
         slidesPerView={3}
         breakpoints={{
            375:{
                slidesPerView:1
            },
            600:{
                slidesPerView:2
            },
            1000:{
                slidesPerView:3
            }
         }}
        
        modules={[Navigation]} speed={800} className="mySwiper">
        {
            SectionCards.map((card)=>{
                return(
                 <>
                   <SwiperSlide key={card.id}>
                   <SectionCard id={card.id} imageSource={card.imageSource} card_title1={card.card_title1} card_text={card.card_text} card_title2={card.card_title2}/>
                   </SwiperSlide>
                 </>
                );
            })
        }
      </Swiper>
      </div>
    </>
  )
}

export default SwiperSlider