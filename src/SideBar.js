import "./SideBar.css";
import Logo from "../Images/RadicallX-Logo 1.png"
function SideBar(){
    return(
        <>
        <div className="container-fluid pt-5 ps-4 Sidebar-cont">
            <div className="SideBar ">
            <img className="ml-2 ms-4" src={Logo} alt="Logo"/>
            <div className="SideBar-options">
                <ul className="mt-5 SideBar-List d-grid">
                    <div className="options d-flex">
                    <i className="fa-solid fa-boxes-stacked fa-lg me-3"></i>
                    <li className="mb-3">DashBoard</li>
                    </div>
                    <div className="options d-flex">
                    <i className="fa-regular fa-star fa-lg me-2"></i>
                    <li className="mb-3 ps-2">Apperenterships</li>
                    </div>
                    <div className="options active-sidebar d-flex">
                    <i className=" pt-2 fa-solid fa-book-open fa-lg me-2"></i>
                    <li className="mb-3 ps-2 pt-1 active-sidebar">Internships</li>
                    </div>
                    <div className="options d-flex">
                    <i className="fa-solid fa-briefcase fa-lg me-3"></i>
                    <li className="mb-3 ps-1" >Jobs</li>
                    </div>
                    <div className="options d-flex">
                    <i className="fa-solid fa-gear fa-lg me-3"></i>
                    <li className="mb-3 ps-1">Settings</li>
                    </div>
                </ul>
                <p className="SideBar-creator">Adam Scott</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default SideBar;