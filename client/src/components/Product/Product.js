
import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import style from './Product.module.css';
import {Link} from 'react-router-dom';


//functional components
  
const Product = ({
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

        return (
            
        <div className={style.Product}>

                <h3 className={style['Product-Card']}  name="nameProduct">Name: {nameProduct}</h3>
            
                <h4 className={style['Product-Card']} type="text" name="price" placeholder="Price...">Price: {price}</h4>
        
                <img src={imageUrl} className={style['Product-Img']} type="text" name="imageUrl" alt="" placeholder="Image url..."/>
        
                <h4 className={style['Product-Card']} name="description" >Description: {description}</h4>
        
                <h4 className={style['Product-Card']} type="text" name="brand" >Brand: {brand}</h4>
            
                <h4 className={style['Product-Card']} type="text" name="category" >Category: {category}</h4>
                <h4 className={style['Product-Card']} type="text" name="like" >Likes: {like}</h4>
                <h4 className={style['Product-Card']} type="text" name="buyers" >Buyers: {buyers}</h4>

          
                <section className={style['Button']}>
               
        

               
                    <Link className={style['Nav-Product']} to={`/Products/Details/${id}`}> 
                    <button className={style['Nav-Product']}>Details</button>
                    </Link>  

                </section>  
        </div>   
    
         
        );

        };



export default Product;