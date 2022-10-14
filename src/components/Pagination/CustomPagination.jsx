import Pagination from '@mui/material/Pagination';
import './CustomPagination.scss'
import React from 'react'

const CustomPagination = ({ setPage, numOfPages = 10 }) => {

  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  }

  return (
    <div className='pagination'>
      <Pagination
        className='page'
        color="primary"
        count={numOfPages}
        onChange={(e) => handleChange(e.target.textContent)} />
    </div>
  )
}

export default CustomPagination