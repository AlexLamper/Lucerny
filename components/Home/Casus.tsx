import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

const Casus = () => {
  const portfolios = [
    {
      title: 'Lambdago',
      description: 'Een website voor het bedrijf Lambdago: Lamper BedrijfsDienstverlening en Advisering.',
      image: '/images/projects/lambdago.png',
      link: 'https://www.lambdago.nl',
      date: '18/01/2024',
  },
  {
      title: 'P. Troost afbouwbedrijf',
      description: 'Een website voor het bedrijf P. Troost afbouwbedrijf.',
      image: '/images/projects/project13.png',
      link: 'https://ptroostafbouwbedrijf.nl/',
      date: '13/03/2024',
  },
  {
      title: 'Uw Website',
      description: 'Hier kan uw website staan.',
      image: '/images/projects/project12.png',
      link: '',
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
                  width={500}
                  height={300}
                  className="brightness-75 hover:brightness-100 hover:cursor-pointer transition-all duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[22px] mb-2">{portfolio.title}</h3>
                <p className="mb-6 font-thin text-sm">{portfolio.description}</p>
                <p className="italic">{portfolio.date}</p>
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
