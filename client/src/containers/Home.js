import React, {Component} from 'react';
import style from './Home.module.css';
import logo from '../static/logo-home.jpg';
import Menu from '../components/Menu/Menu';
import Layout from '../components/Layout/Layout';
// let  server = 'http://localhost:3002/api/';
import Admin from '../components/Admin-Panel/Admin';
// import Products from './Products';
import Product from '../components/Product/Product';
import {getProducts} from '../services/productService';
// const isLogin= (props)=>{

// };
const isAdmin= (props)=>{
    // isAdmin: true;
    //conditional rendering with state/props?
};
class Home extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            products: [],
            currentCategory: 'all',
            
        };
       
  };
  

    componentDidMount(){

      getProducts()
        .then(res => this.setState({ products: res }))
        .catch(error => console.log(error));

    }

    componentDidUpdate(prevProps) {
        
        const category = this.props.match.params.category;

        if (prevProps.match.params.category === category) {
            return;
        }

       getProducts(this.props.match.params.category)
            .then(res => {

                this.setState({ products: res, currentCategory: category });
            })
            .catch(error => console.log(error));
    }
    render(){
     
const currentCategory = this.state.currentCategory;
const products = this.state.products;

return (

<Layout>
<div className={style.Home} >
<div className={style.Static}>
    <div className={style.Menu}>
    <Menu/>
    </div>
      
    <div className={style.Image}>
        <img src = { logo } alt = "logo" />
    </div>
</div>

    <div className={style.Admin}>
   {isAdmin ? <Admin/> : null}
    </div>

    <div className={style.Products}>
              <p>{currentCategory} Category Page</p> 
              {(products.length > 0)?   
           this.state.products.map(c => 
               
                  <Product key={c.id} {...c} />
               
              
               
            ) : 
         <p>No New Jewelry!</p> 
        }
           
        </div>
         
    

</div>
</Layout>

);
}

}

export default Home;