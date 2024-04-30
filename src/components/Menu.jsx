import { NavLink } from "react-router-dom"
import Icon from "../font-icon/Icon"
import user from '../img/user.png'

function Menu() {
  return (
    <>
        <div className="AZ-box AZ-sidebar-menu sidebar-mobile mb-3 d-flex flex-column justify-content-between" >
            <div>
                <div className="img-profile AZ-img-container mx-auto">
                    <div className="AZ-img-container-inner AZ-img-cover">
                        <img src={user} alt="" />
                    </div>
                </div>
                                
                <h4 className="name text-center"> Nabi Karampoor </h4>
                <p className="profile-desc text-center"> Husband | Engineer | Blogger | Speaker | Tech YouTuber | .NET Enthusiast | Radio.Codes </p>
            
                <span className="menu-title">Menu</span>
                <ul>
                    <li className="">
                        <NavLink to="/" className="nav-link d-flex align-items-center justify-content-between">
                            <p className="d-flex align-items-center gap-3">
                                <Icon color="#444" size={20} icon="House_01" />
                                 Home
                             </p>
                            <Icon color="#444" size={20} icon="keyboard_arrow_right" className="arrow-menu" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/tags" className="nav-link d-flex align-items-center justify-content-between">
                            <p className="d-flex align-items-center gap-3">
                                <Icon color="#444" size={20} icon="Tag" />
                                Tag 
                            </p>
                            <Icon color="#444" size={20} icon="keyboard_arrow_right" className="arrow-menu" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/archive" className="nav-link d-flex align-items-center justify-content-between">
                            <p className="d-flex align-items-center gap-3">
                                <Icon color="#444" size={20} icon="Archive" />
                                 Archives 
                            </p>
                             <Icon color="#444" size={20} icon="keyboard_arrow_right" className="arrow-menu" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/about" className="nav-link d-flex align-items-center justify-content-between">
                            <p className="d-flex align-items-center gap-3">
                                <Icon color="#444" size={20} icon="Info" />
                                 About 
                             </p>
                            <Icon color="#444" size={20} icon="keyboard_arrow_right" className="arrow-menu" />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/subscribe" className="nav-link d-flex align-items-center justify-content-between">
                            <p className="d-flex align-items-center gap-3">
                                <Icon color="#444" size={20} icon="House_Check" />
                                subscribe 
                            </p>
                            <Icon color="#444" size={20} icon="keyboard_arrow_right" className="arrow-menu" />
                        </NavLink>
                    </li>
                </ul>

            </div>

            {/* <div className="AZ-social d-flex d-lg-none align-items-center justify-content-evenly mb-3">
                <Link to="#" className="d-flex align-items-center justify-content-center"><span className="icon-linkedin"><span className="path1"></span><span className="path2"></span></span></Link>
                <Link to="#" className="d-flex align-items-center justify-content-center"><span className="icon-instagram"></span></Link>
                <Link to="#" className="email d-flex align-items-center justify-content-center"><span className="icon-Mail"></span></Link>
                <Link to="#" className="link d-flex align-items-center justify-content-center"><span className="icon-Link_Horizontal"></span></Link>
            </div>  */}
                            
         </div>
    </>
  )
}

export default Menu