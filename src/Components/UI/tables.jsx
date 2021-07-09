import React from 'react'
import TableHeader from './Table/header'
import Tbody from './Table/body'
import Pagination from '../UI/Pagination/pagination'

const Table = ({headers,data,itemsCount,pageSize,currentPage,onPageChange,link}) => {
    return ( 
        <div className="flex-md-column">
            <table className="table table-striped table-hover">
                <TableHeader heads={headers}/>
                <Tbody data={data} link={link}/>
            </table>
            <Pagination 
                itemsCount={itemsCount} 
                pageSize={pageSize} 
                currentPage={currentPage}
                onPageChange={onPageChange} 
            />
        </div>
    );
}
 
export default Table;