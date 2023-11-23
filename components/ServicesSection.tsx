const ServicesSection = () => {
    return (
    <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-center">
            Onze Diensten
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Statische Websites</h3>
              <p className="mb-6">
                Professionele statische websites voor persoonlijk en zakelijk gebruik.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold transition duration-300 inline-block"
              >
                Meer informatie
              </a>
            </div>
  
            {/* Service 2 */}
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Blog Websites</h3>
              <p className="mb-6">
                Geavanceerde blog websites om uw ideeën te delen en uw merk op te bouwen.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold transition duration-300 inline-block"
              >
                Meer informatie
              </a>
            </div>
  
            {/* Service 3 */}
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">E-commerce Websites</h3>
              <p className="mb-6">
                Krachtige e-commerce oplossingen om uw producten online te verkopen.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold transition duration-300 inline-block"
              >
                Meer informatie
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  