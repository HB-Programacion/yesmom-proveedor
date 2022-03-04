import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux';


import { startLoadingProductsStore } from '../../redux/actions/store';


const itemsPerPage = 6;
const PaginateActive = () => {


    const dispatch = useDispatch();
    const  { productsActiveStore } = useSelector(state => state.store);
    const { total } = productsActiveStore;
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % total;
        // console.log(`En pagina ${event.selected}`);
        setItemOffset(newOffset);
    
        setTimeout(() => {
          window.scrollTo(0,0);
        },700)
    };

    useEffect(() => {
        setPageCount(Math.ceil(total / itemsPerPage));

        //eslint-disable-next-line
    }, [ total ])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        dispatch( startLoadingProductsStore( { skip : itemOffset, limit : endOffset, state : 'A' }));

        // eslint-disable-next-line
        setPageCount(Math.ceil(total / itemsPerPage));

        //eslint-disable-next-line
    }, [itemOffset, itemsPerPage , dispatch]);

    
    return (
        <div>
            {
                total>0 &&
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
            }
        </div>
    )
}

export default PaginateActive
