import React, { useState } from 'react';
import Grid from './grid';
import Popupjob from "./popup_job";


const Body= () => {
    const [viss ,setviss]=useState(false);
    const handle = ()=>{
        setviss(true)
    }
  return (
    <div class="body">
        <div class="body_header">
            <div class="first_div">
                <hi class="first_title">Active Jobs</hi>
            </div>
            <div class="active_body">
                <p className='active_body_para'>Active</p>
            </div>
            <div class="create_job">
            <button   onClick={handle} class ="btn_job " type="submit">Create Job</button>
               <Popupjob viss={viss} setvis={setviss}/>
            </div >
       
    </div>
    <div>
        <Grid/>
    </div>
    </div>
  );
};

export default Body;