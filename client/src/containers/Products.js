//HOC, if function (Component)
//get all products from / from server;
//apiUrl-products: 'http://localhost:3002/api/products';
//render all products with product components in products container, who is part of home page component

import React, {Component} from 'react';
import Layout from '../components/Layout/Layout';
import Product from '../components/Product/Product';
// import Layout from '../components/Layout/Layout'
import style from './Products.module.css';

class Products extends Component {

    constructor(props){
        super(props);

    }

    // ComponentDidMount(){

    // }
    render(){
        return (
            // <Layout>
        <div className={style.Products}>
    <Product/>
</div>
            // </Layout>

        );
    }
}

export default Products;