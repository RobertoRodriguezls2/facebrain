import React from 'react';
import './FaceRecognition.css';



const FaceRecognition = ({imageUrl, box}) => {
    const faces = box.map((face, i) => {return <div key={i} className='bounding-box' style={{top: face.topRow, right: face.rightCol, bottom: face.bottomRow, left: face.leftCol}}></div>})
    return (
        <div className='center ma '>
            <div style={{position: "relative"}}>
            <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
            
            {
                box.map((box, i) => {
                    const { topRow, rightCol, bottomRow, leftCol} = box;
                    return (<div key={i} id="face" className='bounding-box' style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>);
    
                })
                

            }
            {faces}
            
            
            {/* <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div> */}
            </div>
            
        </div>
    )
}

export default FaceRecognition;