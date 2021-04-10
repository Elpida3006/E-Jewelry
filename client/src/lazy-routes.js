import React , {Suspense, Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router-dom';
import {lazy} from 'react';
import {UserContext} from './global-context/UserContexts';
import isAuth from './autGuards';


const App = lazy(() => import('./containers/App'));
const Cover = lazy(() => import('./containers/Cover'));
const Admin = lazy(() => import('./containers/Admin'));
const Home = lazy(() => import('./containers/Home'));
const Register = lazy(() => import('./page-components/Register/Register'));
const Login = lazy(() => import('./page-components/Login/Login'));
const Profile = lazy(() => import('./page-components/Profile/Profile'));
const About = lazy(() => import('./page-components/About/About'));
const Contact = lazy(() => import('./page-components/Contact/Contact'));
const Error = lazy(() => import('./page-components/Error/Error'));
const Create = lazy(() => import('./page-components/Create/Create'));
const Edit = lazy(() => import('./page-components/Edit/Edit'));
const View = lazy(() => import('./page-components/View/View'));
const Money = lazy(() => import('./page-components/Money/Money'));
const Details = lazy(() => import('./page-components/Details/Details'));
const ShoppingCard = lazy(() => import('./page-components/ShoppingCard/ShoppingCard'));
const FinalizeMessage = lazy(() => import('./page-components/FinalizeMessage/FinalizeMessage'));


//Lazy-Loading


class Routes extends Component {
    static contextType = UserContext;

  render() {
    const {
      isLogged,
    
    } = this.context;

    return (
        <Router>
        <Suspense fallback={<h2>Please wait.....</h2>}>
          <Switch>
            <Route path="/" exact component={Cover} />
            <Route path="/Cover"   component={Cover} />
            <Route path="/Admin" exact component={Admin}  />
            <Route path="/Home"  component={Home} />
            <Route path="/About"  component={About} />
            <Route path="/Contact"  component={Contact} />
            <Route path="/Error"  component={Error} />
{/* User Routes */}
            <Route path="/user/register"  component={Register} />
            <Route path="/user/login"  component={Login} />
            <Route path="/user/logout"  render={() => isLogged ? null : <Redirect to="/" />}  />
            <Route path="/user/profile"  component={Profile} />
            <Route path="/products/:category" exact component={Home} />
            <Route path="/products/details/:id"  component={Details} />
            <Route path="/user/shoppingCard"  component={ShoppingCard} />
            <Route path="/user/finalize-card"  component={FinalizeMessage} />
{/* Admin Routes */}
            <Route path="/admin/money"  component={Money} />
            <Route path="/view"  exact component={View} />
            <Route path="/products/edit/:id"  exact component={Edit}/>
            <Route path="/admin/create" exact component={Create}/>
            </Switch>
        </Suspense>
        </Router>
    );
        }
}
export default Routes;