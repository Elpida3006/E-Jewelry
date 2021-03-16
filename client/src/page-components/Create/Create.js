
import React from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Create.module.css';
import {Link} from 'react-router-dom';


function Create() {
    return (
        <Layout>
            <div className={style.Create}>

<h1>Create New Offer</h1>
{/* {{#if errorMesage}}
<p class="message">{{errorMesage}}</p>
{{/if}} */}
    <div>
        <input type="text" name="name" placeholder="Name..."/>
    </div>
    <div>
        <input type="text" name="price" placeholder="Price..."/>
    </div>
    <div>
        <input type="text" name="imageUrl" placeholder="Image url..."/>
    </div>
    <div>
        <textarea name="description" placeholder="Give us some description about this offer..."></textarea>
    </div>
    <div>
        <input type="text" name="brand" placeholder="Brand..."/>
    </div>
    
      
    <div className={style['Button']}>
    <button className={style['Nav-Create']}>Create</button>
   
    <li className={style['Nav-Home']}>
              <Link className={style['Li']} to="/Home">Home</Link>  
         </li>
         </div>
    </div>   
        </Layout>
     
    );
}


export default Create;