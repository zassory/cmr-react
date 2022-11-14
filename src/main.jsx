import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';

import { 
  actionCliente as eliminarClienteAction , 
  ErrorPage , 
  Layout } from './components';

import {
  EditarCliente,
  loaderEditar as editarClienteLoader,
  actionEditar as editarClienteAction,
  Index , 
  loader as clientesLoader ,
  NuevoCliente , 
  action as nuevoClienteAction
  } from './pages';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,//Este se va a cargar cuando visites la pagina principal
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action:  nuevoClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path:'/clientes/:clienteId/editar',
        element:<EditarCliente />,
        loader:editarClienteLoader,
        action:editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path:'/clientes/:clienteId/eliminar',
        action:eliminarClienteAction
      }
    ]
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router = { router } />
  //</React.StrictMode>
)
