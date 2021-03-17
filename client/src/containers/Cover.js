import React , {Component} from 'react';
import style from './Cover.module.css';
import logo from '../static/logo1.png';
import Layout from '../components/Layout/Layout';
// let  server = 'http://localhost:3002/api/';
import {Link} from 'react-router-dom';


class Cover extends Component {
        constructor(props) {
          super(props);
            this.state = {
             Like: 0
             };
            this.CounterLike = this.CounterLike.bind(this);
    }
    
    CounterLike = () => {
        this.setState( {Like: this.state.Like + 1});
    }
    
    render() {
        return ( 

    <Layout> 
          
             <main className ={style['App-cover']}> 
        <img src = { logo } className ={style['App-logo']} alt = "logo" />
         <p>Welcome in Our E - Jewelry Shop 
         {/* <code>src/App.js</code> and save to reload. */ }
          </p>   
        <p> Let 's Start</p>   
        <div>
              
              <h4>  Like: {this.state.Like}      <button onClick={this.CounterLike}> Like Page </button></h4>
              
        </div>
             <li className={style['Nav-Home']}>
              <Link className={style['Li']} to="/Home">Home</Link>  
         </li>
          </main>  
          
        
         </Layout>  
     

);


}
}

export default Cover;