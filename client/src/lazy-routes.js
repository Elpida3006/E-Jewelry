import React , {Suspense, Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router-dom';
import {lazy} from 'react';
import {UserContext} from './global-context/UserContexts';

const App = lazy(() => import('./containers/App'));
const Cover = lazy(() => import('./containers/Cover'));
const Admin = lazy(() => import('./containers/Admin'));
const Home = lazy(() => import('./containers/Home'));
const Register = lazy(() => import('./page-components/Register/Register'));
const Login = lazy(() => import('./page-components/Login/Login'));
const Profile = lazy(() => import('./page-components/Profile/Profile'));
const About = lazy(() => import('./page-components/About/About'));
const Contact = lazy(() => import('./page-components/Contact/Contact'));
const Create = lazy(() => import('./page-components/Create/Create'));
const Edit = lazy(() => import('./page-components/Edit/Edit'));
const View = lazy(() => import('./page-components/View/View'));
const Details = lazy(() => import('./page-components/Details/Details'));
// const Products = lazy(() => import('./containers/Products'));
// const Gold = lazy(() => import('./components/Products/Gold/Gold'));
// const Leather = lazy(() => import('./components/Products/Leather/Leather'));

//Lazy-Loading


class Routes extends Component {
    static contextType = UserContext;

  render() {
    const {
      isLogged,
      isAdmin
    } = this.context;

    return (
        <Router>
        <Suspense fallback={<h2>Please wait.....</h2>}>
          <Switch>
            <Route path="/" exact component={Cover} />
            <Route path="/Cover"   component={Cover} />
            <Route path="/Admin"  component={Admin}  />
            <Route path="/Home"  component={Home} />
            <Route path="/About"  component={About} />
            <Route path="/Contact"  component={Contact} />
            
            <Route path="/user/register"  component={Register} />
            <Route path="/user/login"  component={Login} />
            <Route path="/user/logout"  render={() => isLogged ? null : <Redirect to="/" />}  />
            <Route path="/user/profile"  component={Profile} />

            <Route path="/products/edit/:id"  exact component={Edit}/>
            <Route path="/products/create" exact  component={Create}/>
            <Route path="/admin/money"  component={Admin} />
            <Route path="/view"  exact component={View} />
            <Route path="/products/:category" exact component={Home} />
            <Route path="/products/details/:id"  component={Details} />
            <Route path="/products/:nameProduct"  component={Home} />


            </Switch>
        </Suspense>
        </Router>
    );
        }
}
export default Routes;