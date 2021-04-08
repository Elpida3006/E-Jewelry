import React  from 'react';
import style from './ShoppingCard.module.css';
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import * as service from '../../services/userService';
import {useEffect, useState} from 'react';
import TemplateShopCard from './TemplateShopCard';
import * as productservice from '../../services/productService';

//functional components
  
const ShoppingCard = ( {match, history} ) => {
    const  [arrOffers, setproduct] =  useState([]);
    let  [total, setTotal] =  useState(0);
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
                             console.log(article.price);
                             total += article.price;
                           
                              arrOffers.push(article);
                              console.log(arrOffers);
                             console.log(`res data is ${arrOffers}`);
                             setproduct(arrOffers);
                             setTotal(total);
                          });
                        });
            })
            .catch(error => console.log(error));
           
           
      
}, []);

const finalizeCard = () => {
 
        productservice.buyAll()
     .then(res => history.push('/'));
     //+ /user finalizeCard  //message - static
    
};


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
                    <div className={style['Wallet']}>
                            <h4 className={style['wallet-line']}></h4>   
                            <h4 className={style['wallet-sum']}> Total Sum: {total} Euro</h4>   
                            <section className={style['ButtonShop']}>
                            <Link className={style['Btn-ShopAll']} to={'/products/finalizeCard'} onClick={finalizeCard}> 
                                            <button onClick={finalizeCard} className={style['Btn-ShopAll']}>Buy All</button>
                                            </Link>  
                            </section>  
                            <h4 className={style['wallet-line']}></h4>   
                    </div>
                                               
            </div>

                
            </Layout>     
            </body>
          
        );



};



export default ShoppingCard;