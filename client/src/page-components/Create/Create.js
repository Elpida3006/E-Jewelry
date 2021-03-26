
import React from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Create.module.css';
import {Link} from 'react-router-dom';

//Forms
function Create() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
// e.target.nameProduct.value
// e.target.price.value
// e.target.imageUrl.value

// e.target.description.value
// e.target.brand.value
// e.target.category.value
//uncontrolled Form
//nameProduct, price, imageUrl, description, brand, category

    };

    return (
        <Layout>
          
<form onSubmit={onSubmitHandler}>
<div className={style.Create}>
<h1 className={style['createh1']}>Create New Offer</h1>
{/* {{#if errorMesage}}
<p class="message">{{errorMesage}}</p>
{{/if}} */}
    <div>
        <input className={style['inCreate']} type="text" name="nameProduct" placeholder="Name..."/>
    </div>
    <div>
        <input className={style['inCreate']} type="text" name="price" placeholder="Price..."/>
    </div>
    <div>
        <input className={style['inCreate']} type="text" name="imageUrl" placeholder="Image url..."/>
    </div>
    <div>
        <textarea name="description" placeholder="Give us some description about this offer..."></textarea>
    </div>
    <div>
        <input className={style['inCreate']} type="text" name="brand" placeholder="Brand..."/>
    </div>
    <div>
        <input className={style['inCreate']} type="text" name="category" placeholder="Category..."/>
    </div>
    <div>
        <input className={style['inCreate']} type="Number" name="like" placeholder="like..."/>
    </div>
      
    <div className={style['Button']}>
    <button type="submit" className={style['Nav-Create']}>Create</button>
   
    <li>
              <Link className={style['Nav-Create']} to="/Home">Home</Link>  
         </li>
    </div>

    </div>   
</form>

        </Layout>
     
    );
}


export default Create;