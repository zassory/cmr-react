import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';

import { Layout } from './components';
import { Index , NuevoCliente } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,//Este se va a cargar cuando visites la pagina principal
        element: <Index />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />
      }
    ]
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>
)