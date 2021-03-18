import React from 'react';
//for class components
import style from './Admin.module.css';
import {Link} from 'react-router-dom';

function Admin() {
    return (
        <div className={style.Admin}>


             
               
      
         <li className={style['Nav-AdminPanel']}> 
         <li className={style['Nav-A']}>
         Admin Panel
         </li>
         <li className={style['Nav-Li']}>
            <Link className={style['Li']} to="/Create/Silver">Create Silver</Link>

                </li>
                <li className={style['Nav-Li']}>
                <Link className={style['Li']} to="/Create/Gold">Create Gold</Link>

                </li>
                <li className={style['Nav-Li']}>
                <Link className={style['Li']} to="/Create/Leather-Accessory">Create Leather Accessory</Link>

                </li>
         </li>
      
        </div>
    );
}



export default Admin;