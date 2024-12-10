
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Landing from './pages/Landing/Landing';
import Layout from './components/Layout/Layouts';
import { Suspense } from 'react';


function App() {
  let routes = createHashRouter([
    {
      path: "", element: <Layout />, children: [
        {
          index: true, element: <Suspense>
            <Landing />
          </Suspense>
        }
      ]
    }
  ])
  return <RouterProvider router={routes}></RouterProvider>
}

export default App;
