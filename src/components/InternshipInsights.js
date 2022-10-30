import "./InternshipInsights.css";
import Split from "react-split";
import SideBar from "./SideBar";
import InternshipSecondaryDetails from "./InternshipSecondaryDetails";

function render(props){    // This Function to load component (InternshipSecondaryDetails) 5 times in dynamic way rather than repeating code
                                         //(called on line:71)
    let amountOfComponents=[0,1,2,3,4];
    return(
    Array.from({length: amountOfComponents.length})
    .map((index) => (                            //Map to loop on the array items we can render this component any time now
            <InternshipSecondaryDetails key={index}/>))
        )
}
function InternshipInsights(){
    return (
        <>
        <Split
          sizes={[20, 80]}
          direction="horizontal"
          cursor="col-resize"
          className="split-flex">
            <SideBar/>               {/* Importing SideBar Part of the page Inside Split tag */} 
        <div className="container  mt-5">
        {/* Start of Insights */}
        <div className="Main-section">
            <p className="Main-paragraph font-weight-bold">Internships</p>
        <div className="Main-section-option">
            <i className="fa-solid fa-plus Main-section-icon"></i>
            <button>Create New Internship</button>
        </div>
        </div>
        <div className="Secondary-section mt-5 ms-5 d-flex">
            <div className="Secondary-content">
                <h5>Internship Insights</h5>
                <p>In the eighteenth century the German philosopher Immanuel
                Kant developed a theory of knowledge in which knowledge
                about space can be both a priori and synthetic.</p>
            </div>
            <div className="DuoButtons ms-5">
                <button className="active"> This week</button>
                <button className="ms-3">This month</button>
            </div>
            <div className="Secondary-dates d-flex">
                <i className="fa-solid fa-calendar-days me-2"></i>
                <p>Select dates</p>
            </div>               
    </div>
        {/* End of Insights*/}
        {/* Start of Internship Details */}
        <div className="Secondary-Titles mt-4 ms-5">
            <div className="Titles">
                <p className="text-start">Internship Title</p>
                <div className="Titles-options ps-3">
                    <i className="fa-solid fa-chevron-down me-5"></i>
                    <p>Completion Period</p>
                    <i className="fa-solid fa-chevron-down ms-4"></i>
                </div>
                <div className="Titles-options ps-4">
                    <p className="ms-4">Total Enrolled</p>
                    <i className="fa-solid fa-chevron-down ms-4"></i>
                </div>
                <div className="Titles-options ps-3">
                    <p className="text-nowrap ">Qualified Candidates</p>
                    <i className="fa-solid fa-chevron-down  ms-5"></i>
                </div>
            </div>
        </div>
        {/* End of Internship Details */}
        {/* Start of Details */}
        {
        render()
        }
        {/* End of Details */}
        </div>
        </Split>
        </>
    )
}
export default InternshipInsights;