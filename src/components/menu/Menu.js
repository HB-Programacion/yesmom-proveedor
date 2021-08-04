import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

import arrowIconWhite from '../../images/producto/icon-menu-arrow-white.svg';
import arrowIconGray from '../../images/producto/icon-menu-arrow-gray.svg'
import './Menu.css';

const Menu = () => {
  let location = useLocation();
  const [navigation, setNavigation] = useState([
    { name: 'Resumen', isActive: false, icon: false, link: '' },
    { name: 'Productos', isActive: false, icon: true, link: 'perfil-tienda' },
    { name: 'Órdenes', isActive: false, icon: false, link: 'perfil' },
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
      newNavigation[itemActive].isActive = false;
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
                    {item.name}{" "}
                    {item.icon && <img src={item.isActive ? arrowIconWhite : arrowIconGray} alt="icono menu" width="13" height="13" />}
                  </h6>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
