import React, {Component} from 'react';
import style from './Home.module.css';
import logo from '../static/logo-home.jpg';
import Menu from '../components/Menu/Menu';
import Layout from '../components/Layout/Layout';
import UserSearch from '../components/UserPanel/UserSearch';
import ProductCard from '../components/ProductCard/ProductCard';
import {getProducts, sortingData} from '../services/productService';
import {UserContext} from '../global-context/UserContexts';


class Home extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            products: [],
            sortType: 'asc',
            currentCategory: 'All',
            isLogged: '',
            isAdmin: '',
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
   
        getProducts(this.props.match.params.category )
            .then(res => {

                this.setState({ products: res, currentCategory: category });
            })
            .catch(error => console.log(error));
    }
onSort = sortType => {
    this.setState({sortType});}
    
    render(){
        const sortType = this.state.sortType;
        const currentCategory = this.state.currentCategory;
        const products = this.state.products;

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

        
        <div className={style.UserSearch}>   
      
            <li className={style['Nav-UserSearch']}> 
                <li className={style['Nav-S']}>
                Search Panel
                </li>

                <li className={style['Nav-Li']}> 
                                     
                <button onClick={()=> this.onSort('asc')}className={style['Nav-Search']}>Sort Products by Asc Likes</button>
                <button onClick={()=> this.onSort('desc')}className={style['Nav-Search']}>Sort Products by Desc Likes</button>
                </li>          
       
            </li>
        </div>
            <div className={style.Products}>
                    <p className={style.PCategory}>{currentCategory } Category Page</p> 
                {(products.length > 0)?   
                    (sortType === 'asc' )? this.state.products
                    .sort((a, b) => a.like - b.like)
                    .map(c => 
                
                            <ProductCard key={c.id} {...c} />   
                        
                        ) : this.state.products
                        .sort((a, b) => b.like - a.like)
                        .map(c => 
                    
                                <ProductCard key={c.id} {...c} />   
                            
                            ) 
                
                : 
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