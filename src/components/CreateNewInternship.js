import "./CreateNewInternship.css";
import { Link } from "react-router-dom";
import Options from "./Options.js"
import Showhidetab from"./Buttons.js"
import React, {useEffect } from 'react';



function CreateNewInternship(){
    useEffect(()=> {
        let x=document.querySelector(".withBorder");
        let y= document.querySelector("#last");
            y.addEventListener('click',function (){
                if(y.classList.contains("fa-circle-check")){ //if the last paragraph contaion the icon check 
                    x.removeAttribute('nav-link');
                }
                    else{
                        x.classList.add('ps-1' ,'nav-link');
                        x.style.cursor ="pointer";

                    }
                }
            );
        },[]);
    return( 
        <div className="SecondPage">
            {/* Start of Title section */}
            <div className="Intro ">
                <ul className="NewIntern d-flex justify-content-between  mt-2 ">
                <li className="firstli"> 
                <i className="fa-solid fa-arrow-left arrowleft">
                 
                </i>
                <Link className="Back" to ="/">
                Back
                </Link>
                </li>
                <li className="Title">Add New Internship</li>
                <li className="ps-1 withBorder">
                    Continue to Next Step
                    <i className="fa-solid fa-arrow-right ps-2"></i>
                </li>
                </ul>
            </div>
            {/* End of Title section */}
            {/* Start of progressBar */}
            <div className="progress mt-5 mx-4 position-relative">
                <ul className="mini position-absolute ">
                    <li>
                        Internship Description
                    </li>
                    <li className="nav-link disabled">
                        Internship Guide
                    </li>
                    <li className="nav-link disabled">
                        Surveys
                    </li>
                    <li className="nav-link disabled">
                        Settings
                    </li>
                </ul>
            </div>
              {/* End of progressBar */}
              <Showhidetab/> 
                <Options 
                name="Category"
                class="after"
                />
                <Options
                name="Description"
                class="after"
                />
            
                <Options
                name="Location"
                class="after"
                />
           
                <Options
                name="Benefits"
                class="after"
                />
           
                <Options
                name="Intro Video"
                class="after"
                />
            
                <Options
                name="Mentor Details"
                class="after"
                />
           
                <Options
                name="Recommended Roles"
                class="after"
                />
           
                <Options
                name="Web Links &Resources"
                class="after"
                />
            

        </div>    

    )   
}

export default CreateNewInternship;