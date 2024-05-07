import React from "react";
import '../Css_Styles/Cards.css';
import { FaShoppingCart } from "react-icons/fa";



export const Cards = (props) => {
    const { id, cardTitle, cardText1, cardText2, cardText3, image } = props;
    return (
        <>
            <div className="card cardContainer" key={id}>
                <div className="card-body" style={{ textAlign: "left" }}>
                    <h6 className="text-white" style={{fontWeight:"bolder"}}>{cardTitle}</h6>
                    <h6 className="text-white" style={{ fontWeight: "normal" }}>{cardText1}</h6>
                    <h6 className="text-white" style={{ fontWeight: "normal" }}>{cardText2}</h6>
                    <h6 className="text-white" style={{ fontWeight: "normal" }}>$ {cardText3}</h6>
                    <img src={image} className="imgContent" style={{ height: "135px", width: "90%" }} alt="..." />
                    <div style={{ border: "1px solid red", height: "37px", width: "37px", position: "absolute", right: "0px", padding: "5px", backgroundColor: "red", borderTopLeftRadius: "10px", borderBottomRightRadius: "5px" }}>
                        <FaShoppingCart style={{ fontSize: '24px', color: 'white', position: 'absolute', bottom: '5px', right: '0px', left: "5px" }} />
                    </div>
                </div>
            </div>

        </>
    );
}