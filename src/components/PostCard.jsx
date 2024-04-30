import { Link } from "react-router-dom"
import Icon from "../font-icon/Icon"

function PostCard({data}) {
    
    const {articleId , title , body , summary , tags , readOnMinutes , publishedOnUtc} = data
    console.log(data)

    return (
        <>
            <div className="AZ-post-card">
                <Link to={`/archive/${articleId}`}><h4 className="post-card-title">{title} </h4></Link>
                <p className="post-card-text">{summary}</p>
                <div className="d-flex align-items-center gap-3">
                    <p className="post-details d-flex align-items-center gap-1 ">
                        <Icon color="#444" size={20} icon="Calendar" />
                        {/* 16 Agu 2023  */}
                        {publishedOnUtc}
                    </p>
                    <p className="post-details d-flex align-items-center gap-1 ">
                        <Icon color="#444" size={20} icon="Clock" />
                        {/* 6 min read */}
                        {readOnMinutes} 
                    </p>
                    <p className="post-details d-flex align-items-center gap-1 ">
                        <Icon color="#444" size={20} icon="Tag1" />
                        {/* ASP.NET  */}
                        {tags}
                    </p>
                </div>
            </div>
        </>
    )
}

export default PostCard