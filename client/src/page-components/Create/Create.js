
import React from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Create.module.css';
import {Link, Redirect} from 'react-router-dom';
import * as service from '../../services/productService';
import Admin from '../../components/Admin-Panel/Admin';
import {useEffect, useState} from 'react';
//Forms
function Create({history, match, location}) {

 const  [errorMesage, seterrorMesage] =  useState('');
const  [successMessage, setsuccessMessage] =  useState('');

//         seterrorMesage(errorMesage);
//         setsuccessMessage(successMessage);
    


const onSubmitHandler = (e) => {
        e.preventDefault();
       

    const {nameProduct, price, imageUrl, description, brand, category, like} = e.target;
    // console.log(nameProduct.value, price.value, imageUrl.value, description.value, brand.value, category.value, like.value);
if (nameProduct.value.length < 1 || price.value.length < 1 ||  imageUrl.value.length < 1 || description.value.length < 1 || brand.value.length < 1 || category.value.length < 1 || like.value.length < 1) {
    let  errorMesage = 'Please fill any inputs!';
    seterrorMesage(errorMesage);
} else {
    let  successMessage = 'It is Right';
    setsuccessMessage(successMessage);
}
 if(price.value){
    const regEx = /^\d+$/;

        if(!regEx.test(price.value)) {
    let  errorMesage = 'Price have to digit number';
    seterrorMesage(errorMesage);
} else {
    let  successMessage = 'It is Right';
    setsuccessMessage(successMessage);
}
 }
if(imageUrl.value) {
    const regEx = /^https|http/;
        if(!regEx.test(imageUrl.value)) {
        let  errorMesage = 'Invalid Url';
        seterrorMesage(errorMesage);
    } else {
        let successMessage = 'It is Correct!';
        setsuccessMessage(successMessage);
    }
}
    service.createProduct(nameProduct.value, price.value, imageUrl.value, description.value, brand.value, category.value, like.value)
    .then(() =>   history.push('/view'))
    .catch((err) => {
        let  errorMesage = 'Somenting Went wrong! Check all values';
        seterrorMesage(errorMesage);
    });
};


    return (
        <body className={style.BackgroundAdmin}>
        <Layout>
           <Admin/> 
           <br></br>
             
          <div className={style['Notification']}>
              {  errorMesage ?
              <>           
              <div className={style['Isdanger']}> 
          <p className={style['Isdanger']}>{errorMesage}</p>
          </div> </> :<> </> }
         { successMessage ? <> 
         <div className={style['Issuccess']}>
            <p className={style['Issuccess']}>{successMessage}</p>
          </div></> :<></>
         
         } 
              </div>
              <br></br>
              <br></br>
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
                    <div >
                        {/* <input className={style['inCreate']} /> */}
                        <select className={style['select']} type="text" name="category">
                                                <option value="Silver">Silver</option>
                                                <option value="Gold">Gold</option>
                                                <option value="Leather">Leather</option>
                                        
                        </select>
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
     </body>
    );
}


export default Create;