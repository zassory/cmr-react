import { Form , useNavigate , useLoaderData, useActionData , redirect } from 'react-router-dom';
import { Error , Formulario } from '../components';

import { obtenerCliente , actualizarCliente } from '../api/clientes';

export const loaderEditar = async({ params }) => {
    const cliente = await obtenerCliente( params.clienteId );
    if(Object.values(cliente).length === 0){
      throw new Response('',{
        status:404,
        statusText:'No hay resultados'
      });
    }
    return cliente;
}

export const actionEditar = async({request,params}) => {
  const formData = await request.formData();//formData es algo que existe en el prototype

  const data = Object.fromEntries( formData );

  const email = formData.get('email');
  
  const errores = [];
  if(Object.values(data).includes('')){
    errores.push('Todos los campos son obligatorios'); //0
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errores.push('El email no es válido');//1
  }

  //Retornar datos si hay errores
  if(Object.keys(errores).length){
    return errores;
  }

  //Actualizar el cliente
  await actualizarCliente(params.clienteId,data);
  return redirect('/');  
}

export const EditarCliente = () => {

  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
    <p className='mt-3'>A continuación podrás modificar los datos de un cliente</p>
    <div className="flex justify-end">
      <button
        className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-md"
        onClick={() => navigate(-1)}
      >
        Volver
      </button>
    </div>
    <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>

      {errores?.length && errores.map( (error,i) => <Error key={i}>{ error }</Error> )}

      <Form
        method='post'
        noValidate
      >
        <Formulario 
          cliente={ cliente }
        />
          <input 
            type="submit" 
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg rounded-md'
            value="Editar Cliente"
          />
      </Form>
    </div>
  </>
  )
}
