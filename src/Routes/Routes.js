import { createBrowserRouter } from 'react-router-dom';
import Category from '../Pages/Category/Category/Category';
import Home from '../Pages/Home/Home';
import News from '../Pages/News/News/News';
import Main from './layout/Main';

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/category/:id',
            element: <Category></Category>,
         },
         {
            path: '/news/:id',
            element: <News></News>,
         },
      ],
   },
]);
