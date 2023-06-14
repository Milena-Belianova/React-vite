import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/NotFound';
import { UserDetails } from './pages/users/UserDetails';
import { AboutMe } from './pages/about/AboutMe';
import Root from './pages/root/Root';

export function AppRouter() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <AboutMe />,
        },
        {
          path: '/users/:id',
          element: <UserDetails />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export function App() {
  return <AppRouter />;
}
