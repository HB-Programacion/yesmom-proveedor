import React, { useEffect, useState } from 'react'
import AppLayout from '../../../components/AppLayout/AppLayout'
import Checkbox from '../../../components/Checkbox/Checkbox'
import Input from '../../../components/Input/Input'
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar'
import Description from '../../../components/Perfil/Description/Description'
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil'
import CardProduct from '../../../components/Producto/CardProduct/CardProduct'


import iconDelete from '../../../images/producto/icon-delete.svg'
import iconClose from '../../../images/producto/icon-close.svg'
import './ActiveProducts.css'
import Loading from '../../../components/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import BackComponent from '../../../components/Return/BackComponent'
import { deleteProduct, setActiveProduct, startDeletingProduct, startLoadingSupplierProducts, startLoadingSupplierProductsPaginate, unsetActiveProduct} from '../../../redux/actions/supplier'

import ReactPaginate from 'react-paginate';

const productsMock = [
  { title: 'baby clothes', description: 'Numero 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Numero 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  { title: 'baby clothes', description: 'Numero 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
  { title: 'baby clothes', description: 'Numero 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Numero 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  { title: 'baby clothes', description: 'Numero 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
  { title: 'baby clothes', description: 'Numero 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Numero 8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  // { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
  // { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  // { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  // { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
  // { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  // { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  // { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 }
]

const itemsPerPage = 6;


const ActiveProducts = () => {

  const dispatch = useDispatch();
  const  { logged=false } = useSelector(state => state.auth);
  const  { products=[] , active , total } = useSelector(state => state.supplierProducts);
  const [ loading , setLoading ] = useState(true);

  const [ activeFilter , setActiveFilter ] = useState(0);



  // const [currentItems, setCurrentItems] = useState(productsMock.slice(0,5));
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);


  const loadSupplierProducts = async () => {

    if( logged ){
      // setLoading(true);

      await dispatch ( startLoadingSupplierProducts());
      // const data = await getSupplierProducts();

      // dispatch( loadSupplierProducts()),
      // setSupplierProducts(data);
      setLoading(false);
    }
  }

  const handleActiveProduct = ( idProduct ) => {
    
      dispatch( setActiveProduct (idProduct) )
  }

  const getActive = ( idProduct ) => {
    if(active.includes(idProduct)){
      return true;
    }else{
      return false;
    }
    
  }

  const handleRemoveProduct = ( idProduct ) => {
    dispatch( unsetActiveProduct (idProduct) )
  }

  const handleDeleteActive = () => {
      if(active.length > 0){
        const ok = window.confirm('Eliminar producto(s)');
        if(ok){
          console.log('Eliminando activos');
          dispatch( startDeletingProduct());
        }
      }
  }

  useEffect(() => {
    loadSupplierProducts();

    return () => setLoading(false);
  },[])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % total;
    // console.log(`En pagina ${event.selected}`);
    setItemOffset(newOffset);

    setTimeout(() => {
      window.scrollTo(0,0);
    },200)
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`LLamando a endpoint desde ${itemOffset} a ${endOffset}`);
    dispatch( startLoadingSupplierProductsPaginate( { skip : itemOffset, limit : endOffset }));
    // setCurrentItems(productsMock.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(total / itemsPerPage));

  }, [itemOffset, itemsPerPage]);



  if(loading){
    return <Loading />
  }

  return (
    <AppLayout>
      {/* <Menu /> */}
      <div className="contenedor-info-perfil-registro animated fade-in">
        <div className="info-perfil-contenido">
            <div className="info-all-content">
              <div className="info-contenedor-flex">
                <div className="hide-desktop info-container-back">
                  <div>
                      <BackComponent />
                  </div>
                </div>
                <div className="flex-left">
                  <div className="info-container-title">
                    <TitlePerfil />
                  </div>
                  <Sidebar />
                </div>
                <div className="flex-right">
                  <div className="info-container-content">
                    <Description title="Productos" description="Aquí encontrarás todos tus productos activos" />
                    
                    <div className="container-filter">
                      <div className="container-filter-activos">
                        <p
                          onClick= { () => setActiveFilter(0)}
                          className={`filter-product-active ${activeFilter === 0 ? 'active-filter-products' : ""}`}
                          >Activos</p> 
                        <p
                          onClick= { () => setActiveFilter(1)}
                          className={`filter-product-active ${activeFilter === 1 ? 'active-filter-products' : ""}`}
                          >No activos</p> 
                      </div>
                      <div className="active-products-filter">

                        <Checkbox content='Seleccionar todo' />
                        <div className="container-icon-delete">
                          <img 
                            className={`icon-delete ${active.length==0 ? 'icon-delete-disabled' : ''}`}
                            src={iconDelete} 
                            alt=""
                            onClick = { handleDeleteActive }  
                          />
                        </div>
                        <Input placeholder="Buscar..." />
                      </div>
                    </div>
                    {
                      products.length === 0 ? 
                      <p className="empty-products"> No hay productos </p>
                      :
                      <div className="active-products-grid">
                        {products.map((item, i) => (
                          
                          <div 
                            className="active-products-item" 
                            key={i} 
                            onClick= {!getActive(item.id) ? () => handleActiveProduct(item.id) : () =>{} }
                          >
                            {
                              getActive(item.id) && 
                              <img 
                                className="icon-close" 
                                src={iconClose} 
                                alt="icono eliminar" 
                                onClick = { ()  => handleRemoveProduct(item.id) }
                              />
                            }
                            <CardProduct 
                              image={item?.image} 
                              title={item?.title} 
                              description={item?.description} 
                              price={item?.price} 
                              discount={item?.discount} 
                            />
                          </div>
                        ))}
                        {/* {
                          currentItems.map((item) => (
                            <CardProduct 
                              image={item?.image} 
                              title={item?.title} 
                              description={item?.description} 
                              price={item?.price} 
                              discount={item?.discount} 
                            />

                          ))
                        } */}
                      </div>
                    }
                  </div>
                </div>
              </div>
                <div className="content-page">
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
            </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ActiveProducts
