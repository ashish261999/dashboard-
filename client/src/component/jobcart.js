import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";
import { AiFillThunderbolt } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

const Jobcart = (props) => {
  return (
    <div class="body_main">
      <div class="body_header_main">
        <div class="iamge_body">
          <p className="figma_icon">
            <FiFigma />
          </p>
        </div>
        <div class="dots">
          <button class="btn_dot" type="button">
            <HiDotsVertical />
          </button>
        </div>
      </div>
      <div class="body_containt">
        <div class="body_containt_title">
          <p class="job_title">{props.data.title}</p>
        </div>

        <div class="body_location">
          <div clsaa="location_icon">
           
            <CiShoppingTag />
          </div>
          <div class="location_name">{props.data.salary}</div>
        </div>

        <div class="body_salary">
          <div clsaa="salary_icon">
            <MdLocationOn />
          </div>
          <div class="salary_name">{props.data.location}</div>
        </div>

        <div class="body_experiance">
          <div clsaa="experiance_icon">
            <AiFillThunderbolt />
          </div>
          <div class="experiance_name">
            {props.data.description} year of experiance
          </div>
        </div>
      </div>
      <div class="body_footer">
        <div class="body_foorter_first">14 Application</div>
        <div class="body_foorter_second">12 in process</div>
        <div class="body_foorter_third"> 16 selected</div>
      </div>
    </div>
  );
};

export default Jobcart;
