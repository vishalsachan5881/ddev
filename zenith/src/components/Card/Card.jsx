import React from "react";
import './Card.css';
const Card = (props)=>{
    return(
    <>

    {props.details.map((value, index)=>(
    <div className="card" key={index}>
        <div>
            <p className="card-title">{value.title}</p>
            <p className="description">{value.description}</p>
        </div>
    </div>
    
    ))};
    </>)
}
export default Card;