import React, { useEffect, useState } from 'react'
import AppLayout from '../../../components/AppLayout/AppLayout'
import Checkbox from '../../../components/Checkbox/Checkbox'
import Input from '../../../components/Input/Input'
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar'
import Description from '../../../components/Perfil/Description/Description'
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil'


import iconDelete from '../../../images/producto/icon-delete.svg'
import Loading from '../../../components/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import BackComponent from '../../../components/Return/BackComponent'
import { deleteProduct, setActiveProduct, startDeletingProduct, startLoadingSupplierProducts, startLoadingSupplierProductsPaginate, unsetActiveProduct} from '../../../redux/actions/supplier'

import ReactPaginate from 'react-paginate';

import './ActiveProducts.css'
import ComponentActive from '../../../components/ActiveProducts/ComponentActive'
import ComponentDisabled from '../../../components/DisabledProducts/ComponentDisabled'
import PaginateActive from '../../../components/Pagination/PaginateActive'
import PaginateDisabled from '../../../components/Pagination/PaginateDisabled'
import Swal from 'sweetalert2'
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
  const  { products=[] , productsDisabled= [] , active , total } = useSelector(state => state.supplierProducts);
  const [ loading , setLoading ] = useState(true);

  const [ activeFilter , setActiveFilter ] = useState(0);


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


  const handleDeleteActive = async () => {
      if(active.length > 0){
        const { isConfirmed } = await Swal.fire('Deshabilitar producto(s)','Deshabilitar producto(s)','question')

        if(isConfirmed){
          dispatch( startDeletingProduct());
        }
      }
  }

  useEffect(() => {
    loadSupplierProducts();

    return () => setLoading(false);
  },[])



  if(loading){
    return <Loading />
  }

  // console.log(products);
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

                      {
                        total > 0 &&
                        <>
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
                                  alt="icon-delete"
                                  onClick = { handleDeleteActive }  
                                />
                              </div>
                              <Input placeholder="Buscar..." />
                            </div>
                          </div>
                        </>
                      }

                      { activeFilter === 0 && <ComponentActive />   }
                      { activeFilter === 1 && <ComponentDisabled />   }
                      
                    {/* {
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
                      </div>
                    } */}
                  </div>
                </div>
              </div>
              <div className="content-page">
                    { activeFilter === 0 && <PaginateActive />   }
                    { activeFilter === 1 && <PaginateDisabled />   }
              </div>
            </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ActiveProducts
