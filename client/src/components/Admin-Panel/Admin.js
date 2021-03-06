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
            <Link className={style['Li']} to='/admin/create'>Create</Link>

        </li>
                <li className={style['Nav-Li']}>
                <Link className={style['Li']} to="/view">View Products</Link>

                </li>
                <li className={style['Nav-Li']}>
                <Link className={style['Li']} to="/admin/money">Money</Link>

                </li>
                <li className={style['Nav-Li']}>
                <Link className={style['Li']} to="/Home">Home</Link>

                </li>
         </li>
      
        </div>
    );
}



export default Admin;