import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = ({currentPage, numPages, isBlogPage}) => {
    const pagPath = isBlogPage ? `/blog/` : `/tags/`
    return (
        <div className="blog-page-pagination">
            <div className="blog-page-pagination-prev">
                {numPages > 1 && currentPage !== 1 && 
                    <Link className="btn" to={`${currentPage === 2 ? pagPath : `${pagPath}${currentPage - 1}`}`}><FontAwesomeIcon icon={faChevronLeft} /> <span>Prev</span></Link>
                } 
            </div>
            <div>
                {numPages > 1 &&
                    <p className="blog-page-pagination-total">{" "}{currentPage}/{numPages}{" "}</p>
                }
            </div>
            <div className="blog-page-pagination-next">
                {currentPage !== numPages &&
                    <Link className="btn" to={`${pagPath}${currentPage + 1}`}><span>Next</span> <FontAwesomeIcon icon={faChevronRight} /></Link>
                }                   
            </div>
        </div>
    )
}

export default Pagination