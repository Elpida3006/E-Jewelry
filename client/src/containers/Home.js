import React, {Component} from 'react';
import style from './Home.module.css';
import {StaticHomePart} from '../components/StaticHome/Static-Home-Part';
import Layout from '../components/Layout/Layout';
import UserProductCard from '../components/UserProductCard/UserProductCard';
import {getProducts} from '../services/productService';
import {UserContext} from '../global-context/UserContexts';

class Home extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            products: [],
            sortType: 'desc',
            search: '',
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
        filter = (e) => {
       
        this.setState({ search: e.target.value.substr(0,20) });

        }
  
    render(){
        const sortType = this.state.sortType;
        const currentCategory = this.state.currentCategory;
        const products = this.state.products;
        const search = this.state.search;
        
        const filteredProducts = products.filter(product => {
        return product.brand.indexOf(search) !== -1;
   });
  
            return (
                <body className={style.BackgroundHome}>
                <Layout>
                    <div className={style.Home} >
                    <StaticHomePart/>
                    
                    <div className={style.UserSearch}>   
                
                        <li className={style['Nav-UserSearch']}> 
                            <li className={style['Nav-S']}>Search Panel</li>
                            
                            <li className={style['Nav-Li']}>                  
                                    <button onClick={()=> this.onSort('asc')}className={style['Nav-Search']}>Sort Products by Asc Likes</button>
                                    <button onClick={()=> this.onSort('desc')}className={style['Nav-Search']}>Sort Products by Desc Likes</button>
                            </li> 
                            <li className={style['Nav-Li2']}> 
                                    <input icon="search"
                             onChange={this.filter.bind(this)} value={search} className={style['Nav-Search-Input']} type="text" name="searchProduct" placeholder=" Search your product by Brand.."/>
                            </li>        
                        </li>
                    </div>

                    <div className={style.Products}>
                                <h4 className={style.PCategory}>{currentCategory } Category Page</h4> 
                            {(products.length > 0)?   
                                (sortType === 'asc' )? filteredProducts
                                .sort((a, b) => a.like - b.like)
                                .map(c => 
                            
                                        <UserProductCard key={c.id} {...c} />   
                                    
                                    ) : filteredProducts
                                    .sort((a, b) => b.like - a.like)
                                    .map(c => 
                                
                                            <UserProductCard key={c.id} {...c} />   
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