
import React from 'react';
import style from './Details.module.css';
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import * as service from '../../services/productService';
import {useEffect, useState} from 'react';


//functional components
  
const Details = ( {match, history} ) => {
    const  [product, setproduct] =  useState({});
    // componentDidMount(){
useEffect(() => {

       service.getDetails(match.params.id)
       .then(productsParams => {
        setproduct(productsParams);
       });
    }, []);

        return (
            <Layout>
 <div className={style.Product}>

<h3 className={style['Product-Card']}  name="nameProduct">Name: {product.nameProduct}</h3>

<h4 className={style['Product-Card']} type="text" name="price" placeholder="Price...">Price: {product.price}</h4>

<img src={product.imageUrl} className={style['Product-Img']} type="text" name="imageUrl" alt="" placeholder="Image url..."/>

<h4 className={style['Product-Card']} name="description" >Description: {product.description}</h4>

<h4 className={style['Product-Card']} type="text" name="brand" >Brand: {product.brand}</h4>

<h4 className={style['Product-Card']} type="text" name="category" >Category: {product.category}</h4>
<h4 className={style['Product-Card']} type="text" name="like" >Likes: {product.like}</h4>
<h4 className={style['Product-Card']} type="text" name="buyers" >Buyers: {product.buyers}</h4>


<section className={style['Button']}>

   

  
    <Link className={style['Nav-Product']} to={`/products/buy/${product.id}`}> 
    <button className={style['Nav-Product']}>Buy</button>
    </Link>  
    <Link className={style['Nav-Product']} to={`/products/like/${product.id}`}> 
    <button className={style['Nav-Product']}>Like</button>
    </Link> 

</section>  
</div>   

            </Layout> 
       
         
        );

        };



export default Details;