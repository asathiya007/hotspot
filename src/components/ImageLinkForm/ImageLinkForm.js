import React, {useState} from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onPictureSubmit}) => {

    const [input, setInput] = useState(""); 

    return (    
        <div className="ma2 mt0">
            <p className="f3 pa2 mb1 pl4 pr4 fw6">HotSpot detects wildfires in aerial images captured by planes, drones, satellites, etc. Give it a try!</p>
            <div className="pa3">
                <form className="form pa4 br3 shadow-5 center" style={{minWidth: "300px"}} onSubmit={e => {
                    e.preventDefault(); 
                    onPictureSubmit(input);
                }}>
                    <input className="f4 pa2 w-70" type="text" placeholder="insert image URL" onChange={e => setInput(e.target.value)}/>
                    <button className="grow f4 link ph3 pv2 dib white bg-light-purple" type="submit">Detect</button>
                </form>
            </div>
        </div>
    );
};

export default ImageLinkForm; 