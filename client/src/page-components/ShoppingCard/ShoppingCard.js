import React  from 'react';
import style from './ShoppingCard.module.css';

import Layout from '../../components/Layout/Layout';
import * as service from '../../services/userService';
import {useEffect, useState} from 'react';
import TemplateShopCard from './TemplateShopCard';
import * as productservice from '../../services/productService';
//functional components
  
const ShoppingCard = ( {match, history} ) => {
    const  [arrOffers, setproduct] =  useState([]);
    // const  [user, setUser] =  useState({});

useEffect(() => {
            service.getUser()
            // .then(user => {
            //     console.log(`res user is ${user}`);
            //     setUser(user);
            // })
            .then(user => {
                const arrOffers = [];
                // console.log(user);
                user.offersBought.map(idoffer => {
                    // console.log(idoffer);
                         productservice.getOffers(idoffer)
                         .then(article => {
                              arrOffers.push(article);
                              console.log(arrOffers);
                             console.log(`res data is ${arrOffers}`);
                             setproduct(arrOffers);
                          });
                        });
            })
            .catch(error => console.log(error));
           
           

}, []);
console.log(arrOffers);

        return (
            <body className={style.DetailsBackground}>
              <Layout>
            <div className={style['Containers-Card']}>
                    {(arrOffers.length > 0 )? arrOffers.map(x =>
                        <TemplateShopCard  key={x.id} {...x}/>
                    ) :
                    <p>No Bought Jewelry!</p> 
                    }
              <h4 className={style['wallet-line']}>_</h4>   
              <h4 className={style['wallet-sum']}>Total Sum: {550} Euro</h4>   

                                  
            </div>

                
            </Layout>     
            </body>
          
        );



};



export default ShoppingCard;