import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingSupplierProductsDisabledPaginate } from '../../redux/actions/supplier';

const itemsPerPage = 6;

const PaginateDisabled = () => {


  const dispatch = useDispatch();
  const  { totalDisabled } = useSelector(state => state.supplierProducts);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalDisabled;
    // console.log(`En pagina ${event.selected}`);
    setItemOffset(newOffset);

    setTimeout(() => {
      window.scrollTo(0,0);
    },300)
  };

  useEffect(() => {
    setPageCount(Math.ceil(totalDisabled / itemsPerPage));
  }, [ totalDisabled ])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    dispatch( startLoadingSupplierProductsDisabledPaginate( { skip : itemOffset, limit : endOffset }));
    setPageCount(Math.ceil(totalDisabled / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  return (
      <div>
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          nextLabel=">"
          pageClassName="page-item-page-custom"
          pageLinkClassName="page-link-custom-pagination"
          previousClassName="page-item-custom-pagination"
          previousLinkClassName="page-link-custom-pagination"
          nextClassName="page-item-custom-pagination"
          nextLinkClassName="page-link-custom-pagination"
          containerClassName="pagination"
          activeClassName="active-custom-pagination"
          renderOnZeroPageCount={null}
        />
      </div>
    )
}

export default PaginateDisabled
