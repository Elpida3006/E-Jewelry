import React from 'react';
import style from './Menu.module.css';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <div className={style.Menu}>
            <ul>
            <li className={style['Nav-Li']}>
            <Link className={style['Li']} to="/Products/Silver">Silver</Link>

                </li>
                <li className={style['Nav-Li']}>
                <Link className={style['Li']} to="/Products/Gold">Gold</Link>

                </li>
                <li className={style['Nav-Li']}>
                <Link className={style['Li']} to="/Products/Leather Accessory">Leather Accessory</Link>

                </li>
            </ul>
        </div>
    );
}



export default Menu;
