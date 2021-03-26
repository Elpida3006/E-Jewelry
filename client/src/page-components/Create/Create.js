
import React from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Create.module.css';
import {Link, Redirect} from 'react-router-dom';
import * as service from '../../services/productService';

//Forms
function Create({history}) {
    
    const onSubmitHandler = (e) => {
        e.preventDefault();

//uncontrolled Form
    const {nameProduct, price, imageUrl, description, brand, category, like} = e.target;
    console.log(nameProduct.value, price.value, imageUrl.value, description.value, brand.value, category.value, like.value);
    service.createProduct(nameProduct.value, price.value, imageUrl.value, description.value, brand.value, category.value, like.value)
    .then(r =>   history.push('/Home'))
        .catch(e => Redirect('/'));
        };
      

    return (
        <Layout>
          
            <form onSubmit={onSubmitHandler}>
                <fieldset>
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
                </fieldset>
            </form>

        </Layout>
     
    );
}


export default Create;