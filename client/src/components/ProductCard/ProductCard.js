
import React, { useContext } from 'react';
import style from './ProductCard.module.css';
import {Link} from 'react-router-dom';

import {UserContext} from '../../global-context/UserContexts';


//functional components
  
const ProductCard = ({
    _id: id,
    nameProduct,
    price,
    imageUrl,
description,
brand,
category,
like,
buyers
}) => {
        const {isLogged} = useContext(UserContext);
        return (
            
        <div className={style.Product}>

                <h3 className={style['Product-Card']}  name="nameProduct">Name: {nameProduct}</h3>
            
                <h4 className={style['Product-Card']} type="text" name="price" placeholder="Price...">Price: {price}</h4>
        
                <img src={imageUrl} className={style['Product-Img']} type="text" name="imageUrl" alt="" placeholder="Image url..."/>
        
            
                <h4 className={style['Product-Card']} type="text" name="like" >Likes: {like || 0}</h4>
                <h4 className={style['Product-Card']} type="text" name="buyers" >Buyers: {buyers.lenght || 0}</h4>

          
                <section className={style['Button']}>
              
                        
                {isLogged ? 
                 <>
                    <Link className={style['Nav-Product']} to={`/products/details/${id}`}> 
                    <button className={style['Nav-Product']}>Details</button>
                    </Link>  
                    </>
                :  <> 
 <Link className={style['Nav-Product']} to="/user/login"> 
                    <button className={style['Nav-Product']}>Details</button>
                    </Link> 
                    </>
                            }


                </section>  
        </div>   
    
         
        );

        };



export default ProductCard;