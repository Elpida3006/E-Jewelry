import Admin from '../../components/Admin-Panel/Admin';
import React , {Component} from 'react';
import Layout from '../../components/Layout/Layout';
import style from './Edit.module.css';
import {Link, Redirect} from 'react-router-dom';
import * as service from '../../services/productService';

//Forms
class Edit extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            nameProduct: '',
            price:'',
            imageUrl:'',
            description:'',
            brand:'',
            category:'',
            like:'',
        };
    }
    componentDidMount(){
      
        // const {nameProduct, price, imageUrl, description, brand, category, like} = e.target.value;
    }
    //  onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     const {nameProduct, price, imageUrl, description, brand, category, like} = e.target;
    //     service.editProduct(nameProduct.value, price.value, imageUrl.value, description.value, brand.value, category.value, like.value)
    //     .then(() =>   history.push('/Home'))
    //     .catch(() => Redirect('/'));

    // };
render(){
    const {nameProduct, price, imageUrl, description, brand, category, like} = this.state;

    return (
        <Layout>
          <Admin/>   
          <br></br>
           <br></br>
<form >
<div className={style.Edit}>
<h1 className={style['inEdith1']}>Edit Article</h1>
{/* {{#if errorMesage}}
<p class="message">{{errorMesage}}</p>
{{/if}} */}
    <div>
        <input className={style['inEdit']} type="text" name="nameProduct" value={nameProduct}/>
    </div>
    <div>
        <input className={style['inEdit']} type="text" name="price" value={price}/>
    </div>
    <div>
        <input className={style['inEdit']} type="text" name="imageUrl" value={imageUrl}/>
    </div>
    <div>
        <textarea name="description" >{description}</textarea>
    </div>
    <div>
        <input className={style['inEdit']} type="text" name="brand" value={brand}/>
    </div>
    <div>
        <input className={style['inEdit']} type="text" name="category" value={category}/>
    </div>
    <div>
        <input className={style['inEdit']} type="Number" name="like"  value={like}/>
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
     
    );
}
}


export default Edit;