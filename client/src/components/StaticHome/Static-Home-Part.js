import React from 'react';
import style from './Static-Home-Part.module.css';
import logo from '../../static/logo-home.jpg';
import Menu from '../Menu/Menu';

export const StaticHomePart = ()=> {

   return (
    <div className={style.Static}>
            <div className={style.Menu}>
            <Menu/>
            </div>
            
            <div className={style.Image}>
                <img src = { logo } alt = "logo" />
            </div>
    </div>
   ) ;
};