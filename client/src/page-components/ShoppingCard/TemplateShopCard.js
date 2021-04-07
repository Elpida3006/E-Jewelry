import React  from 'react';
import style from './ShoppingCard.module.css';
import {Link} from 'react-router-dom';



//functional components
  
const TemplateShopCard = ( {_id: id, imageUrl, nameProduct, price, brand, category} ) => {
 

const finalizeCard = () => {
    // service.delShopProduct(id)
    //+ 
    //message
};
const delShopProduct = (e) => {

    // e.preventDefault();
    // service.delShopProduct(id)
    // .then((res) =>   history.push('/Home'));
  
    
};

        return (
         

                    <div className={style['Border-Card']}>

                       
                                <img src={imageUrl} className={style['Shop-Img']} type="text" name="imageUrl" alt="" />
                                <h4 className={style['Shop-Card']}  name="nameProduct">Name: {nameProduct}</h4>
                                <h4 className={style['Shop-Card']} type="text" name="price" placeholder="Price...">Price: {price}</h4>
                                <h4 className={style['Shop-Card']} type="text" name="brand" >Brand: {brand}</h4>
                                <h4 className={style['Shop-Card']} type="text" name="category" >Category: {category}</h4>

                                <section className={style['ButtonShop']}>

                                    <Link className={style['Btn-Shop']} to={'/products/finalizeCard'} onClick={finalizeCard}> 
                                    <button onClick={finalizeCard} className={style['Btn-Shop']}>Buy</button>
                                    </Link>  
                                
                                    <Link className={style['Btn-Shop']} to={'/Home'}> 
                                    <button className={style['Btn-Shop']}>Back</button>
                                    </Link> 
                                    <Link className={style['Btn-Shop']} to={`/products/delete/${id}`}> 
                                                    <button  onClick={delShopProduct} className={style['Btn-Shop']}>Remove Shop</button>        
                                </Link>  

                                </section>  
                    </div>      
               
                                  
          
       
         
        );

        };



export default TemplateShopCard;