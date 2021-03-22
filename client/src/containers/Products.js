//HOC, if function (Component)
//get all products from / from server;
//apiUrl-products: 'http://localhost:3002/api/products';
//render all products with product components in products container, who is part of home page component

import React, {Component} from 'react';
// import Layout from '../components/Layout/Layout';
import Product from '../components/Product/Product';
import style from './Products.module.css';
import {getProducts} from '../services/fetch-data';

class Products extends Component {

    constructor(props){
        super(props);
console.log(props);
        this.state = {
            products: [],
            currentCategory: '',
        };
    }

    componentDidMount(){

      getProducts()
        .then(res => this.setState({ products: res }))
        .catch(error => console.log(error));

    }

    // componentDidUpdate(prevProps) {
    //     const category = this.prevProps.match.params.category;

    //     if (prevProps.match.params.category === category) {
    //         return;
    //     }

    //    getProducts(category)
    //         .then(res => {

    //             this.setState({ products: res, currentCategory: category });
    //         })
    //         .catch(error => console.log(error));
    // }

    render(){
        const { products, currentCategory } = this.state;
        console.log(currentCategory);
        console.log(this.state.products);

        return (
       
    //  <Layout>
        <div className={style.Products}>
              <p>{this.state.currentCategory} Category Page</p> 
              {(products)?   
              products.map(x => 
                <Product key={x.id} {...x} />
            ) : 
         <p>No New Jewelry!</p> 
        }
           
        </div>
    //  {/* </Layout> */}
        );
    }
}

export default Products;