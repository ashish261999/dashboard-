import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



const Sidebar_labels = (props) => {
    const item = props.item;
  return (
  
         <NavLink to={item.path} key={props.index} className="link" activeclassName="active">
                <div className='icon'>{item.icons}</div>
                <div className='link_text'>{item.name}</div>
                <div className='arrow'> <MdOutlineKeyboardArrowRight /></div>
            </NavLink>
    
  );
};

export default Sidebar_labels;