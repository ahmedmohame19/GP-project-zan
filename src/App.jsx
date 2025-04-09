import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layouts';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading/Loading';
import Landing from './pages/Landing/Landing';
import ProductDetails from './pages/Productdetails/ProductDetails';
import ContactUs from './pages/ContactUs/ContactUs';
import CategoryDetails from './pages/CategoryDeatails/CategoryDetails';
import Cart from './pages/Cart/Cart';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/Signup/Signup';
import AuthLayout from './pages/Auth/AuthLayout';

const Shop = lazy(() => import('./pages/Shop/Shop'));

function App() {
  const routes = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "Shop", element: <Shop /> },
        { path: "productdetails/:id", element: <ProductDetails /> },
        { path: "categoery/:name", element: <CategoryDetails /> },
        { path: "cart", element: <Cart /> },
        { path: "contactus", element: <ContactUs /> },
      ],
    },
    {
      path: "Auth",
      element: <AuthLayout />,
      children: [
        { path: "Login", element: <Suspense fallback={<Loading />}><Login /></Suspense> },
        { path: "SignUp", element: <Suspense fallback={<Loading />}><SignUp /></Suspense> },
        // { path: "Forget", element: <Suspense fallback={<Loading />}><Forget /></Suspense> },
        // { path: "Reset/:ZAN", element: <Suspense fallback={<Loading />}><Change /></Suspense> },
      ]
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
