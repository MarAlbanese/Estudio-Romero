function Footer() {
    return (

    <>
      <footer className="bg-gradient-to-t from-gray-600 to-gray-400 p-4 justify-between  hidden md:flex">
        <div className="mb-12 mt-16 container mx-auto flex items-center justify-between">
          <div>
            <p className="text-sm">© 2023 Romero & Asociados. Todos los derechos reservados.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#nuestro-estudio" className="text-gray-300 hover:text-white font-semibold">Nuestro Estudio</a>
              </li>
              <li>
                <a href="#equipo-profesional" className="text-gray-300 hover:text-white font-semibold">Equipo Profesional</a>
              </li>
              <li>
                <a href="#areas" className="text-gray-300 hover:text-white font-semibold">Areas</a>
              </li>
              <li>
                <a href="#publicaciones" className="text-gray-300 hover:text-white font-semibold">Publicaciones</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white font-semibold">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      
      <footer className="bg-gradient-to-t from-gray-600 to-gray-400 p-4 justify-between flex flex-col md:hidden">
        <div className="mb-12 mt-16 container mx-auto items-center justify-between md:flex">
          <div>
            <p className="text-sm">© 2023 Romero & Asociados. Todos los derechos reservados.</p>
          </div>     
            <ul className=" md:flex space-x-4">
              <li>
                <a href="#nuestro-estudio" className="ml-4 text-gray-300 hover:text-white font-semibold">Nuestro Estudio</a>
              </li>
              <li>
                <a href="#equipo-profesional" className="text-gray-300 hover:text-white font-semibold">Equipo Profesional</a>
              </li>
              <li>
                <a href="#areas" className="text-gray-300 hover:text-white font-semibold">Areas</a>
              </li>
              <li>
                <a href="#publicaciones" className="text-gray-300 hover:text-white font-semibold">Publicaciones</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white font-semibold">Contacto</a>
              </li>
            </ul>
         
        </div>
      </footer>
      


      </>      

   );
  }
  
  export default Footer;
