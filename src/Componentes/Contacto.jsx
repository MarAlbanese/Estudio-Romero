import { useState } from 'react';
import Error from './Error';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(false);
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, email, asunto, mensaje].includes('')) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    setNombre('');
    setEmail('');
    setAsunto('');
    setMensaje('');
    setError(false);
    setFormularioEnviado(true);

    setTimeout(() => {
      setFormularioEnviado(false);
    }, 3000);
  };

    return (
        <div className="grid grid-cols-1 grid-rows-1 bg-gradient-to-b from-gray-300 to-gray-100 mt-48 mb-12 md:grid-cols-2" id="contacto">
        <div>
            <h1 className='mt-20 mb-16 ml-10 text-4xl font-medium text-gray-500'>CONTACTO</h1>
            <div className=' ml-10 mb-4 flex-col md:flex '>
                <div className='mr-20'>
                    <p className='font-medium text-blue-500'>DIRECCION</p>
                    <p>Montevideo 492</p>
                    <p>CABA</p>
                </div>
                <div>
                    <p className='font-medium text-blue-500'>TELEFONO</p>
                    <p className='font-medium text-gray-800'>4371-4555/4374-6650/5263-2356</p><br />
                    <p className='font-medium text-blue-500'>WhatsApp</p>
                    <p className='font-medium text-gray-800'>4371-4555/4374-6650/5263-2356</p><br />
                    <p className='font-medium text-blue-500'>e-mail</p>
                    <p className='font-medium text-gray-800'>info@rmiguelromeroyasociados.com.ar</p>
                </div>
            </div>
        </div>
        
        
        <div className='mb-12 mt-20'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
        {error && <Error mensaje="Todos los campos son obligatorios" />}
          {formularioEnviado && <p className="text-green-500 text-center mb-4">El formulario se envió correctamente, a la brevedad lo contactaremos.</p>}

          <div className="mb-4">
            <label htmlFor="nombre" className="block mb-2 font-medium text-gray-700">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              
              className="w-full px-3 py-2 border border-gray-300' rounded focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
            
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
              className="w-full px-3 py-2 border border-gray-300' rounded focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
            
          </div>
          <div className="mb-4">
            <label htmlFor="asunto" className="block mb-2 font-medium text-gray-700">Asunto:</label>
            <input
              type="text"
              id="asunto"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              
              className="w-full px-3 py-2 border border-gray-300' rounded focus:outline-none focus:ring-green-500 focus:border-green-500"            
            />
          
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block mb-2 font-medium text-gray-700">Mensaje:</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              
              className="w-full px-3 py-2 border border-gray-300' rounded focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
           
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
        </div>
        </div>
      );
    }
    
    export default Contacto;
    