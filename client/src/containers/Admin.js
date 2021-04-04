import React, {Component} from 'react';
import style from './Admin.module.css';
import Layout from '../components/Layout/Layout';
import Admin from '../components/Admin-Panel/Admin';
// import Products from './Products';
// import Create from '../page-components/Create/Create';
// import Product from '../components/Product/Product';
// import {getProducts} from '../services/productService';

// const isLogin= (props)=>{

// };
// const isAdmin= (props)=>{
//     // isAdmin: true;
//     //conditional rendering with state/props?
// };

class AdminPage extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            // products: [],
            // currentCategory: 'All',
            
        };
       
  };
  

    // componentDidMount(){

    //   getProducts()
    //     .then(res => this.setState({ products: res }))
    //     .catch(error => console.log(error));

    // }

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
     
        // const currentCategory = this.state.currentCategory;
        // const products = this.state.products;

return (
<body className={style.BackgroundAdmin}>
<Layout>
 <div className={style["Body"]} >
 
            <div className={style.Ad}>
            <Admin/> 
        
            <h2 className={style["AdminLogo"]}>Welcome to Admin page</h2>
            </div>
    
</div>
 </Layout> 
</body>
);
}

}

export default AdminPage;