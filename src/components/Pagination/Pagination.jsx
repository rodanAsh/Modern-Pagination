import React from 'react'
import './Pagination.css'

const Pagination = ({page,setPage}) => {

    const prevThreePage = Array.from({length:3},(_,index) => page-1-index).filter(value => value>0).reverse()

    const nextThreePage = Array.from({length:4},(_,index) => page + index)

    const totalPages = [...prevThreePage,...nextThreePage]

    const handlePrevPage = () => {
        setPage(prev => prev - 1)
    }

    const handleNextPage = () => {
        setPage(prev => prev + 1)
    }

    const handleCurrentPage = (pageNo) => {
        setPage(pageNo)
    }
  return (
    <div className='pagination-container'>
        <div className={page > 1 ? "page-btn" : "empty page-btn"} onClick={handlePrevPage}>
            {page>1 ? "<" : ""}
        </div>
        {
        totalPages.map(((item,index) => {
            return <div onClick={() => handleCurrentPage(item)} className={item === page ? "active page-btn" : "page-btn"} key={index}>{item}</div>
        }))
            }
        <div className='page-btn' onClick={handleNextPage}>{">"}</div>
    </div>
  )
}

export default Pagination