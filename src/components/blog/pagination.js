import * as React from 'react'
import { Link } from 'gatsby'

const Pagination = ({currentPage, numPages}) => {
    return (
        <div className="blog-page-pagination">
            <div className="blog-page-pagination-prev">
                {numPages > 1 && currentPage !== 1 && 
                    <Link className="btn" to={`${currentPage === 2 ? `/blog` : `/blog/${currentPage - 1}`}`}>← Prev</Link>
                } 
            </div>
            <div>
                {numPages > 1 &&
                    <p className="blog-page-pagination-total">{" "}{currentPage}/{numPages}{" "}</p>
                }
            </div>
            <div className="blog-page-pagination-next">
                {currentPage !== numPages &&
                    <Link className="btn" to={`/blog/${currentPage + 1}`}>Next →</Link>
                }                   
            </div>
        </div>
    )
}

export default Pagination