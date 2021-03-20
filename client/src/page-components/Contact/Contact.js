import React from 'react';
import style from './Contact.module.css';
import Layout from '../../components/Layout/Layout';
import {} from 'react-router-dom';

function Contact({match}) {
    return(
        
<Layout>
<div className={style.Contact}>
    <h2>Contact Page</h2>
    <p>For information with us: </p>
</div>
</Layout>
    );
}

export default Contact;