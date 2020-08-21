import React from "react";
import "./FireRecognition.css";

const FireRecognition = ({imageUrl, error}) => {
    if (!imageUrl || imageUrl === "" || error) {
        return <div></div>; 
    }

    return (
        <div className="center pa1">
            <div className="absolute mb4">
                <img id="inputimage" src={imageUrl} alt="" width="500px" height="auto" />
            </div>
        </div>
    );
};

export default FireRecognition; 