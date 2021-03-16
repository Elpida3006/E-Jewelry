import React from 'react';
import style from './Home.module.css';
import logo from '../static/logo-home.jpg';
import Menu from '../components/Menu/Menu';
import Layout from '../components/Layout/Layout';
// let  server = 'http://localhost:3002/api/';

function Home() {

return (
    <Layout>
    <div className={style.Home} >

    <div className={style.Menu}>
    <Menu/>
    </div>
      
    <div className={style.Image}>
        <img src = { logo } alt = "logo" />
    </div>
{/* <Products/> */}
            {/* changed pages */}
    

    </div>
    </Layout>

);


}

export default Home;