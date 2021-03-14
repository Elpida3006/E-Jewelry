import React from 'react';
import logo from '../static/logo1.png';
import style from './App.module.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
function App() {

    return ( 
        <div className={style.App} >
   
        <main className ={style['App-cover']}>
        <Header/>
  
        <img src = { logo } className ={style['App-logo']} alt = "logo" />
        <p>Welcome in Our E - Jewelry Shop { /* <code>src/App.js</code> and save to reload. */ }</p>  
        <p> Let 's Start</p>   
        <a className ={style['App-link']}  href = "/"
        target = "_blank"
        rel = "noopener noreferrer" >Home</a>  
        
        </main> 
        
        <Footer/>
        </div>
    );
}

export default App;