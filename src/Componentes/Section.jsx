const Section = () => {

    return (
        <>
            <section className="fondo">
                <div>
                    <h1 className="text-gray-400 text-center text-5xl mt-56 pt-56">Miguel Anguel Romero & Asociados</h1>
                </div>
            </section>
            <div className="grid grid-cols-1  justify-around mt-44 gap-6 md:grid-cols-2 ">
                <div className="ml-20" id="nuestro-estudio">
                    <p className=" mt-28 text-5xl text-gray-500">Nuestro Estudio</p>
                    <p className=" text-gray-400 mt-12">Formamos un equipo de abogadas y abogados asociados desde inicios del año 2010. Inspirados siempre en la convicción de que nuestra actividad profesional debe orientarse en miras de la protección de los derechos de nuestros clientes. Continuamos trabajando para brindar un servicio eficien</p>
                </div>
                <div>
                    <img className=" ml-20 mb-20 w-3/4 h-auto" src="https://rodriguezsimonyasociados.com.ar/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-20-at-16.25.21.jpeg" alt="" />
                </div>
            </div>
        </>

    )
}

export default Section
