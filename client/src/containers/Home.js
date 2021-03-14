import React from 'react';
import style from './Home.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';

// let  server = 'http://localhost:3002/api/';

function Home() {

return (
    <div className={style.Home} >
<Header/>
<Layout/>
<Footer/>
    </div>

);


}

export default Home;