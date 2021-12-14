import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveProduct, unsetActiveProduct } from '../../redux/actions/store';

import CardProduct from '../Producto/CardProduct/CardProduct';

import iconClose from '../../images/producto/icon-close.svg';

const ComponentActive = () => {
    

    const dispatch = useDispatch();
    const  { productsActiveStore } = useSelector(state => state.store);
    const  { products=[] , active  } = productsActiveStore;

    
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
    
    return (
        <div>
            {
                products.length === 0 ? 
                <>
                <p className="empty-products"> No hay productos </p>
                <div className='active-products-filter-contenedor'>
                  <Link to="/p/store/load-products">
                    +Cargar productos
                  </Link>
                </div>
                </>
                
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
            }
        </div>
    )
}

export default ComponentActive
