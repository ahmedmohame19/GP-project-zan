import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layouts';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading/Loading';
import Landing from './pages/Landing/Landing';

const Shop = lazy(() => import('./pages/Shop/Shop'));

function App() {
  const routes = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "Shop", element: <Shop /> },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
