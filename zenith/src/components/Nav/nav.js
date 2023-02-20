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
  // const open = Boolean(anchorEl);
  var [openBooleanArray, setOpenBooleanArray] = React.useState(props.details.map((value, index) => {
    return false;
  }));
  // setOpenBooleanArray(props.details.map((value, index) => {
  //   return false;
  // }), [anchorEl])

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    openBooleanArray[index] = true;
    setOpenBooleanArray(openBooleanArray);
  };
  const handleClose = (index) => {
    openBooleanArray[index] = false;
    setOpenBooleanArray(openBooleanArray);
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleMenuItemClick = (href) => {
    console.log(href);
    navigate(href);
  }

  console.log(openBooleanArray);
  return (
    <>
      <div className="nav-bar">
        {props.details.map((value, index) => (

          <>
            <Button sx={{ color: "white" }}
              id="basic-button"
              aria-controls={openBooleanArray[index] ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openBooleanArray[index] ? 'true' : undefined}
              onClick={(event) => {
                handleClick(event, index);
              }}
            >
              {value.title}
            </Button>
            <Menu
              key={value.title + index}
              anchorEl={anchorEl}
              open={openBooleanArray[index]}
              onClose={() => { handleClose(index) }}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {value.components.map((val, index) => (<MenuItem key={val.title + index} onClick={(event) => {  handleMenuItemClick(val.href) }}>{val.title}</MenuItem>)
              )}
            </Menu>

          </>


        ))};
      </div>
    </>
  );
}