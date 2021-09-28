import React from 'react'
import AppLayout from '../../../components/AppLayout/AppLayout'
import Menu from '../../../components/menu/Menu';
import CardProduct from '../../../components/Producto/CardProduct/CardProduct';

import proveedorMobImg from '../../../images/perfil/proveedor.png';
import proveedorMobBanner from '../../../images/perfil/proveedor-banner-mobile.png';
import proveedorDeskBanner from '../../../images/perfil/proveedor-banner-desktop.png';
import yesmomMobImg from '../../../images/perfil/yesmom-banner-mobile.png';
import yesmomDeskImg from '../../../images/perfil/yesmom-banner-desktop.png';

import './Previsualizacion.css';
import ButtonFilled from '../../../components/Button/ButtonFilled';

const products = [
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
]

const productsMostSold = [
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 60.50, discount: 10.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 40.50, discount: 5.20 },
  { title: 'baby clothes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac', image: 'https://i.pinimg.com/originals/86/7b/90/867b9004d298622723781c4fd7e25d50.jpg', price: 50.50, discount: 0 },
]


const Previsualizacion = () => {
  return (
    <AppLayout>
      <Menu />
      <div className="preview-products-container animated fade-in">
        <div className="title-rosa preview-products-title">
          <p>Previsualización</p>
        </div>
        <div className="preview-products-content">
          <div className="preview-products-first-content">
            <div className="menu-filter">
              <p className="menu-filter-title">Filtros</p>
              <hr />
              <p>Todos</p>
              <p>Solo en Baby cuqui´s</p>
              <p>Promociones</p>
            </div>
          </div>
          <div className="preview-products-second-content">
            <img className="preview-products-logo" src={proveedorMobImg} alt="logo proveedor" />
            <img className="preview-products-banner-mobile" src={proveedorMobBanner} alt="logo proveedor" />
            <img className="preview-products-banner-desktop" src={proveedorDeskBanner} alt="baner proveedor" />
            <div className="preview-products-content-grid">
              <div className="preview-products-grid">
                {products.map((item) => (
                  <div className="preview-products-item">
                    <CardProduct image={item.image} title={item.title} description={item.description} price={item.price} discount={item.discount} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <img className="preview-products-ymbanner-mob" src={yesmomMobImg} alt="logo proveedor" />
        <img className="preview-products-ymbanner-desk" src={yesmomDeskImg} alt="logo proveedor" />
        <div className="content-mostsold">
          <div className="preview-products-most-sold">
            <p>Lo + vendido</p>
            <hr />
          </div>
          <div className="preview-products-second-mostsold">
            <div className="preview-products-grid">
              {productsMostSold.map((item) => (
                <div className="preview-products-item">
                  <CardProduct image={item.image} title={item.title} description={item.description} price={item.price} discount={item.discount} />
                </div>
              ))}
            </div>
          </div>
          <div className="preview-products-divider-buttons">
            <hr />
          </div>
          <hr className="hr-info-container-buttons" />
          <div className="info-container-buttons">
            <div className="info-container-button-only">
              <ButtonFilled color="pink">
                Guardar
              </ButtonFilled>
            </div>
            <div className="info-container-button-only">
              <ButtonFilled color="outline-pink">
                Cancelar
              </ButtonFilled>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Previsualizacion
