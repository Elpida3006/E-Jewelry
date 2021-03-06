import React , {Component} from 'react';
import style from './Cover.module.css';
import logo from '../static/logo2.jpg';
import Layout from '../components/Layout/Layout';
// let  server = 'http://localhost:3002/api/';
import {Link} from 'react-router-dom';
//Class Components/State/Props/Handling Events

class Cover extends Component {
        constructor(props) {
          super(props);
            this.state = {
             Like: 0, 
           
         
             };
            // this.CounterLike = this.CounterLike.bind(this);
            // this.CounterUnLike = this.CounterUnLike.bind(this);
            // + 2 fn without arrow, ()=> in render / in onClick
    }
    
    CounterLike = () => {
        // const Like = this.state;
        this.setState( {Like: this.state.Like + 1});
    }
    CounterUnLike = () => {
        // const Like = this.state;
// + post to server match.params.id -> likes += 1;
        this.setState( {Like: this.state.Like - 1}  < 0 ?
        {Like:  0} :  {Like: this.state.Like - 1}) ;
    }
    
    render() {
        return ( 


<body className={style.Background}>
    


    <Layout> 
          
             <main className ={style['App-cover']}> 
        <img src = { logo } className ={style['App-logo']} alt = "logo" />
         <p>Welcome in Our E - Jewelry Shop 
         {/* <code>src/App.js</code> and save to reload. */ }
          </p>   
        <p> Let 's Start</p>   
        <div className={style.like}>
              
              <h4>  Like: {this.state.Like}      <button className={style.CoverBtn}  onClick={this.CounterLike}>Like Page</button>
              <button className={style.CoverBtn} onClick={this.CounterUnLike}>Unlike Page</button>
              </h4>
              
        </div>
             <li className={style['Btn-Home']}>
              <Link className={style['Li']} to="/Home">Home</Link>  
         </li>
          </main>  
          
        
         </Layout>  
     
         </body>
);


}
}

export default Cover;