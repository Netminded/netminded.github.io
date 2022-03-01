import * as React from 'react'
import { Link } from 'gatsby'

const Pagination = ({currentPage, numPages}) => {
    return (
        <div className="row">
            <div className="col-12 text-center">
                {numPages > 1 && <>
                    {currentPage !== 1 && 
                        <Link to={`${currentPage === 2 ? `/blog` : `/blog/${currentPage - 1}`}`}>← Prev</Link>
                    }
                    <span>{" "}{currentPage}/{numPages}{" "}</span>
                    </>
                }
                {currentPage !== numPages &&
                    <Link to={`/blog/${currentPage + 1}`}>Next →</Link>
                }
            </div>
        </div>
    )
}

export default Pagination