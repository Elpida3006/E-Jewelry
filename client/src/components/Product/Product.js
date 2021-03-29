
import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import style from './Product.module.css';
import {Link} from 'react-router-dom';
import { deleteProduct } from '../../services/productService';


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
              
                <Link className={style['Nav-Product']} to={`/products/edit/${id}`}> 
                    <button className={style['Nav-Product']}>Edit</button>
                    </Link>  
                    <Link className={style['Nav-Product']} to={`/products/delete/${id}`}> 
                    <button   className={style['Nav-Product']}>Delete</button>
                    {/* onClick={deleteProduct(id)} */}
                    </Link>  

             

                    <Link className={style['Nav-Product']} to={`/products/details/${id}`}> 
                    <button className={style['Nav-Product']}>Details</button>
                    </Link>  
                    <Link className={style['Nav-Product']} to={`/products/buy/${id}`}> 
                    <button className={style['Nav-Product']}>Buy</button>
                    </Link>  
                    <Link className={style['Nav-Product']} to={`/products/like/${id}`}> 
                    <button className={style['Nav-Product']}>Like</button>
                    </Link> 

                </section>  
        </div>   
    
         
        );

        };



export default Product;