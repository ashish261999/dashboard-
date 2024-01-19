import React from 'react';

import { CiHome } from "react-icons/ci";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LuActivitySquare } from "react-icons/lu";
import { IoFolderSharp } from "react-icons/io5";
import { FaBridge } from "react-icons/fa6";
import { MdNewReleases } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import Sidebar_labels from './sidebar_label';


const Sidebar = () => {
    const menuItem = [
        {
            path:"/",
            name:"home",
            icons:<CiHome />
        },
        {
            path:"/chat",
            name:"chat",
            icons:<HiOutlineChatBubbleLeftRight />
        },
        {
            path:"/activities",
            name:"activities",
            icons:<LuActivitySquare />

        }
    ];
    const menuItem2 = [
        {
            path:"/job",
            name:"job",
            icons:<IoFolderSharp />

        },
        {
            path:"/interviews",
            name:"Interviews",
            icons:<FaBridge />
        },
        {
            path:"/new_hilres",
            name:"new hilres",
            icons:<MdNewReleases />
        }
    ]
        const menuItem3 = [
        {
            path:"/company_profile",
            name:"company profile",
            icons:<FaSchoolFlag />

        },
        {
            path:"/community",
            name:"community",
            icons:<MdGroups2 />

        },
        {
            path:"/team",
            name:"team",
            icons:<BsMicrosoftTeams />
        },
        {
            path:"/hr_tool_box",
            name:"hr tool box",
            icons:<FaToolbox />
        },
        {
            path:"/report",
            name:"report",
            icons:<IoStatsChartSharp />
        },
        {
            path:"/setting",
            name:"setting",
            icons:<CiSettings />
        }
    ]
    
  return (
    <div class="container">
      <div class='sidebar'>
        <div class='logo'>
            <h1>Logo</h1>
        </div>
        <div class="top_contianer">
       {
        menuItem.map((item, index)=>(
            // <NavLink to={item.path}
            //  key={index}
            //   className="link"
            //    activeclassName="active"
            //    >
            //     <div className='icon'>
            //         {item.icons}
            //         </div>
            //     <div className='link_text'>
            //         {item.name}
            //         </div>
            // </NavLink>
            <Sidebar_labels item= {item} index={index}/>
        ))
       }
       </div>
       <div className='mid_container'>
        <p class="paragraph_container">RECRUITMENT</p>
        {
       menuItem2.map((item, index)=>(
            // <NavLink to={item.path} key={index} className="link" activeclassName="active">
            //     <div className='icon'>{item.icons}</div>
            //     <div className='link_text'>{item.name}</div>
            // </NavLink>
            <Sidebar_labels item= {item} index={index}/>
        ))
       }
       </div>
       <div className='bottom_container'>
        <p class="paragraph_container">ORGANIZATION</p>
        {
       menuItem3.map((item, index)=>(
            // <NavLink to={item.path} key={index} className="link" activeclassName="active">
            //     <div className='icon'>{item.icons}</div>
            //     <div className='link_text'>{item.name}</div>
            // </NavLink>
            <Sidebar_labels item= {item} index={index}/>

        ))
       }
       </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
