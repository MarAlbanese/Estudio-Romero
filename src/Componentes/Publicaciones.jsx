const Publicaciones = () => {
  return (
    
    <>
        <div className="mt-20 text-5xl text-gray-500 text-center" id="publicaciones">
            <h1>Publicaciones</h1>
        </div>
        <div className='grid grid-cols-4 grid-rows-1 md:grid cols-4 rows-1 gap-4 px-24 mb-4 w-auto'>
           <div className="mt-36 px-3 py-2  ml-6 border border-gray-200 shadow-2xl hover:shadow-custom ">
                <p className="font-serif  text-start text-xl text-blue-700">Prescindencia de remuneraciones que deben integrar la base de cálculo cuando resultan perjudiciales a los efectos del cálculo del haber</p>
                <p className="mt-10 text-start">Comentario al fallo “Soria, Abel Rubén  c/ ANSeS s/Reajuste de haberes”, Expte. 23087/2017   En el caso “Soria” se resuelve una situación cada vez más frecuente:</p>
                <a href="https://www.csjn.gov.ar/institucional/biblioteca" target="_blank" className="cursor-pointer  text-start mt-6 text-sm font-semibold text-blue-700  hover:text-black">LEER MAS</a>
            </div>
            <div className="mt-36 px-3 py-2  ml-6 border border-gray-200 shadow-2xl hover:shadow-custom ">
                <p className="font-serif  text-start text-xl text-blue-700">Algo más acerca del requisito del “cese definitivo” en el régimen de la Ley 24.018</p>
                <p className="mt-10 text-start">Mediante una media cautelar, la justicia ordenó a la ANSES dar curso al trámite jubilatorio de una funcionaria judicial que persigue el beneficio con arreglo a la Ley 24.018.</p>
                <a href="https://www.csjn.gov.ar/institucional/biblioteca" target="_blank" className="cursor-pointer  text-start mt-6 text-sm font-semibold text-blue-700  hover:text-black">LEER MAS</a>
            </div>
            <div className="mt-36 px-3 py-2  ml-6 border border-gray-200 shadow-2xl hover:shadow-custom ">
                <p className="font-serif  text-start text-xl text-blue-700">Aumento de prestaciones previsionales septiembre 2021</p>
                <p className="mt-10 text-start">Resolución 171/2021 ANSeS -consulta link PJN SUPREMA CORTE-</p>
                <a href="https://www.csjn.gov.ar/institucional/biblioteca" target="_blank" className="cursor-pointer  text-start mt-6 text-sm font-semibold text-blue-700  hover:text-black">LEER MAS</a>
            </div>
            <div className=" mt-36 px-3 py-2  ml-6 border border-gray-200 shadow-2xl hover:shadow-custom ">
                <p className="font-serif  text-start text-xl text-blue-700">Comenzó a regir el régimen de teletrabajo</p>
                <p className="mt-10 text-start">A partir del día 1/4/21 comenzó a regir el régimen de contrato teletrabajo previsto por la ley 27.555. Sin embargo, aquellas personas que durante la pandemia se vieron en la necesidad de trabajar desde sus domicilios por las medidas dispuestas por las autoridades sanitarias nacionales</p>
                <a href="https://www.csjn.gov.ar/institucional/biblioteca" target="_blank" className="cursor-pointer  text-start mt-6 text-sm font-semibold text-blue-700  hover:text-black">LEER MAS</a>
            </div>


        </div>
    </>


  )
}

export default Publicaciones
