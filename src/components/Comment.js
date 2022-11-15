import "./SearchBar.css"
function Comment(props){   //This Dynamic file for Category,Location,RecommendedRoles
    return(
        <>
    <div className="SearchBar">
        <div className="Details"> 
    <p class="Title mb-5">{props.Title}</p>
    <div className="content">
    <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Description"></textarea>
      </div>
    </div>
    </div>
</div>
        </>
    )
}
export default Comment;