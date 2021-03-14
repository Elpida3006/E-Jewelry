
import React from 'react';
import style from './Header.module.css';

function Header() {
return (

    <navigation className={style['Nav-Link']}>
    <ul className={style['Ul-Tab']}>
        <li className={style['Nav-Li']}>Home</li>
        <li className={style['Nav-Li']}>About Us</li>
        <li className={style['Nav-Li']}>Login</li>
        <li className={style['Nav-Li']}>Register</li>
    </ul>
</navigation>
);
}
export default Header;

