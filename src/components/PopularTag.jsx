// import { useEffect , useState } from "react"
import { Link } from "react-router-dom"

// import api from "../services/config"
import Icon from "../font-icon/Icon"

function PopularTag() {
    // const [tags , setTags] = useState([])
    // console.log({tags})

    // useEffect(() => {
    //     const fetchTags = async ()=>{
    //         try{
    //             setTags(await api.get('/articles/tags/populars'))
    //         }catch(error){
    //             console.log(error.message)
    //         }
    //     }
    //     fetchTags();
    // } , [])

    return (
            <>
                <div className="sidebar-fixed d-none d-lg-block">
                    <div className="">
                        <h4 className="AZ-box-title d-flex align-items-center gap-1"><span className="icon-Tag2"></span>Popular Tag</h4>
                        <div className="d-flex align-items-center flex-wrap gap-2">
                            {/* <Link key={name} to="" className="AZ-tag-link active d-flex align-items-center justify-content-center"> {tag.name} </Link> */}
                           
                            <Link to="#" className="AZ-tag-link d-flex align-items-center justify-content-center">CSS</Link>
                            <Link to="#" className="AZ-tag-link d-flex align-items-center justify-content-center">ASP</Link>
                            <Link to="#" className="AZ-tag-link d-flex align-items-center justify-content-center">Bootstrap</Link>
                            <Link to="#" className="AZ-tag-link d-flex align-items-center justify-content-center">PHP</Link>
                            <Link to="#" className="AZ-tag-link d-flex align-items-center justify-content-center">Sass</Link>
                            <Link to="#" className="AZ-tag-link d-flex align-items-center justify-content-center">Javascript</Link>
                            <Link to="#" className="AZ-tag-link d-flex align-items-center justify-content-center">Js</Link>
                            <Link to="#" className="AZ-tag-link d-flex align-items-center justify-content-center">CSS</Link>
                        </div>
                        <div className="AZ-social d-flex align-items-center justify-content-evenly">
                            <Link to="#" className="d-flex align-items-center justify-content-center"><Icon color="#444" size={20} icon="twitter" /> </Link>
                            <Link to="#" className="d-flex align-items-center justify-content-center"><Icon color="#444" size={20} icon="youtube1" /></Link>
                            <Link to="#" className="email d-flex align-items-center justify-content-center"><Icon color="#444" size={20} icon="linkedin" /></Link>
                            <Link to="#" className="link d-flex align-items-center justify-content-center"><Icon color="#444" size={20} icon="luma" /></Link>
                        </div>
                        <p className="AZ-copyright text-center">All rights belong to Nabi Karampoor</p>
                    </div>
                </div>
            </>
    )
}

export default PopularTag