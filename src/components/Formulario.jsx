import React from 'react'

export const Formulario = ({ cliente }) => {
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
        />
      </div>
    </>
  )
}
