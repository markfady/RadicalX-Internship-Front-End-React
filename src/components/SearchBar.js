import "./SearchBar.css"
function SearchBar(props){   //This Dynamic file for Category,Location,RecommendedRoles
    return(
        <>
    <div className="SearchBar">
        <div className="Details"> 
    <p class="Title mb-5">{props.Title}</p>
    <div className="content">
    <i className={props.first}></i>
    <input className="searchinput" type="search" placeholder={props.details} />
    <i id="second-icon" className={props.second}></i>
    </div>
    <div className="bullets d-flex mt-4 mx-2">
        <div className="bullets-options d-flex">
        <p>Technology</p>
        <i class="fa-solid fa-xmark"></i>
        </div>
        <div className="bullets-options d-flex">
        <p>Development</p>
        <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    </div>
</div>
        </>
    )
}
export default SearchBar;