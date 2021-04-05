import React, { useContext } from 'react';
import {useEffect, useState} from 'react';
import * as service from '../../services/userService';
import Layout from '../../components/Layout/Layout';
import style from './Profile.module.css';
import background from '../../static/gold-jewelry-background-vector-2075787.jpg';
import {UserContext} from '../../global-context/UserContexts';

const  Profile = ({match, history} ) => {
    const  [user, setUser] =  useState({});
    const {isAdmin, isLogged} = useContext(UserContext);
    useEffect(() => {

        service.getUser()
        .then(user => {
            console.log(`res user is ${user}`);
            setUser(user);
        });
     }, []);

return(
   
        <body style={{backgroundImage: `url(${background})` }} >
             <Layout>
        <div className={style['user-info']}>
          <p ><span className={style['user-general']}> Profile Card</span> </p>
       
          <img className={style['imgProfile']} src={'https://covidinspection.com/wp-content/uploads/2020/03/868320_people_512x512.png'}  name="imageUrl" alt=""/>

         
  <p>Email: <span>{user.email}</span></p> 
  <p>Username: <span>{user.fullname}</span></p> 
  <p>Your Register Code: <span>{user._id}</span></p> 
  {/* <p>Status: <span>{}</span></p> | */}
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
        </body>
  
    
          
  
);
};
export default Profile;