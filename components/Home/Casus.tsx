import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import LightBlueButton from '../Button/LightBlueButton';

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
    <section className="container mx-auto py-20">
      <div className="text-center mb-8">
        <p className="lg:text-3xl text-xl text-[#6b6b6b] mb-6 mt-6">Onze Casus</p>
        <h2 className="text-3xl lg:text-5xl font-semibold text-black mb-12 mx-auto max-w-[60%] max-sm:max-w-[95%]">Bekijk onze Gerealiseerde <span className="text-[#7664F3]">Projecten</span></h2>
      </div>

      <div className="flex-wrap flex justify-center hover:brightness-100">
        {portfolios.map((portfolio, index) => (
          <div key={index} className="w-8/12 md:w-1/2 lg:w-1/5 mx-6 max-lg:mb-12 h-auto text-black bg-[#ffffff] rounded-2xl border border-[#1b1b1b50]">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-2">
                <Image
                  src={portfolio.image}
                  alt={`Portfolio ${index + 1}`}
                  width={500}
                  height={300}
                  className="brightness-100 hover:brightness-75 hover:cursor-pointer transition-all duration-300 rounded-t-2xl"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-2">{portfolio.title}</h3>
                  <p className="mb-6">{portfolio.description}</p>
                </div>
                <p className='italic'>{portfolio.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='lg:mt-12 mt-2 text-center'>
        <LightBlueButton href="/casus" text="Bekijk Al Onze Projecten" />
      </div>
    </section>
  );
};

export default Casus;
