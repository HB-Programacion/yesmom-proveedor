import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingProductsStore } from '../../redux/actions/store';


const itemsPerPage = 6;

const PaginateDisabled = ({query}) => {


  const dispatch = useDispatch();
  const  { productsActiveStore } = useSelector(state => state.store);
  //eslint-disable-next-line
  const { totalDisabled , products } = productsActiveStore;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalDisabled;
    // console.log(`En pagina ${event.selected}`);
    setItemOffset(newOffset);

    setTimeout(() => {
      window.scrollTo(0,0);
    },700)
  };

  useEffect(() => {
    setPageCount(Math.ceil(totalDisabled / itemsPerPage));

    //eslint-disable-next-line
  }, [ totalDisabled ])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    dispatch( startLoadingProductsStore( { skip : itemOffset, limit : endOffset , state : 'D' }));
    // eslint-disable-next-line
    setPageCount(Math.ceil(totalDisabled / itemsPerPage));
    //eslint-disable-next-line
  }, [itemOffset, itemsPerPage, dispatch]);

  useEffect(()=>{
    if(query && query.trim().length){
        dispatch( startLoadingProductsStore( { skip : 0, limit : 6, state : 'D', name : query}));
    }
  },[query, dispatch])
  
  return (

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

    )
}

export default PaginateDisabled
