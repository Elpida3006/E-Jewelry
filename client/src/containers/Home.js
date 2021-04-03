import React, {Component} from 'react';
import style from './Home.module.css';
import logo from '../static/logo-home.jpg';
import Menu from '../components/Menu/Menu';
import Layout from '../components/Layout/Layout';
import UserSearch from '../components/UserPanel/UserSearch';
import ProductCard from '../components/ProductCard/ProductCard';
import {getProducts} from '../services/productService';
import {UserContext} from '../global-context/UserContexts';


class Home extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            products: [],
            currentCategory: 'All',
            
        };
       
  };
 static contextType = UserContext; 

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
console.log(this.context);
return (
<body className={style.BackgroundHome}>
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

 
<UserSearch/>
    <div className={style.Products}>
              <p className={style.PCategory}>{currentCategory} Category Page</p> 
              {(products.length > 0)?   
           this.state.products.map(c => 
       
                <ProductCard key={c.id} {...c} />   
               
            ) : 
         <p>No New Jewelry!</p> 
        }
           
        </div>
         
    

</div>
</Layout> 
</body>


);
}

}

export default Home;