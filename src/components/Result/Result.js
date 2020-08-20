import React from "react";

const Result = ({probability, classification}) => {

    if (!probability || !classification) {
        return (
            <div></div>
        );
    }

    if (classification === "fire") {
        return (
            <div className="flex justify-center">
                <p className="f2 white bg-red br3" style={{width: "300px"}}>{(probability * 100).toFixed(2)}% {classification}</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center">
            <p className="f2 white bg-green br3" style={{width: "320px"}}>{(probability * 100).toFixed(2)}% {classification}</p>
        </div>
    );
};

export default Result;