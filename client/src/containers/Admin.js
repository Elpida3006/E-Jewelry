import React, {Component} from 'react';
import style from './Admin.module.css';
import Layout from '../components/Layout/Layout';
import Admin from '../components/Admin-Panel/Admin';
import {UserContext} from '../global-context/UserContexts';




class AdminPage extends Component {
   
  
  
static contextType = UserContext;

    render(){
     
        const { isAdmin } = this.context;

return (
    <body className={style.BackgroundAdmin}>
     {/* { isAdmin ?
        <> */}
       
        <Layout>
        <div className={style["Body"]} >
        
                    <div className={style.Ad}>
                    <Admin/> 
                
                    <h2 className={style["AdminLogo"]}>Welcome to Admin page</h2>
                    </div>
            
        </div>
        </Layout> 
      
        {/* </> 
        : <>  */}

        {/* <Layout><p>Can not access to this page</p></Layout>
        </> 
         }  */}
  </body>

);
}

}

export default AdminPage;