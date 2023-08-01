import { FaUser, FaUsers, FaCoins, FaHospital } from 'react-icons/fa';
import { IoMdHand } from 'react-icons/io';


const Areas = () => {
    return (

        <>
            <div className="text-center mt-32 mb-10" id="areas">
                <h1 className="text-6xl font-medium font-serif text-gray-500">Aréas</h1>
            </div>
            
                <div className='grid grid-cols-1 grid-rows-1 gap-4 px-28   md:grid-cols-3 rows-2'>
                <div className="hover:shadow-custom2 text-center duration-[0.5s]">
                        <div className="flex items-center justify-center  border-gray-500">
                             <IoMdHand  className="mb-4 text-6xl text-gray-400" />
                        </div>
                        <h1 className=" mb-4 mt-4 font-bold text-xl text-gray-600">PREVISIONAL</h1>
                        <p className='leading-loose font-medium text-gray-500'>El derecho a la salud es un derecho fundamental que debe ser protegido. En caso de ser vulnerado, efectuamos los reclamos 
                        correspondientes ante el prestador del servicio para resguardar el derecho del paciente y en caso de ser necesario, tramitamos el reclamo en sede judicial.
                        </p>
                    </div>
                    <div className="hover:shadow-custom2 text-center">
                        <div className="flex items-center justify-center  border-gray-500">
                             <FaUser className="mb-4 text-6xl text-gray-400" />
                        </div>
                        <h1 className="mb-4 mt-4  font-bold text-xl text-gray-600">CIVIL</h1>
                        <p className='leading-loose font-medium text-gray-500'>Asesoramos y nos ocupamos de la tramitación de los beneficios previsionales ante la ANSeS, posterior control de la liquidación efectuada.
                        Asimismo promovemos los reclamos judiciales contra la ANSeS para resguardar el derecho de cada beneficiario.
                        Nos especializamos en el régimen previsional para magistrados y funcionarios del Poder Judicial de la Nación.
                        </p>
                    </div>
                    <div className="hover:shadow-custom2 text-center">
                        <div className="flex items-center justify-center  border-gray-500">
                             <FaUsers className="mb-4 text-6xl text-gray-400" />
                        </div>
                        <h1 className="mb-4 mt-4   font-bold text-xl text-gray-600">FAMILIA</h1>
                        <p className='leading-loose font-medium text-gray-500'>El derecho a la salud es un derecho fundamental que debe ser protegido. En caso de ser vulnerado, efectuamos los reclamos 
                        correspondientes ante el prestador del servicio para resguardar el derecho del paciente y en caso de ser necesario, tramitamos el reclamo en sede judicial.
                        </p>
                    </div>
                
                    <div className="hover:shadow-custom2 text-center">
                        <div className="mt-4 flex items-center justify-center  border-gray-500">
                             <FaCoins className="mb-4 text-6xl text-gray-400" />
                        </div>
                        <h1 className="mb-4 mt-4  font-bold text-xl text-gray-600">CONSUMIDOR</h1>
                        <p className='leading-loose font-medium text-gray-500'>Defendemos los derechos de los consumidores o usuarios cuando los mismos se encuentran vulnerados.
                        Análisis del caso, tramitación de los reclamos pertinentes en sede administrativa y judicial
                        </p>
                    </div>
                    <div className=" hover:shadow-custom2 text-center">
                        <div className="mt-4 flex items-center justify-center  border-gray-500">
                             <FaHospital className="mb-4 text-6xl text-gray-400" />
                        </div>
                        <h1 className="mb-4 mt-4  font-bold text-xl text-gray-600">SALUD</h1>
                        <p className='leading-loose font-medium text-gray-500'>El derecho a la salud es un derecho fundamental que debe ser protegido. En caso de ser vulnerado, efectuamos los reclamos 
                        correspondientes ante el prestador del servicio para resguardar el derecho del paciente y en caso de ser necesario, tramitamos el reclamo en sede judicial.
                        </p>
                    </div>                
                    
              







            </div>


        </>
    )
}

export default Areas
