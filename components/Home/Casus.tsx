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
        <p className="text-3xl text-black mb-6 mt-6">Onze Casus</p>
        <h2 className="text-5xl mb-12">Ontdek onze Gerealiseerde Projecten</h2>
      </div>

      <div className="flex-wrap flex justify-center">
        {portfolios.map((portfolio, index) => (
          <div key={index} className="w-8/12 md:w-1/2 lg:w-1/5 mx-6 border border-[#1b1b1bb0] max-md:mb-12 h-auto">
            <div className="bg-white flex flex-col">
              <div className="mb-4">
                <Image
                  src={portfolio.image}
                  alt={`Portfolio ${index + 1}`}
                  width={500} // Set the desired width
                  height={300} // Set the desired height
                />
              </div>
              <div className='p-4'>
                <h3 className="text-xl font-bold mb-2">{portfolio.name}</h3>
                <p className='mb-6'>{portfolio.description}</p>
                <p className='italic'>{portfolio.date}</p>
                {/* Additional information about the portfolio */}
                {/* You can add more details here as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-12 text-center'>
        <Button href="/casus" text="Bekijk Al Onze Projecten" />
      </div>
    </section>
  );
};

export default Casus;
