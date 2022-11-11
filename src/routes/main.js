import { lazy } from 'react';

// project imports
import Loadable from 'components/loadable';
import MinimalLayout from 'layout/minimalLayout';
import { ROUTES } from 'utils/common';

// login option 3 routing
const Home = Loadable(lazy(() => import('screens/home')));
const Profile = Loadable(lazy(() => import('screens/profile')));
const PostDetails = Loadable(lazy(() => import('screens/postDetails')));
const Login = Loadable(lazy(() => import('screens/login')));
const HomePage = Loadable(lazy(() => import('screens/homePage')));
const NotLikedPosts = Loadable(lazy(() => import('screens/notLikedPosts')));
const Chat = Loadable(lazy(() => import('screens/chat')));
const Discussion = Loadable(lazy(() => import('screens/discussion')));
const Users = Loadable(lazy(() => import('screens/users')));
const NotFollowedUsers = Loadable(lazy(() => import('screens/notFollowedUsers')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const Landing = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/:username/*',
            element: <Profile />
        },
        {
            path: 'some/where/in/www/:username/*',
            element: <Profile />
        },
        {
            path: ROUTES.LOGIN,
            element: <Login />
        },
        {
            path: ROUTES.HOME,
            element: <HomePage />
        },
        {
            path: ROUTES.NOT_LIKED_POSTS,
            element: <NotLikedPosts />
        },
        {
            path: ROUTES.NOT_FOLLOWED_USERS,
            element: <NotFollowedUsers />
        },
        {
            path: ROUTES.CHATS,
            element: <Chat />
        },
        {
            path: ROUTES.DISCUSSIONS,
            element: <Discussion />
        },
        {
            path: ROUTES.POST_DETAILS,
            element: <PostDetails />
        },
        {
            path: ROUTES.USERS,
            element: <Users />
        }
    ]
};

export default Landing;
