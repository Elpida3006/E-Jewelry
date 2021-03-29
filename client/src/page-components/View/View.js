import React, {Component} from 'react';
import style from './View.module.css';
import Layout from '../../components/Layout/Layout';
// let  server = 'http://localhost:3002/api/';
import Admin from '../../components/Admin-Panel/Admin';
// import Products from './Products';
import Product from '../../components/Product/Product';
import {getAll} from '../../services/productService';
// const isLogin= (props)=>{

// };
const isAdmin= (props)=>{
    // isAdmin: true;
    //conditional rendering with state/props?
};
class View extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
             isAdmin: true,
            products: [],

            
        };
       
  };
  

    componentDidMount(){

        getAll()
        .then(res => this.setState({ products: res }))
        .catch(error => console.log(error));

    }

    // componentDidUpdate(prevProps) {
        
    //     const category = this.props.match.params.category;

    //     if (prevProps.match.params.category === category) {
    //         return;
    //     }

    //    getProducts(this.props.match.params.category)
    //         .then(res => {

    //             this.setState({ products: res, currentCategory: category });
    //         })
    //         .catch(error => console.log(error));
    // }
    render(){
     

const products = this.state.products;

return (
    <body className={style.BackgroundAdmin}>

<Layout>
    <div className={style.Home} >

            <Admin/> 
    
    </div>

 

    <div className={style.View}>
          
              {(products.length > 0)?   
           this.state.products.map(c => 
       
                <Product key={c.id} {...c} />
  
            ) : 
         <p>No New Jewelry!</p> 
        }
           
      
         
    

    </div>
</Layout>
</body>
);
}

}

export default View;