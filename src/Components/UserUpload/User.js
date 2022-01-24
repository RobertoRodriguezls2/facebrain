
import React, { createContext, useState, useContext } from "react";
import FaceRecognition from "../FaceRecognittion/FaceRecognition";

const Context = createContext("Default Value");
const value = "";

const User = () => {
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                value = setImgData(reader.result);
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
        
    };



    return (

        
        <div className="register_wrapper">
            <div className="register_player_column_layout_one">
                <div className="register_player_Twocolumn_layout_two">
                    <form className="myForm">
                        <div className="formInstructionsDiv formElement">
                            <div className="register_profile_image">
                                <input id="profilePic" type="file" onChange={onChangePicture} />
                            </div>

                            <div className="previewProfilePic">
                                <img className="playerProfilePic_home_tile" src={imgData} width='500px' height='auto' />
                                
                               
                               
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default User;

export function Main() {
    
  
    return (
      <Context.Provider value={value}>
        <MyComponent />
      </Context.Provider>
    );
  }

  
  function MyComponent() {
    const value = useContext(Context);
  
    return <span>{value}</span>;
  }