import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

import arrowIconWhite from '../../images/producto/icon-menu-arrow-white.svg';
import arrowIconGray from '../../images/producto/icon-menu-arrow-gray.svg'
import './Menu.css';

const Menu = () => {
  let location = useLocation();
  const [isVisibleSubMenu, setIsVisibleSubMenu] = useState(false)

  const [navigation, setNavigation] = useState([
    { name: 'Resumen', isActive: false, icon: false, link: 'resumen-venta' },
    { name: 'Productos', isActive: false, icon: true, link: 'perfil-tienda' },
    { name: 'Órdenes', isActive: false, icon: false, link: 'resumen' },
  ])

  useEffect(() => {
    const newNavigation = [...navigation];
    navigation.map((item, index) => {
      if (location.pathname === `/${item.link}`) {
        item.isActive = true;
        setNavigation([...newNavigation]);
      }
    })
  }, [])

  const handleClick = (menuItem, index) => {
    const newNavigation = [...navigation];
    if (location.pathname === `/${menuItem.link}`) {
      newNavigation[index].isActive = true;
      setNavigation([...newNavigation]);
    } else {
      let itemActive = navigation.findIndex((item) => item.isActive === true)
      if (newNavigation[itemActive] !== undefined) {
        newNavigation[itemActive].isActive = false;
      }
      newNavigation[index].isActive = true;
      setNavigation([...newNavigation]);
    }
  };

  return (
    <div className="menu-product-container">
      <div className="menu-product-section">
        <div className="menu-section">
          <ul className="list-group-menu">
            {navigation.map((item, index) => (
              <li className="list-group-item-menu" onClick={() => handleClick(item, index)}>
                <Link to={`/${item.link}`} className={item.isActive ? "item-menu-product-active" : "item-menu-product"}>
                  <h6 className={item.isActive ? "item-text-product-active" : "item-text-product"}>
                    {item.name}
                    {item.icon && <div onClick={() => setIsVisibleSubMenu(!isVisibleSubMenu)}><img src={item.isActive ? arrowIconWhite : arrowIconGray} alt="icono menu" width="13" height="13" /></div>}
                  </h6>
                </Link>
              </li>
            ))}
          </ul>
          {isVisibleSubMenu &&
            <div className="list-group-submenu">
              <Link to="/product-excel"><p>Importar productos</p></Link>
              <Link to="/add-new-product"><p>Carga manual</p></Link>
              <Link to="/visualizate-products"><p>Visualización de productos</p></Link>
              <Link to=""><p>Eliminar producto</p></Link>
            </div>}
        </div>
      </div>
    </div >
  )
}

export default Menu
