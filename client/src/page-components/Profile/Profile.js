import React, { useContext } from 'react';
import {useEffect, useState} from 'react';
import * as service from '../../services/userService';
import Layout from '../../components/Layout/Layout';
import style from './Profile.module.css';
import background from '../../static/gold-jewelry-background-vector-2075787.jpg';
import {UserContext} from '../../global-context/UserContexts';
import { FaMailBulk, FaUserAlt , FaBarcode, FaHospitalAlt} from 'react-icons/fa';
const  Profile = ({match, history} ) => {
    const  [user, setUser] =  useState({});
    const {} = useContext(UserContext);
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

          
  <p> <FaMailBulk />   <span>   Email: <span className={style['user-data']}>{user.email}</span> </span></p> 
  <p><FaUserAlt/>    <span>     Username:  <span className={style['user-data']}>{user.fullname}</span> </span></p> 
  <p><FaBarcode/>   <span>   Your Register Code:   <span className={style['user-data']}>{user._id}</span></span></p> 
  {/* <p>Status: <span>{}</span></p> | */}
  <p><FaHospitalAlt/>   <span>   My offers: :   <span className={style['user-data']}>{user.offersBought.length}</span></span></p> 

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