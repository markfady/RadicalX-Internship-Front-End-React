import SideBar from "./SideBar";
import Split from "react-split";
import "./InternshipInsights.css";
function InternshipInsights(){
    return (
        <>
        <Split
          sizes={[20, 80]}
          direction="horizontal"
          cursor="col-resize"
          className="split-flex">
            <SideBar/>              
        {/* Importing SideBar Part of the page Inside Split tag */}
        <div className="container  mt-5">
        <div className="Main-section">
        <p className="Main-paragraph font-weight-bold">Internships</p>
        <i className="fa-solid fa-plus Main-section-icon"></i>
        <button>Create New Internship</button>
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
            <p>Hello</p>
        </div>
        </div>
        </Split>
        </>
    )
}
export default InternshipInsights;