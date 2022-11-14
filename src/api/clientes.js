

export const obtenerClientes = async() => {    
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado;
}

export const obtenerCliente = async(id) => {    
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = await respuesta.json()
    return resultado;
}

export const agregarCliente = async(data) => {
    try{

        const respuesta = await fetch(import.meta.env.VITE_API_URL,{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        });

        await respuesta.json();

    }catch(error){
        console.log(error);
    }
}

export const actualizarCliente = async(id , data) => {
    try{

        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method:'PUT',
            body: JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        });

        await respuesta.json();

    }catch(error){
        console.log(error);
    }
}

export const eliminarCliente = async(id) =>{
    try{

        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method:'DELETE',
            //porque no estamos enviando informacion
        });

        await respuesta.json();

    }catch(error){
        console.log(error);
    }
}