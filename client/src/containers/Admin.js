import React, {Component} from 'react';
import style from './Admin.module.css';
import Layout from '../components/Layout/Layout';
import Admin from '../components/Admin-Panel/Admin';
import {UserContext} from '../global-context/UserContexts';
// import isAuth from '../autGuards';



class AdminPage extends Component {
   
  
  
static contextType = UserContext;

    render(){
     
        // const { isAdmin } = this.context;

return (
    <body className={style.BackgroundAdmin}>
    
       
        <Layout>
        <div className={style["Body"]} >
    
        <>
                    <div className={style.Ad}>
                    <Admin/> 
                
                    <h2 className={style["AdminLogo"]}>Welcome to Admin page</h2>
                    </div>
                    </>
    
        </div>
        </Layout> 
      
       

       
  </body>

);
}

}

export default AdminPage;