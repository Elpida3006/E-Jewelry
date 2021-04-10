import React from 'react';
import style from './About.module.css';
import Layout from '../../components/Layout/Layout';
import {} from 'react-router-dom';
import background from '../../static/gold-jewelry-background-vector-2075787.jpg';
import {Link} from 'react-router-dom';
function About({match}) {
    return(
        <body style={{backgroundImage: `url(${background})` , minHeight: '900px'}} >       
<Layout>
<div className={style.About}>
    <h2 className={style.Font}>About Page</h2>
    <br/>
    <p className={style.Font}>For information with us: </p>
    <br/>
    <p className={style.Paragraph}>We are a company founded in 2001 by the famous American Joshua Link, who, inspired by the love of details and natural female beauty, creates in his own garage a sale of handmade jewelry.
After the unexpected interest of most of his customers, he expanded the production of his products, and 2 years later founded a company with 100 employees. Today, they number over 500 worldwide. One of which we are representatives. You can find more about us in our office published 
<Link className={style.Info} to="/Contact"> Here</Link></p>

</div>
</Layout>
</body>
    );
}

export default About;