import { Outlet , Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
        <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
          <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>

          <nav className='mt-10'>
            <Link className='text-2xl block mt-2 hover:text-blue-300 text-white' to="/">Clientes</Link>
            <Link className='text-2xl block mt-2 hover:text-blue-300 text-white' to="/clientes/nuevo">Nuevo Cliente</Link>
          </nav>

        </div>
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet />
        </main>
    </div>
  )
}