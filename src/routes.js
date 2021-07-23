import Home from './page/Home';
import SignIn from './page/Login';
import SignUp from './page/Register';
import User from './page/User';

export const routes = [
    {
        path:'/',
        component: Home,
        name: 'Home',
        exact: true,
    },
    {
        path:'/signin',
        component: SignIn,
        name: 'Sign in',
        exact: false,
        requiredAuth: false
    },
    {
        path:'/signup',
        component: SignUp,
        name: 'Sign up',
        exact: false,
        requiredAuth: false
    },
    {
        path: '/user',
        component: User,

        exact:false,

    }

   
]
