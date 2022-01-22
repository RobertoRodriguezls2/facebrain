import React from "react";



const FaceCounter = ({ total }) => {



    return (
        <div>
            <div className="white f3 ">
                {/* {'Total faces counted:'} */}
                {(() => {
                    if (total > 1) {
                        return (
                            <p>Total Faces found:</p>
                            
                        )
                    }
                    else if(total === 1){
                        return (<p>Face Found:</p>);
                        
                    }
                    else {
                        return <p>No faces found</p>
                    }

                    return null;
                })()}

            </div>
            <div className="white f1 ">
                {total}

            </div>
        </div>
    );
}

export default FaceCounter;
