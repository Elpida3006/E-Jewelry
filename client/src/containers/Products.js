//HOC, if function (Component)
//get all products from / from server;
//apiUrl-products: 'http://localhost:3002/api/products';
//render all products with product components in products container, who is part of home page component

import React, {Component} from 'react';
// import Layout from '../components/Layout/Layout';
import Product from '../components/Product/Product';
import style from './Products.module.css';
import * as fetchData from '../services/fetch-data';

class Products extends Component {

    constructor(props){
        super(props);

        this.state = {
            products: [],
            currentCategory: 'all',
        };
    }

    componentDidMount(){

        fetchData.getProducts()
        .then(res => this.setState({ products: res }))
        .catch(error => console.log(error));
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;

        if (prevProps.match.params.category === category) {
            return;
        }

        fetchData.getProducts(category)
            .then(res => {

                this.setState({ products: res, currentCategory: category });
            })
            .catch(error => console.log(error));
    }

    render(){
        const { products } = this.state;
        return (
       
     // <Layout>
        <div className={style.Products}>
              {(products)?   
              products.map(x => 
                <Product key={x.id} {...x} />
            ) : 
         <p>No Offers!</p> 
        }
           
        </div>
    // </Layout>
        );
    }
}

export default Products;