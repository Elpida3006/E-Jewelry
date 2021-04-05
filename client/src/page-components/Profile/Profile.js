import React from 'react';
import {useEffect, useState} from 'react';
import * as service from '../../services/userService';
import Layout from '../../components/Layout/Layout';
import style from './Profile.module.css';
// import ProductCard from '../../components/ProductCard/ProductCard';

const  Profile = ({match, history} ) => {
    const  [user, setUser] =  useState({});
    useEffect(() => {

        service.getUser()
        .then(user => {
            console.log(`res user is ${user}`);
            setUser(user.user);
        });
     }, [setUser]);

return(
    <Layout>
          <div class="user-info">
          <p>Its a Profile Page</p>
          <div className={style['img']}>
              {/* //<img src= */}
          </div>
  <p>Email: <span>{user.email}</span></p> |
  <p>Username: <span>{user.fullname}</span></p> |
  <p>Your Register Code: <span>{user._id}</span></p> |
          </div>
 
  {/* <main>
        <div class="user-info">
            <div>
                <p>Email: <span>{}</span></p> |
                {/* <p>My offers: <span>{offersBought.length}</span></p> | */}
        
            {/* </div>
            <div class="articles"> */}
              {/* {( offersBought.length > 0) ?
                 offersBought.map(c => 
       
                    <ProductCard key={c.id} {...c} />   
                  )
                 : null} */}
               
              
            {/* </div> */}
         
        {/* </div>
    </main> */}
    
    </Layout>
  
);
};
export default Profile;