import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Comment from"./Comment"
import Form from "./Form"
import "./Buttons.css";

 function Showhidetab() {
  
  const [showtab, setShowtab] = useState()

   const handletab = (e) => {
    setShowtab(e);
  };
  let afterP=document.querySelectorAll(".after"); //Selecting the paragraph in options.js
  let border=document.querySelectorAll(".option-text");
     document.querySelectorAll(".toogle").forEach((btn) => {  //Looping on all toogle classes for the li elements
      btn.addEventListener("mouseover", function (event) {             //Using Mouseover event when mouse on the button (the icon will be generated with border)
        for(let i=0;i<8;i++){                   //Looping on the current Target after click event
          if(event.currentTarget.id==i){        //if the current target equals to the i value 
            border[i].classList.add("purple-border")  //Add Purple Border after pressing on the button
            afterP[i-1].innerHTML=`<i class="fa-solid fa-circle-check"></i>`; //Icon will be displayed on the previous item
          }
          else{
            border[i].classList.remove("purple-border");  //Remove Purple Border After Changing the target id
          }
             //As in Figma Design the check icon appears next to the title after we press the next title except the final one 
          if(event.currentTarget.id==7){ //(index of 6,7)
            afterP[6].innerHTML=`<i class="fa-solid fa-circle-check"></i>`; //The final one :Shows the icon next to its paragraph when we press on it and the previous one too 
            afterP[7].innerHTML=`<i class="fa-solid fa-circle-check"></i>`; 
          }
        }
      });
    });
  return (
    <>
      <div className="row">
        <div className="col-sm-12 bg-light">
          <ul className="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist">
            <li
            className="toogle"
            id="0"
            >
              <button
                className={showtab === 1 ? "change" : "default"}
                onClick={() => handletab(1)}
              >
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </li>

            <li
            className="toogle"
            id="1"
            >
              <button
                className={showtab === 2 ? " change" : "default"}
                onClick={() => handletab(2)}
              >
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </li>

            <li
            id="2"
            className="toogle">
              <button
                className={showtab === 3 ? "change" : "default"}
                onClick={() => handletab(3)}
              >
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </li>

            <li
            id="3"
            className="toogle">
              <button
                className={showtab === 4 ? "change" : "default"}
                onClick={() => handletab(4)}
              >
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </li>

            <li
            id="4"
            className="toogle">
              <button
                className={showtab === 5 ? "change" : "default"}
                onClick={() => handletab(5)}
              >
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </li>

            <li
            id="5"
            className="toogle">
              <button
                className={showtab === 6 ? "change" : "default"}
                onClick={() => handletab(6)}
              >
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </li>

            <li
            id="6"
            className="toogle">
              <button
                className={showtab === 7 ? "change" : "default"}
                onClick={() => handletab(7)}
              >
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </li>
            
            <li
            id="7"
            className="toogle">
              <button
                id="last"
                className={showtab === 8 ? "change" : "default"}
                onClick={() => handletab(8)}
              >
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </li>
          </ul>

          <div className="position-relative">
            {/* start tab 1*/}
            
            <div
              className={
                showtab ===1
                  ? "tab-pane fade show active"
                  : "tab-pane fade" //we can add show after fade to make it as default opened tab
              }
            >
            <SearchBar    //Using SearchBarJS and sending props to it
              Title="Category"
              borderstyle="rounded-3"
              type="search"
              details="Search Category"
              second="fa-solid fa-magnifying-glass"
              custom="bullets  mt-4 mx-2"  //Styles inside SearchBar.css
              customoption1="bullets-options rounded-pill"
              minititle1="Technology"
              miniicon1="fa-solid fa-xmark"
              customoption2="bullets-options rounded-pill"
              minititle2="Development"
              miniicon2="fa-solid fa-xmark"
              />
            </div>
            {/* close tab 1*/}

            {/* start tab 2*/}
            <div
              className={
                showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
              <Comment
              Title="Description"
              borderstyle="rounded"
              />
            </div>
            {/* close tab 2*/}

            {/* start tab 3*/}
            <div
              className={
                showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
            <SearchBar
                Title="Location"
                borderstyle="rounded-3"
                type="search"
                first="fa-solid fa-location-dot"
                details="Select Location"
                second="fa-solid fa-caret-down"
              />
            </div>
            {/* close tab 3*/}
            {/* start tab 4*/}
            <div
              className={
                showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
            <Comment
              Title="Benefits"
              borderstyle="rounded"
              />
            </div>
            {/* close tab 4*/}

            {/* start tab 5*/}
            <div
              className={
                showtab === 5 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
             <SearchBar    //Using SearchBarJS and sending props to it
              Title="Intro Video"
              borderstyle="rounded-3 text-center dashed" //Adding dashed class to css in SearchBar for dashed border and margin of the second icon
              details="Drag n drop to upload your video"
              second="fa-solid fa-file-arrow-up"
              custom="bullets  mt-4 mx-2"
              customoption1="bullets-options  border-light bg-light" //Remove the border and background color 
              minititle1="Intro Video.mp4"
              miniicon1="fa-solid fa-xmark"
              />
            </div>
            {/* close tab 5*/}

            {/* start tab 6*/}
            <div
              className={
                showtab === 6 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
              <p>Mentor Details Content</p>
              <Form
              Title="Mentor Details"
              borderstyle="rounded-3"
              type="text"

              first="fa-solid fa-user"
              details1="Name"

              second="fa-regular fa-envelope"
              details2="Email address"
              type2="email"

              third="fa-solid fa-link"
              details3="LinkedIn URL (optional)"
              />
            </div>
            {/* close tab 6*/}

            {/* start tab 7*/}
            <div
              className={
                showtab === 7 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
            <SearchBar    //Using SearchBarJS and sending props to it
              Title="Recommended Roles"
              borderstyle="rounded-3"
              details="Search Roles"
              second="fa-solid fa-magnifying-glass"
              custom="bullets  mt-4 mx-2"  
              customoption1="bullets-options rounded-pill" //Rounded bootstrap class
              minititle1="FullStack Developer"
              miniicon1="fa-solid fa-xmark"
              customoption2="bullets-options rounded-pill"
              minititle2="Backend Developer"
              miniicon2="fa-solid fa-xmark"
              />
            </div>
            {/* close tab 7*/}

            {/* start tab 8*/}
            <div
              className={
                showtab === 8 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
              <SearchBar    //Using SearchBarJS and sending props to it
              Title="Web Links&Resources Content"
              borderstyle="rounded-3"
              webandlinks="customoption1"
              first="fa-solid fa-link"
              details="Add URL"
              custom="bullets  mt-4 mx-2"  
              customoption1="bullets-options rounded-3" //Rounded bootstrap class
              minititle1="Add URL"
              miniicon1="fa-solid fa-plus"
              />
            </div>
            {/* close tab 8*/}
          </div>
        </div>
      </div>
    </>
  );
}
export default Showhidetab;
