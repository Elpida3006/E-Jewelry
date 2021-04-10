
import React from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Money.module.css';

import Admin from '../../components/Admin-Panel/Admin';

//Forms
function Money({history, match, location}) {


    return (
        <body className={style.BackgroundAdmin}>
        <Layout>
           <Admin/> 
           <br></br>
      <div className={style.Money}>  
      <img className={style.Euro} src="https://www.ledgerinsights.com/wp-content/uploads/2019/10/digital-euro.jpg" alt=""/> 
      <p className={style.Save}>You have Save 2453.58 $</p>
          
              <br></br>
              <br></br>
        
              </div>  

        </Layout>
     </body>
    );
}


export default Money;