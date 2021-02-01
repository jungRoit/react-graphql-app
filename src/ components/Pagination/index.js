import React from 'react';
import ReactPaginate from 'react-paginate';
import './style.css';

const Pagination = (props) => {
  console.log('Page change', props);
  return (
      <ReactPaginate
        pageCount={props.total}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        previousLabel="«"
        activeClassName="active"
        onPageChange={props.onChange}
        containerClassName={'pagination pagination-sm'}
      ></ReactPaginate>
  );
};

export default Pagination;
