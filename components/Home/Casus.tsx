import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

const Casus = () => {
  const portfolios = [
    {
      name: 'Portfolio 1',
      image: '/images/projects/lambdago.png',
    },
    {
      name: 'Portfolio 2',
      image: '/images/projects/project9.png',
    },
    {
      name: 'Portfolio 3',
      image: '/images/projects/project1.png',
    },
    // Add more portfolios as needed
  ];

  return (
    <section className="container mx-auto pt-20 bg-white">
      <div className="text-center mb-8">
        <p className="text-3xl text-black mb-6 mt-6">Onze Casus</p>
        <h2 className="text-5xl mb-12">Ontdek onze Gerealiseerde Projecten</h2>
      </div>

      <div className="flex flex-wrap -mx-4">
        {portfolios.map((portfolio, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg p-6" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)' }}>
            <Image
              src={portfolio.image}
              alt={`Portfolio ${index + 1}`}
              width={500} // Set the desired width
              height={300} // Set the desired height
              layout="fixed"
              className="mb-4 rounded-lg"
            />
              <h3 className="text-xl font-bold mb-3">{portfolio.name}</h3>
              {/* Additional information about the portfolio */}
              {/* You can add more details here as needed */}
              <Button href={`/portfolio/${portfolio.name}`} text="Bekijk Project" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Casus;
