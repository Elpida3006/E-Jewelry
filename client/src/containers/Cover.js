import React from 'react';
import style from './Cover.module.css';
import logo from '../static/logo1.png';
import Layout from '../components/Layout/Layout';
// let  server = 'http://localhost:3002/api/';
import {Link} from 'react-router-dom';

function Cover() {

return (
    <Layout> 
          
             <main className ={style['App-cover']}> 
        <img src = { logo } className ={style['App-logo']} alt = "logo" />
         <p>Welcome in Our E - Jewelry Shop 
         {/* <code>src/App.js</code> and save to reload. */ }
          </p>   
        <p> Let 's Start</p>   
             <li className={style['Nav-Home']}>
              <Link className={style['Li']} to="/Home">Home</Link>  
         </li>
          </main>  
          
        
         </Layout>  
     

);


}

export default Cover;