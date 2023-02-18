// import React from "react";
// import { Link } from "react-router-dom";
// const Nav = ()=>{ 
//     return(

//     <ul className="nav-bar">
//         <li><Link to = '/' >Home</Link></li>
//         <li><Link to = '/OverView'>OverView</Link></li>
//         <li><Link to = '/Customer'>Customer</Link></li>
//         <li><Link to = '/Support'>Support</Link></li>
//         <li><Link to = '/Internal'>Internal</Link></li>
//         <li><Link to = '/Utility'>Utility</Link></li>
//     </ul>
// );
// }
// export default Nav;
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
// import { useHref } from 'react-router-dom';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleMenuItemClick = (href) => {
    console.log(href);
    navigate(href);
  }
  console.log(props.details);
  return (
    <>
      <div className="nav-bar">
        {props.details.map((value, index) => (

          <>
            <Button sx={{ color: "white" }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {value.title}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {value.components.map((val) => {
                console.log(val);
                return (<MenuItem onClick={(event) => { console.log("SHreuash"); handleMenuItemClick(val.href) }}>{val.title}</MenuItem>)
              })}
            </Menu>

          </>


        ))};
      </div>
    </>
  );
}