
import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import style from './Product.module.css';
import {Link} from 'react-router-dom';



  
const Product = ({
    _id: id,
    nameProduct,
    price,
    imageUrl,
description,
brand,
category,
likes,
}) => {

        return (
            
        <div className={style.Product}>

            <h3 className={style["Product"]}  name="nameProduct">{nameProduct}</h3>
        
            <h2 className={style["Product"]} type="text" name="price" placeholder="Price...">{price}</h2>
      
            <img src={imageUrl} className={style["inCreate"]} type="text" name="imageUrl" placeholder="Image url..."/>
       
            <h2 name="description" placeholder="Give us some description about this offer...">{description}</h2>
       
            <h2 className={style["Product"]} type="text" name="brand" >{brand}</h2>
        
            <h2 className={style["Product"]} type="text" name="category" >{category}</h2>
            <h2 className={style["Product"]} type="text" name="likes" >{likes}</h2>

          
              <div className={style['Button']}>
              <button className={style['Nav-Product']}>Details</button>
       
              <li>
                  <Link className={style['Nav-Product']} to='/Product/:ProductId'>Home</Link>  
             </li>
        
    
              </div>  
        </div>   
    
         
        );

        };



export default Product;