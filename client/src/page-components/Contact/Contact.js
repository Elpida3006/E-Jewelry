import React from 'react';
import style from './Contact.module.css';
import Layout from '../../components/Layout/Layout';
// import {Link} from 'react-router-dom';
import GoogleApiWrapper from '../../components/GoogleMap/GoogleMap';
import background from '../../static/gold-jewelry-background-vector-2075787.jpg';


function Contact({match}) {
    return(
        <body style={{backgroundImage: `url(${background})` }} >       
   
<Layout>
<div className={style.Contact}>
    <h2>For Contact with us: </h2>
    <p>Bul.Carigradsko Shose 112A, 
  <br/>
        Mphone: +359 888 658 965 </p>
    <div>
    <GoogleApiWrapper/>
    </div>

</div>
</Layout>
</body>
    );
}

export default Contact;