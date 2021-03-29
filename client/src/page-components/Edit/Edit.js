import Admin from '../../components/Admin-Panel/Admin';
import React , {Component} from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Edit.module.css';
import {Link, Redirect} from 'react-router-dom';
import * as service from '../../services/productService';
import {useEffect, useState} from 'react';
//Forms
const  Edit = ( {match, history} ) => {
 
   const  [product, setproduct] =  useState({});
    // componentDidMount(){
useEffect(() => {

       service.getOne(match.params.id)
       .then(productsParams => {
        setproduct(productsParams);
       });
    }, []);
   const  onSubmitHandler = (e) => {
        e.preventDefault();
        const id = match.params.id;
        const {nameProduct, price, imageUrl, description, brand, category, like, buyers} = e.target;
        console.log(id, nameProduct.value, price.value, imageUrl.value, description.value, brand.value, category.value, like.value, buyers.value);
        service.editProduct(id, nameProduct.value, price.value, imageUrl.value, description.value, brand.value, category.value, like.value, buyers.value)
        .then(() =>   history.push('/view'))
        .catch(() => Redirect('/view'));

    };
// render(){
    // const {nameProduct, price, imageUrl, description, brand, category, like} = this.state;
console.log(product);
    return (
        <body className={style.BackgroundAdmin}>
        <Layout>
          <Admin/>   
          <br></br>
           <br></br>
<form onSubmit={onSubmitHandler}>
<div className={style.Edit}>
<h1 className={style['inEdith1']}>Edit Article</h1>
{/* {{#if errorMesage}}
<p class="message">{{errorMesage}}</p>
{{/if}} */}
    <div>
        <input className={style['inEdit']} type="text" name="nameProduct" defaultValue={product.nameProduct}/>
    </div>
    <div>
        <input className={style['inEdit']} type="text" name="price" defaultValue={product.price}/>
    </div>
    <div>
        <input className={style['inEdit']} type="text" name="imageUrl" defaultValue={product.imageUrl}/>
    </div>
    <div>
        <textarea name="description" defaultValue={product.description} >{product.description}</textarea>
    </div>
    <div>
        <input className={style['inEdit']} type="text" name="brand" defaultValue={product.brand}/>
    </div>
    <div>
        <input className={style['inEdit']} type="text" name="category" defaultValue={product.category}/>
    </div>
    <div>
        <input className={style['inEdit']} type="Number" name="like"  defaultValue={product.like}/>
    </div>
    <div>
        <input className={style['inEdit']} type="text" name="buyers"  defaultValue={product.buyers}/>
    </div> 
    <div className={style['Button']}>
    <button type="submit" className={style['Nav-inEdit']}>Save</button>
   
    <li>
              <Link className={style['Nav-inEdit']} to="/Home">Home</Link>  
         </li>
    </div>

    </div>   
</form>

        </Layout>
        </body>
     
    );
};
// }


export default Edit;