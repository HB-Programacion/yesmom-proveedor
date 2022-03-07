import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux';
import { loadOrdersByStore } from '../../../redux/actions/store';

import './Pagination.css';


const itemsPerPage = 9;
const PaginationOrders = ({selection}) => {


    const dispatch = useDispatch();
    const { idActiveStore, ordersByStore } = useSelector( state => state.store);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const total = ordersByStore ? ordersByStore.totalDeOrders : []; 


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % total;
        setItemOffset(newOffset);
    
        setTimeout(() => {
          window.scrollTo(0,0);
        },700)
    };

    useEffect(() => {
        if(ordersByStore && ordersByStore.totalDeOrders){
            setPageCount(Math.ceil(total / itemsPerPage));
        }
        //eslint-disable-next-line
    }, [ ordersByStore ])

    useEffect(() => {
        if(idActiveStore){
            const endOffset = itemOffset + itemsPerPage;
            const state = selection === 0 ? "P" : selection === 1 ? "L" : "E";
            dispatch(loadOrdersByStore({id : idActiveStore, state ,skip : itemOffset, limit : endOffset}))

            // eslint-disable-next-line
            setPageCount(Math.ceil(total / itemsPerPage));
        }
        //eslint-disable-next-line
    }, [idActiveStore,itemOffset, itemsPerPage , dispatch]);

    useEffect(()=>{
        if(selection!==0){
            setPageCount(0);
            setItemOffset(0);
        }
    },[selection])
    
    return (
        <div>
            {
            ordersByStore && ordersByStore.totalDeOrders >0 &&
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

export default PaginationOrders
