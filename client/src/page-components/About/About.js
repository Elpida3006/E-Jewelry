import React from 'react';
import style from './About.module.css';
import Layout from '../../components/Layout/Layout';
import {} from 'react-router-dom';

function About({match}) {
    return(
        
<Layout>
<div className={style.About}>
    <h2>About Page</h2>
    <p>For information with us: </p>
</div>
</Layout>
    );
}

export default About;