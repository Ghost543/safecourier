import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
const Pagination = props => {
    let pageCount = props.itemsCount/props.pageSize
    if (props.itemsCount <= props.pageSize) {
        return null
    }
    const pages = _.range(1,pageCount+1)
    return <nav aria-label="Page navigation example">
        <ul className="pagination ">
            {pages.map(page=>{
                // eslint-disable-next-line
                return <li className={page === props.currentPage ? "page-item active " : "page-item"} key={page}><a onClick={()=>{props.onPageChange(page)}} className="page-link">{page}</a></li>
            })}
        </ul>
    </nav>
}
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}
 
export default Pagination;