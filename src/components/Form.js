import "./SearchBar.css"
function Form(props){   //This Dynamic file for Category,Location,RecommendedRoles
    return(
        <>
    <div className="SearchBar">
        <div className="FormDetails"> 
    <p class="Title mb-5">{props.Title}</p>

    <div className="FormContentParent">
        <div className="FormContent">  {/*editing this in SearchBarcss */}
                <i id="first-icon" className={props.first}></i>
                <input id="searchinput" className={props.borderstyle} type={props.type} placeholder={props.details1}/>
        </div>
        <div className="FormContent">  {/*editing this in SearchBarcss */}
                <i id="secondForm-icon" className={props.second}></i>
                <input id="searchinput" className={props.borderstyle} type={props.type2} placeholder={props.details2}/>
        </div>
        <div className="FormContent" id="formlast" >  {/*editing this in SearchBarcss */}
                <i id="thirdForm-icon" className={props.third}></i>
                <input id="searchinput" className={props.borderstyle} type={props.type} placeholder={props.details3}/>
        </div>

    </div>
</div>
</div>
        </>
    )
}
export default Form;

