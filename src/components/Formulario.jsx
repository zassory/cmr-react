import React from 'react'

export const Formulario = ({ cliente }) => {

  const { nombre , empresa , email , telefono , notas } = cliente;

  return (
    <>
      <div className='mb-4'>
        <label 
            htmlFor="nombre"
            className="text-gray-800"
        >
            Nombre:
        </label>
        <input 
          id="nombre"
          type="text"
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Nombre del cliente'
          name="nombre"
          defaultValue={cliente?.nombre}
        />
      </div>
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='empresa'
        >Empresa:
        </label>
        <input 
          id="empresa"
          type="text"
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Empresa del Cliente'
          name="empresa"
          defaultValue={cliente?.empresa}
        />
      </div>
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='email'
        >
          Email:
        </label>
        <input 
          id="email"
          type="email"
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Email del cliente'
          name="email"
          defaultValue={cliente?.email}
        />        
      </div>
      <div className='mb-4'>
        <label 
          htmlFor="telefono"
          className='text-gray-800'
          >Telefono:</label>
        <input 
          id="telefono"
          type="tel"
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Telefono del Cliente'
          name="telefono"
          defaultValue={cliente?.telefono}
        />
      </div>
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='notas'
        >Notas:</label>
        <textarea 
          as="textarea"
          id="notas"
          type="text"
          className='mt-2 block w-full p-3 bg-gray-50 h-40 align-self'
          name="notas"
          defaultValue={cliente?.notas}
        />
      </div>
    </>
  )
}
