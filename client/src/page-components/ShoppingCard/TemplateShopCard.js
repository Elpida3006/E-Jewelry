import React  from 'react';
import style from './ShoppingCard.module.css';
import {Link, useHistory} from 'react-router-dom';
import * as service from '../../services/productService';
 

//functional components
  
const TemplateShopCard = ( {_id: id, imageUrl, nameProduct, price, brand, category} ) => {
 const history = useHistory();


const deleteShopProduct = (e) => {

    e.preventDefault();
    service.delShopProduct(id)
    .then((res) =>   history.push('/Home'));
  
    
};
const buyOne = (e) => {

    e.preventDefault();
    service.buyOne(id)
    .then((res) =>   history.push('/Home'));
  
    
};

        return (
         

                    <div className={style['Border-Card']}>

                       
                                <img src={imageUrl} className={style['Shop-Img']} type="text" name="imageUrl" alt="" />
                                <h4 className={style['Shop-Card']}  name="nameProduct">Name: {nameProduct}</h4>
                                <h4 className={style['Shop-Card']} type="text" name="price" placeholder="Price...">Price: {price}</h4>
                                <h4 className={style['Shop-Card']} type="text" name="brand" >Brand: {brand}</h4>
                                <h4 className={style['Shop-Card']} type="text" name="category" >Category: {category}</h4>

                                <section className={style['ButtonShop']}>

                                    <button onClick={buyOne} className={style['Btn-Shop']}>Buy</button>
                                  
                                
                                    <Link  to={'/Home'}> 
                                    <button className={style['Btn-Shop']}>Back</button>
                                    </Link> 
                                   
                                    <button className={style['Btn-Shop']} onClick={deleteShopProduct} className={style['Btn-Shop']}>Remove Shop</button>        
                                

                                </section>  
                    </div>      
               
                                  
          
       
         
        );

        };



export default TemplateShopCard;