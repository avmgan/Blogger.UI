import { Link } from "react-router-dom"
import book from '../img/pictuer-books.png'

function Events() {
  return (
   <>
        <div className="AZ-box AZ-sidebar-menu mb-3 d-none d-lg-block">
            <h4 className="AZ-box-title d-flex align-items-center gap-1"><span className="icon-Notebook"></span> Events </h4>
            <div className="book-img AZ-img-container">
                 <div className="AZ-img-container-inner AZ-img-cover">
                    <img src={book} alt="" />
                </div>
            </div>
            <h4 className="book-name"> Live Coding  </h4>
            <p className="book-desc"> Practical aspects of system design using .NET </p>
            <Link to="https://lu.ma/thisisnabi" className="AZ-primary-btn see-book-btn w-100"> My Calendar </Link>

            <div>
                <h4 className="AZ-box-title d-flex align-items-center gap-1"><span className="icon-Note"></span> Popular Poste</h4>
                <ul className="list-book-specifications">
                    <li><Link to="#"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Link></li>
                    <li><Link to="#"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Link></li>
                    <li><Link to="#"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Link></li>
                </ul>
            </div>
        </div>
   </>
  )
}

export default Events