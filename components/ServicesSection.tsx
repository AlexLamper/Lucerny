import Image from 'next/image';
import React from 'react';

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Wat wij voor u kunnen doen</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <Image 
                className="mb-4 rounded-lg"
                src="/images/images/website.png" width={0}
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
            <h3 className="text-xl font-semibold mb-2">Service 1</h3>
            <p className="mb-4">
              Beschrijving van service 1 en wat de klant kan verwachten. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Meer informatie
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-md shadow-md">
          <Image 
                className="mb-4 rounded-lg"
                src="/images/images/website.png" width={0}
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
            <h3 className="text-xl font-semibold mb-2">Service 2</h3>
            <p className="mb-4">
              Beschrijving van service 2 en wat de klant kan verwachten. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Meer informatie
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <Image 
                className="mb-4 rounded-lg"
                src="/images/images/website.png" width={0}
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
            <h3 className="text-xl font-semibold mb-2">Service 3</h3>
            <p className="mb-4">
              Beschrijving van service 3 en wat de klant kan verwachten. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Meer informatie
            </button>
          </div>

          {/* Voeg meer services toe als nodig */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
