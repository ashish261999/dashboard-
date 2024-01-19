import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GrTask } from "react-icons/gr";

const PopupJob = (props) => {
  const [formn, setformn] = useState(0);

  const [data , setData] = useState({
    jobTitle : "",
    salary : "",
    location : "",
    yoi : 0
  });

  const submitData = async ()=>{
    console.log(data , JSON.stringify(data))
    data.title = data.jobTitle;
    data.description = data.yoi

    let res = await fetch('https://serve-rosy.vercel.app//jobs/jobs' , {
        method : 'post',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    })

    res = await res.json()
    console.log(res)
  }

  const close = () => {
    props.setvis(false);
    setformn(0);
  };
  const getForm = () => {
    if (formn === 0) {
      return (
        <div className="formno_first">
          <div className="close_and_title">
            <div>
              <h1 className="create_a_job">Create a job</h1>
            </div>
            <div className="close_btn">
              <IoIosCloseCircleOutline onClick={close} />
            </div>
          </div>

          <div className="create_a_job_second_div">
            <div className="create_a_job_second_div_inner">
              <div className="task_icon">
                <GrTask />
              </div>
              <div>
                <button
                  className=" job_ai_btn"
                  onClick={() => {
                    setformn(1);
                  }}
                  type="submit"
                >
                  Post Job with Ai
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (formn === 1) {
      return (
        <div className="formno_second">
          <div className="close_and_title_2">
            <div>
              <h1 className="create_a_job">Create a job</h1>
            </div>
            <div className="close_btn_2">
              <IoIosCloseCircleOutline onClick={close} />
            </div>
          </div>
          <div className="header3">
            <div className="one_two_three">
              <div className="first_one">
                <p className="one">1</p>
                <p className="one_content"> Job Application</p>
              </div>
              <div className="first_two">
                <p className="two">2</p>
                <p className="two_content"> Job Description</p>
              </div>
              <div className="first_three">
                <p className="three">3</p>
                <p className="three_content"> Interview Process</p>
              </div>
            </div>
          </div>
          <div className="para_form2">
            <p className="para_form2_2">
              A job repersent a neew opening , an opening or a vacancy listing.
              creating a job will allow you to add candidates to that job and
              advertise it on your career page and job boards.
            </p>
          </div>
          <div className="form-container">
            <form className="grid-form">
              <div className="form_left">
                <div>
                  <p className="make_it_bold">Position name</p>
                  <label>
                  
                    <input className="input_field" type="text" onChange={(e)=>{setData({...data , jobTitle:e.target.value}) ; console.log(data);}}></input>
                  </label>
                </div>
                <div>
                  <p className="make_it_bold">Job Pipeline</p>

                  <label>
                    <select className="input_field">
                      <option value="per_hour">Default job pipeline</option>
                    </select>
                  </label>
                </div>
                <div>
                  <p className="make_it_bold">contract Detail</p>

                  <label>
                    <select className="input_field">
                      <option value="per_hour">Full time</option>
                      <option value="per_month">Part time</option>
                    </select>
                  </label>
                </div>
                <div>
                  <p className="make_it_bold">Add maximum salary</p>
                  <label>
                    <input  className="input_field" type="text" onChange={(e)=>{setData({...data , salary:e.target.value}) ; console.log(data);}}/>
                  </label>
                </div>
                <div>
                  <p className="make_it_bold">select Frequency</p>
                  <label className="input_field">
                    <select>
                      <option value="per_hour">per month</option>
                      <option value="per_month">per year</option>
                      <option value="per_year">per quarter</option>
                    </select>
                  </label>
                </div>
              </div>

              <div>
                <div>
                  <p className="make_it_bold">Company Name</p>
                  <label className="input_field">
                    <select>
                      <option value="per_hour">Amir</option>
                      <option value="per_month">Anand</option>
                      <option value="per_year">Ankur</option>
                    </select>
                  </label>
                </div>
                <div>
                  <p className="make_it_bold">Add location</p>
                  <label className="input_field">
                  
                    <input type="text" onChange={(e)=>{setData({...data , location : e.target.value}) ; console.log(data);}}></input>
                  </label >
                </div>
                <div>
                  <p className="make_it_bold">Add minimun salary</p>
                  <label className="input_field">
                    <select >
                      <option value="per_hour">1500</option>
                      <option value="per_month">2000</option>
                      <option value="per_year">2500</option>
                    </select>
                  </label>
                </div>
                <div>
                  <p className="make_it_bold">expriance</p>

                  <label className="input_field">
                    <input type="text" onChange={(e)=>{setData({...data , yoi : e.target.value}) ; console.log(data);}}></input>
                  </label>
                </div>
              </div>

              <button className="form_second_btn_last"
                onClick={() => {
                  setformn(2);
                }}
                type="submit"
              >
                Save & Next
              </button>
            </form>
          </div>
        </div>
      );
    }

    if (formn === 2) {
      return (
        <div className="form_three">
          <div className="close_and_title_2">
            <div>
              <h1 className="create_a_job">Create a job</h1>
            </div>
            <div className="close_btn_2">
              <IoIosCloseCircleOutline onClick={close} />
            </div>
          </div>
          <div className="header3">
            <div className="one_two_three">
              <div className="first_one">
                <p className="one">1</p>
                <p className="one_content"> Job Application</p>
              </div>
              <div className="first_two">
                <p className="two">2</p>
                <p className="two_content"> Job Description</p>
              </div>
              <div className="first_three">
                <p className="three">3</p>
                <p className="three_content"> Interview Process</p>
              </div>
            </div>
          </div>
          <div className="para_form2">
            <p className="para_form2_2">
              A job repersent a neew opening , an opening or a vacancy listing.
              creating a job will allow you to add candidates to that job and
              advertise it on your career page and job boards.
            </p>
          </div>
          <div  className="form_3main">
            <div className="form_3">
              <div className="both">
                <p className="skill_required">Skill required</p>
                <button className="ai">Suggest with Ai</button>
              </div>
              <form>
               <input 
               className="text-form3"
               type="text"
               />
              </form>
            </div>
            <div>
            <div className="both">
                <p className="skill_required">Intern  responsibilities</p>
                <button className="ai">
                    Edit with Ai</button>
              </div>
              <form>
               <input 
               className="text-form32"
               type="text"
               />
              </form>
            </div>
          </div>
          <button  className=" form_second_btn_last "onClick={()=>{
            setformn(3);
          }} type ="submit">Save & Next</button>
        </div>
      );
    }
    if (formn === 3) {
      return (
        <div className="form_four">
            <div className="close_and_title_2">
            <div>
              <h1 className="create_a_job">Create a job</h1>
            </div>
            <div className="close_btn_2">
              <IoIosCloseCircleOutline onClick={close} />
            </div>
          </div>
          <div className="header3">
            <div className="one_two_three">
              <div className="first_one">
                <p className="one">1</p>
                <p className="one_content"> Job Application</p>
              </div>
              <div className="first_two">
                <p className="two">2</p>
                <p className="two_content"> Job Description</p>
              </div>
              <div className="first_three">
                <p className="three">3</p>
                <p className="three_content"> Interview Process</p>
              </div>
            </div>
          </div>
          <div className="para_form2">
            <p className="para_form2_2">
              A job repersent a neew opening , an opening or a vacancy listing.
              creating a job will allow you to add candidates to that job and
              advertise it on your career page and job boards.
            </p>
          </div>
          <div className="form_4">
            <div className="top_1">
                
            <div>
              <div>
                <p>Kindely check the skil</p>
                {/* <button>Suggest with Ai</button> */}
              </div>
              <form>
               <input className="form_4input"
               type="text"
               />
              </form>
            </div>
            <div>
              <div>
                <p>Any Plateform or Qualification</p>
                {/* <button>Suggest with Ai</button> */}
              </div>
              <form>
               <input className="form_4input"
               type="text"
               />
              </form>
            </div>
            </div>
            <div className="form_42">
            <div>
              <div className="both">
                <p>Finalise Questioner</p>
                  <button className="box">Suggest with Ai</button>
                
              </div>
              <form>
               <input className="form_4input2"
               type="text"
               />
              </form>
            </div>
            <div>
              <div className="both">
                <p>Share Availiblity</p>
                  <button className="box">Suggest with Ai</button>
                
              </div>
              <form>
               <input  className="form_4input2"
               type="text"
               />
              </form>
            </div>
            </div>
            
          </div>
          <div>
            <button className=" form_second_btn_last " onClick={()=>{
                submitData();
                close();
            }} type="submit">Submit</button>
          </div>
        </div>
      );
    }
  };
  return (
    <div
      className="modal_container"
      style={{ display: props.viss ? "block" : "none" }}
    >
      <div className="modal_form">{getForm()}</div>
    </div>
  );
};

export default PopupJob;
