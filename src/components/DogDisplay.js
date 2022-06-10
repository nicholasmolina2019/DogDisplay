import React from "react";


const DogDisplay = ({dogs}) => {

    const loaded = ()=>{

        return (
            <>
            <h3>Dog</h3>
            <img src={dogs}/>
            
            </>
        )
    }

const loading = () => {
    return <h1>No Dogs To Display</h1>
}

return dogs ? loaded() : loading();
};

export default DogDisplay;