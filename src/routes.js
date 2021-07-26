import Home from './page/Home';
import SignIn from './page/Login';
import SignUp from './page/Register';
import User from './page/User';
import Setting from './page/Setting';
import NewPost from './page/NewPost';

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
        // name: 'user',
        exact:false,

    },
    {
        path: '/setting',
        component: Setting,
        name: 'Setting',
    },
    {
        path: '/newpost',
        component: NewPost,
        name: 'New Post',
    }

   
]
