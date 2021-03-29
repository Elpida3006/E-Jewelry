
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
            <body className={style.DetailsBackground}>
              <Layout>
            <div className={style['Containers']}>
                  <div className={style['Details']}>

<h3 className={style['Details-Card']}  name="nameProduct">Name: {product.nameProduct}</h3>

<h4 className={style['Details-Card']} type="text" name="price" placeholder="Price...">Price: {product.price}</h4>

<img src={product.imageUrl} className={style['Product-Img']} type="text" name="imageUrl" alt="" placeholder="Image url..."/>

<h4 className={style['Details-Card']} name="description" >Description: {product.description}</h4>

<h4 className={style['Details-Card']} type="text" name="brand" >Brand: {product.brand}</h4>

<h4 className={style['Details-Card']} type="text" name="category" >Category: {product.category}</h4>


{/* <h4 className={style['Details-Card']} type="text" name="like" >Likes: {product.like}</h4> */}
<h4 className={style['Details-Card']} type="text" name="buyers" >Buyers: {product.buyers}</h4>


<section className={style['ButtonDetails']}>




    <Link className={style['Btn-Details']} to={`/products/buy/${product.id}`}> 
    <button className={style['Btn-Details']}>Buy</button>
    </Link>  
    <Link className={style['Btn-Details']} to={`/products/like/${product.id}`}> 
    <button className={style['Btn-Details']}>Like</button>
    </Link> 

</section>  
</div>      
                  </div>

                  <div className={style['Translations']}>
                  <p className={style['Translations']}>It is a details page for your favourite product!</p>
                  </div>
          

            </Layout>     
            </body>
          
       
         
        );

        };



export default Details;