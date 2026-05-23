function About() {
  return (
    <div className="max-w-6xl mx-auto mt-8 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch min-h-[300px]">
        {/* Texto "Sobre nosotros" */}
        <section className="bg-white border rounded-lg shadow-md p-6 h-full">
          <h2 className="text-2xl font-bold mb-4">Sobre nosotros</h2>
          <p className="text-gray-700 mb-4">
            Bienvenido a nuestro sitio! Nos apasiona crear contenido de alta
            calidad y ofrecer recursos valiosos a nuestros usuarios. Nuestro
            equipo se dedica a brindar la mejor experiencia posible y
            constantemente trabajamos para mejorar y ampliar nuestras
            propuestas.
          </p>

          <p className="text-gray-600">
            Si querés visitarnos, encontrás nuestra ubicación a la derecha — el
            mapa ocupa el espacio disponible y es responsivo.
          </p>
        </section>

        {/* Mapa — ocupa el espacio disponible */}
        <div className="w-full h-full min-h-[300px]">
          <iframe
            title="Mapa - Nuestra ubicación"
            src="https://www.google.com/maps?q=Buenos%20Aires&output=embed"
            className="w-full h-full rounded-lg border"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
