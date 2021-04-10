import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {UserContext} from './global-context/UserContexts';
// import Layout from './components/Layout/Layout';

const isAuth = (WrappedComponent) => {

    const Component = (props) => {
        const { isLogged, isAdmin } = useContext(UserContext);
        const history = useHistory();
console.log(isLogged);
console.log(isAdmin);
        if (!isAdmin && !isLogged) {
            history.push('/user/login');

            return null;
        }
        if (!isAdmin && isLogged) {
            history.push('/Home');

            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return Component;
};

export default isAuth;