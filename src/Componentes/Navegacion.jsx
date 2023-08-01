const Navegacion = () => {
    return (
        <>
        <nav className="bg-gradient-to-b from-green-900 to-green-700 p-4  justify-between hidden md:flex">
            <div className="flex-col">
            <a href="#nuestro-estudio" className="text-gray-400 font-bold text-xl ml-6">Miguel Anguel Romero</a><br />
            <a href="#nuestro-estudio" className="text-gray-400 font-bold text-xl ml-6">& Asociados</a>    
            </div>
            <div className="text-gray-400">
                <ul className="flex space-x-4">
                    <li>
                        <a href="#nuestro-estudio" className="hover:border-t-2 border-gray-400 px-2 py-1  cursor-pointer">NUESTRO ESTUDIO</a>
                    </li>
                    <li>
                        <a href="#equipo-profesional" className="hover:border-t-2 border-gray-400 px-2 py-1  cursor-pointer">EQUIPO PROFESIONAL</a>
                    </li>
                    <li>
                        <a href="#areas" className="hover:border-t-2 border-gray-400 px-2 py-1  cursor-pointer">AREAS</a>
                    </li>
                    <li>
                        <a href="#publicaciones" className="hover:border-t-2 border-gray-400 px-2 py-1 cursor-pointer">PUBLICACIONES</a>
                    </li>
                    <li>
                        <a href="#contacto" className="hover:border-t-2 border-gray-400 px-2 py-1  cursor-pointer">CONTACTO</a>
                    </li>
                </ul>
            </div>
        </nav>

          <nav className="bg-gradient-to-b from-green-900 to-green-700 p-4 justify-between flex flex-col md:hidden">
          <div className="flex-col">
              <div className="text-gray-400 font-bold text-xl ml-6">Miguel Anguel Romero</div>
              <div className="text-gray-400 font-bold text-xl ml-6">& Asociados</div>
          </div>
          <div className="text-gray-400">
              <ul className="column space-x-4">
                  <li>
                      <a href="#nuestro-estudio" className="ml-4 hover:border-t-2 border-gray-400 px-2 py-1  cursor-pointer">NUESTRO ESTUDIO</a>
                  </li>
                  <li>
                      <a href="#equipo-profesional" className="hover:border-t-2 border-gray-400 px-2 py-1  cursor-pointer">EQUIPO PROFESIONAL</a>
                  </li>
                  <li>
                      <a href="#areas" className="hover:border-t-2 border-gray-400 px-2 py-1  cursor-pointer">AREAS</a>
                  </li>
                  <li>
                      <a href="#publicaciones" className="hover:border-t-2 border-gray-400 px-2 py-1 cursor-pointer">PUBLICACIONES</a>
                  </li>
                  <li>
                      <a href="#contacto" className="hover:border-t-2 border-gray-400 px-2 py-1  cursor-pointer">CONTACTO</a>
                  </li>
              </ul>
          </div>
      </nav>
      </>
    )
}

export default Navegacion
