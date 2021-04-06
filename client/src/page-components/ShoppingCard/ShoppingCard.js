import React  from 'react';
import style from './ShoppingCard.module.css';
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import * as service from '../../services/productService';
import {useEffect, useState} from 'react';


//functional components
  
const ShoppingCard = ( {match, history} ) => {
    const  [product, setproduct] =  useState({});
    // componentDidMount(){
useEffect(() => {

    //    service.getDetails(match.params.id)
    //    .then(productsParams => {
    //     setproduct(productsParams);
    //    });
    }, []);

const finalizeCard = () => {
    // service.delShopProduct(match.params.id)
    //+ 
    //message
};
const delShopProduct = (e) => {

    // e.preventDefault();
    // service.delShopProduct(match.params.id)
    // .then((res) =>   history.push('/Home'));
  
    
};

        return (
            <body className={style.DetailsBackground}>
              <Layout>
            <div className={style['Containers-Card']}>

                    <div className={style['Border-Card']}>

                       
                                <img src={product.imageUrl} className={style['Shop-Img']} type="text" name="imageUrl" alt="" />
                                <h4 className={style['Shop-Card']}  name="nameProduct">Name: {product.nameProduct}</h4>
                                <h4 className={style['Shop-Card']} type="text" name="price" placeholder="Price...">Price: {product.price}</h4>
                                <h4 className={style['Shop-Card']} type="text" name="brand" >Brand: {product.brand}</h4>
                                <h4 className={style['Shop-Card']} type="text" name="category" >Category: {product.category}</h4>

                                <section className={style['ButtonShop']}>

                                    <Link className={style['Btn-Shop']} to={'/products/finalizeCard'} onClick={finalizeCard}> 
                                    <button onClick={finalizeCard} className={style['Btn-Shop']}>Buy</button>
                                    </Link>  
                                
                                    <Link className={style['Btn-Shop']} to={'/Home'}> 
                                    <button className={style['Btn-Shop']}>Back</button>
                                    </Link> 
                                    <Link className={style['Btn-Shop']} to={`/products/delete/${match.params.id}`}> 
                                                    <button  onClick={delShopProduct} className={style['Btn-Shop']}>Remove Shop</button>        
                                </Link>  

                                </section>  
                    </div>      
               
                                  
            </div>

                
            </Layout>     
            </body>
          
       
         
        );

        };



export default ShoppingCard;