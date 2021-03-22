import React from 'react';
import style from './Menu.module.css';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <div className={style.Menu}>
            <ul>
            <li className={style['Nav-Li']}>
            <Link className={style['Li']} to="/products/silver">Silver</Link>

                </li>
                <li className={style['Nav-Li']}>
                <Link className={style['Li']} to="/products/gold">Gold</Link>

                </li>
                <li className={style['Nav-Li']}>
                <Link className={style['Li']} to="/products/leather-accessory">Leather Accessory</Link>

                </li>
            </ul>
        </div>
    );
}



export default Menu;
