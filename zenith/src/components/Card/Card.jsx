import React from "react";
import Button from '@mui/material/Button';
import './Card.css';
import { useNavigate } from "react-router-dom";


 

const Card = (props)=>{
    const navigate = useNavigate();
    function handleMenuItemClick(href) {
        navigate(href);
    }
    return(
    <>
    {props.details.map((value, index)=>(
    <div className="card" key={index}>
        <div>
            <p className="card-title">{value.title}</p>
            <p className="description">{value.description}</p>
        </div>
        <Button variant="contained"sx={{m: 2}} onClick={(event)=>{handleMenuItemClick(value.href)}}   >Contained</Button>
        
    </div>
    
    ))};
    </>)
}
export default Card;