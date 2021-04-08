import React from 'react';
import style from './Menu.module.css';
import {NavLink } from 'react-router-dom';

function Menu() {
    return (
        <div className={style.Menu}>
            <ul>
            <li className={style['Nav-Li']}>
            <NavLink  className={style['Li']} to="/products/All">All Products</NavLink >

                </li>
            <li className={style['Nav-Li']}>
            <NavLink  className={style['Li']} to="/products/Silver">Silver</NavLink >

                </li>
                <li className={style['Nav-Li']}>
                <NavLink  className={style['Li']} to="/products/Gold">Gold</NavLink >

                </li>
                <li className={style['Nav-Li']}>
                <NavLink  className={style['Li']} to="/products/Leather-Accessory">Leather Accessory</NavLink >

                </li>
            </ul>
        </div>
    );
}



export default Menu;
