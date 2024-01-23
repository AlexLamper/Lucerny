import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

const Casus = () => {
  const portfolios = [
    {
      name: 'Lambdago',
      image: '/images/projects/lambdago.png',
      description: 'Een website voor het bedrijf Lambdago: Lamper BedrijfsDienstverlening en Advisering. ',
      date: '18/01/2024',
    },
    {
      name: 'Persoonlijke Portfolio Website',
      image: '/images/projects/project9.png',
      description: 'Mijn persoonlijke website met mijn portfolio en wie ik ben!',
      date: '18/01/2024',
    },
    {
      name: 'Uw Website',
      image: '/images/projects/project1.png',
      description: 'Hier kan uw website staan!',
      date: '18/01/2024',
    },
  ];

  return (
    <section className="container mx-auto pt-20 bg-white">
      <div className="text-center mb-8">
        <p className="lg:text-3xl text-xl text-black mb-6 mt-6">Onze Casus</p>
        <h2 className="lg:text-5xl text-3xl mb-12 max-w-[60%] max-sm:max-w-[95%] mx-auto">Bekijk onze Gerealiseerde Projecten</h2>
      </div>

      <div className="flex-wrap flex justify-center hover:brightness-100">
        {portfolios.map((portfolio, index) => (
          <div key={index} className="w-8/12 md:w-1/2 lg:w-1/5 mx-6 border border-gray-600 max-lg:mb-12 h-auto">
            <div className="bg-white flex flex-col">
              <div className="mb-2">
                <Image
                  src={portfolio.image}
                  alt={`Portfolio ${index + 1}`}
                  width={500} // Set the desired width
                  height={300} // Set the desired height
                  className="brightness-75 hover:brightness-100 hover:cursor-pointer transition-all duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[22px] mb-2">{portfolio.name}</h3>
                <p className="mb-6 font-thin text-sm">{portfolio.description}</p>
                <p className="italic">{portfolio.date}</p>
                {/* Additional information about the portfolio */}
                {/* You can add more details here as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='lg:mt-12 mt-2 text-center'>
        <Button href="/casus" text="Bekijk Al Onze Projecten" />
      </div>
    </section>
  );
};

export default Casus;
