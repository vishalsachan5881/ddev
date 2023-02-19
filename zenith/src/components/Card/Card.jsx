import React from "react";
import Button from '@mui/material/Button';
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
        <Button variant="contained"sx={{m: 2}}>Contained</Button>
        
    </div>
    
    ))};
    </>)
}
export default Card;