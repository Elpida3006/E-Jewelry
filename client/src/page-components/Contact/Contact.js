import React from 'react';
import style from './Contact.module.css';
import Layout from '../../components/Layout/Layout';
// import {Link} from 'react-router-dom';
// import GoogleMap from '../../../components/GoogleMap/GoogleMap';


function Contact({match}) {
    return(
        
<Layout>
<div className={style.Contact}>
    <h2>Contact Page</h2>
    <p>For information with us: </p>
{/* <GoogleMap/> */}
</div>
</Layout>
    );
}

export default Contact;