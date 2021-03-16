import React from 'react';
import logo from '../static/logo1.png';
import style from './App.module.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Login from '../page-components/Login/Login';

// import {Link} from 'react-router-dom';
function App() {

    return ( 
        <div className={style.App} >
   
   <Header/>
       
   <Login/>

     
       
         {/* <Layout> 
          
             <main className ={style['App-cover']}> 
        <img src = { logo } className ={style['App-logo']} alt = "logo" />
         <p>Welcome in Our E - Jewelry Shop 
             { /* <code>src/App.js</code> and save to reload. */ }
          {/* </p>   
        <p> Let 's Start</p>   
             <li className={style['Nav-Home']}>
              <Link className={style['Li']} to="/">Home</Link>  
         </li>
          </main>  */}
          
        
         {/* </Layout>  */} 
     
     
         
        <Footer/>
        </div>
    );
}

export default App;