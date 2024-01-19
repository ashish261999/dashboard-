import React, { useEffect, useState } from "react";
import Jobcart from "./jobcart";

 const createjobs =(jobs)=>{
    const out = [];
    for(let i in jobs){
        let j = jobs [i];
        out.push(<Jobcart data={jobs[i]}/>)

    }
    return out;
 }
const Grid = () => {
  const [jobs, setjobs] = useState([]);
    useEffect(()=>{
            fetch("https://serve-rosy.vercel.app/jobs/jobs")
            .then((response)=>{
            return response.json()    
            }).then((data)=>{
                setjobs(data);
                    console.log(data);
            })
    },[])
 
  return (
   <div className="job_grid_class">
    
   {createjobs(jobs)}
   </div>
  );
};

export default Grid;
