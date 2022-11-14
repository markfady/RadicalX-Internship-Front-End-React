import "./Options.css"
function Options(props){
    return(
        <>
            <div className="options mt-5 mb-3">
                <div className="option-parent" >
                    <div className="option-details px-2">
                    <i className="fa-solid fa-bars"></i>
                    <div className="option-text d-flex justify-content-start">
                    <p className="pl-5 display-block">{props.name}</p> {/* Using props to make it dynamic not to repeate code for only changing name */}
                    <p className={props.class}></p>
                    
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Options;