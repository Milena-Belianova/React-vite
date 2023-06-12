import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Home } from './routes/Home';
import NotFound from './routes/NotFound';
import { UserDetails } from './routes/UserDetails';
import { AboutMe } from './routes/AboutMe';
import Root from './routes/Root';

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
          path: '/user/:id',
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
