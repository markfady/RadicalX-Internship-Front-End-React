import "./SearchBar.css"
function SearchBar(props){   //This Dynamic file for Category,Location,RecommendedRoles
    return(
        <>
    <div className="SearchBar">
        <div className="Details"> 
    <p class="Title mb-5">{props.Title}</p>
    <div className="content">
    <i id="first-icon" className={props.first}></i>
    <input id="searchinput" className={props.borderstyle} type={props.type} placeholder={props.details}/>
    <i id="second-icon" className={props.second}></i>

    </div>
    {/* The next part is custom for Category tab so we take all it's value as props in the category part not in Location*/}
    <div className={props.custom}>
        <div id={props.webandlinks} className={props.customoption1}>
        <p>{props.minititle1}</p>
        <i className={props.miniicon1}></i>
        </div>
        <div className={props.customoption2}>
        <p>{props.minititle2}</p>
        <i className={props.miniicon2}></i>
        </div>
    </div>
    </div>
</div>
        </>
    )
}
export default SearchBar;