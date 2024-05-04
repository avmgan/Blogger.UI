import { Link } from "react-router-dom"
import Icon from "../font-icon/Icon"
import { useEffect, useState } from "react"
import api from "../services/config"
import Loader from "../components/Loader"

function Tags() {
    const [allTags , setAllTags] = useState([])

    useEffect(()=>{
      const fetchAllTags = async ()=>{
          try{
            setAllTags(await api.get('/articles/tags'))
          }
          catch(error){
              console.log(error.message)
          }
      }
      fetchAllTags()
    },[])

    return (
      <>
         <h4 className="AZ-section-title d-flex align-items-center gap-2"><Icon color="#6F49E8" size={20} icon="Tag2" />All Tags</h4>
          <div className="d-flex align-items-center flex-wrap gap-2">
              <div className="d-flex align-items-center justify-content-center w-100">
                {!allTags.length && <Loader />}
              </div>
              {allTags.map((singleTag) => (
                <Link to="#" className="AZ-tag-link d-flex align-items-center justify-content-center" key={singleTag.name}> 
                  {singleTag.name}  
                  <p className="d-flex align-items-center gap-1 tag-number"><Icon color="#3D475C" size={13} icon="Note1" /> {singleTag.count}</p>
                </Link>
              ))}
          </div>
      </>
    )
  }
  
  export default Tags