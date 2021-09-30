import React, { useEffect, useState } from 'react'
import AppLayout from '../../../components/AppLayout/AppLayout'
import Checkbox from '../../../components/Checkbox/Checkbox'
import Input from '../../../components/Input/Input'
import Return from '../../../components/Return/Return'
import Menu from '../../../components/menu/Menu'
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar'
import Description from '../../../components/Perfil/Description/Description'
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil'
import CardProduct from '../../../components/Producto/CardProduct/CardProduct'
import Pagination from '../../../components/Pagnation/Pagination'

import iconDelete from '../../../images/producto/icon-delete.svg'
import iconClose from '../../../images/producto/icon-close.svg'
import './ActiveProducts.css'
import { getSupplierProducts } from '../../../utils/helpers/getSupplierProducts'
import Loading from '../../../components/Loading/Loading'
import { useSelector } from 'react-redux'
import BackComponent from '../../../components/Return/BackComponent'

const products = [
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
  /* { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 } */
]

const ActiveProducts = () => {


  const  { logged=false } = useSelector(state => state.auth);
  const [supplierProducts, setSupplierProducts] = useState([]);
  // const [ loading , setLoading ] = useState(true);


  // const loadSupplierProducts = async () => {

  //   if( logged ){
  //     // setLoading(true);
  //     const data = await getSupplierProducts();
  //     setSupplierProducts(data);
  //     setLoading(false);
  //   }
  // }

  /* useEffect(() => {
    loadSupplierProducts();
  },[]) */

  // if(loading){
  //   return <Loading />
  // }
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
                    
                    
                    <div className="active-products-filter">
                      <Checkbox content='Seleccionar todo' />
                      <div className="container-icon-delete">
                        <img className='icon-delete' src={iconDelete} alt="" />
                      </div>
                      <Input placeholder="Buscar..." />
                    </div>
                    <div className="active-products-grid">
                      {products.map((item) => (
                        <div className="active-products-item">
                          <img className="icon-close" src={iconClose} alt="icono eliminar" />
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
                  </div>
                </div>
              </div>
                <div className="content-page">
                  <Pagination />
                </div>
            </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ActiveProducts
