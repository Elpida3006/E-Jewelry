
import React from 'react';
import style from './Header.module.css';
import {Route, Switch, Link} from 'react-router-dom';
// import About from '../../page-components/About/About';


function Header() {
return (

    <navigation className={style['Nav-Link']}>
       
  
     
    <ul className={style['Ul-Tab']}>
  
         <li className={style['Nav-Cover']}>
              <Link className={style['Li']} to="/Cover">E-Jewerly</Link>  
         </li>
        
        <li className={style['Nav-Li']}>
            <Link className={style['Li']} to="/About">About Us</Link>
        </li>
      
        <li className={style['Nav-Li']}>
            <Link className={style['Li']} to="/user/login">Login</Link>
        </li>


        <li className={style['Nav-Li']}>
           <Link className={style['Li']} to="/user/register"> Register</Link>
        </li> 
        {/* <li className={style['Nav-Li']}>Logout</li>  */}
        {/* <li className={style['Nav-Li']}>Profile</li>  */}
  
    </ul>
    
       

</navigation>
);
}
export default Header;

