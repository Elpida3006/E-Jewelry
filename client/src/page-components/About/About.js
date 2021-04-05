import React from 'react';
import style from './About.module.css';
import Layout from '../../components/Layout/Layout';
import {} from 'react-router-dom';
import background from '../../static/gold-jewelry-background-vector-2075787.jpg';

function About({match}) {
    return(
        <body style={{backgroundImage: `url(${background})` }} >       
<Layout>
<div className={style.About}>
    <h2>About Page</h2>
    <p>For information with us: </p>
</div>
</Layout>
</body>
    );
}

export default About;