import React from 'react';
import style from './Error.module.css';
import Layout from '../../components/Layout/Layout';
// import {Link} from 'react-router-dom';
import background from '../../static/gold-jewelry-background-vector-2075787.jpg';


function Error({match}) {
    return(
        <body style={{backgroundImage: `url(${background})` , minHeight:'1000px'}} >
   
<Layout>
<div className={style.Error}>
   
    <p>Somenting went Wrong... </p>
    <p>Please try again to login</p>
    <img className={style.ErrorImg} src='https://i.pinimg.com/originals/20/d8/7e/20d87e6af85c583831189f45744fc82e.png' alt='My error picture'/>


</div>
</Layout>
</body>
    );
}

export default Error;