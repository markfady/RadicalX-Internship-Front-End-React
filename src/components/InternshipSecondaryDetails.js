import "./InternshipSecondaryDetails.css"
function InternshipSecondaryDetails(){
    return(
        <>
        <div className="Secondary-Details d-flex pt-5 mb-2">
            <div className="Product-Design ps-5">
                <h5>Product Design GVI</h5>
                <p>Amet minim mollit non deserunt est sit aliqua dolor do amet sint. </p>
            </div>
            <div className="Days">
                <p>120 Days</p>
                <p>(created on 10/12/2021)</p>
            </div>
            <div className="Total">
                <p>20,000</p>
            </div>
            <div className="BarChart">
                <div className="Bar d-flex">
                    <span style={{width:"6px" , height:"14px" , top:"18px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"17.6px" ,top:"14.4px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"20px"   ,top:"12px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"17.6px" ,top:"14.4px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"17.6px" ,top:"14.4px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"14px" ,top:"18px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"14px" ,top:"18px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"18.8px" ,top:"13.2px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"22.4px" ,top:"9.6px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"24px" ,top:"8px"}}></span>
                    <span className="ms-1 special" style={{width:"6px" , height:"27.6px" ,top:"4.4px"}} data-progress="120"></span>
                    <span className="ms-1" style={{width:"6px" , height:"24px" ,top:"8px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"22.4px" ,top:"9.6px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"32px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"27.6px" ,top:"4.4px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"22.4px" ,top:"9.6px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"17.6px" ,top:"14.4px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"20px" ,top:"12px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"14px" ,top:"18px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"10.8px" ,top:"21.2px"}}></span>
                    <span className="ms-1" style={{width:"6px" , height:"6.8px" ,top:"25.2px"}}></span>
                </div>
            </div>
            <div className="Secondary-Details-icons">
            <i className="fa-solid fa-chart-simple px-2"></i>
            <i className="fa-solid fa-users"></i>
            <i className="fa-solid fa-ellipsis px-2"></i>
            </div>
        </div>
        </>
    )
}
export default InternshipSecondaryDetails;