import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";



const Header= () => {
  return (
    <div className='header'>
        <div class="organization_name ">
            <p class="organization">Your organization</p>
            <p clas="skill">skill genic</p>
        </div>
        <div class="search">
            <div class="search_child"><IoIosSearch /></div>
            <input placeholder='search' class="input_search"/>
        </div>
        <div className='notification'>
        <IoMdNotificationsOutline />

        </div>
        <div class="profile">
        <CgProfile />

        </div>
    </div>
  );
};

export default Header;