import React from 'react';
import style from './Layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

//HOC

function Layout(props) {
    return (
      
        <div className={style.Layout}>
        <Header/>
          {props.children}
        <Footer/>
        </div>

    );
}



export default Layout;