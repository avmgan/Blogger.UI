import { useState } from "react"
import Icon from "../font-icon/Icon"

function Pagination() {
    const [page , setPage] = useState(1)

    const prevHandler = ()=>{
        if(page <= 1) return
        setPage((page) => page - 1 )
    }
    const nextHandler = ()=>{
        setPage((page) => page + 1 )
    }

    return (
        <div className="AZ-pagination d-flex align-items-center gap-2 justify-content-center">
            <button onClick={prevHandler} className="page-nav page-link"><Icon color="#444" size={20} icon="keyboard_arrow_left" /> </button>
            <p className="page-link">{page}</p>
            <button onClick={nextHandler} className="page-nav page-link"> <Icon color="#444" size={20} icon="keyboard_arrow_right" /> </button>
        </div>
    )
}

export default Pagination