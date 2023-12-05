import React from 'react';
import { FaStar } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ervaringen | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const Reviews = () => {
  const reviews = [
    { name: 'John Doe', comment: 'Geweldige service! Ze hebben een fantastische website voor ons bedrijf gebouwd.' },
    { name: 'Jane Smith', comment: 'Zeer tevreden met de professionele aanpak en het eindresultaat. Aanrader!' },
    { name: 'Emily Johnson', comment: 'Lucerny heeft onze verwachtingen overtroffen. Topkwaliteit en service!' },
    { name: 'Michael Brown', comment: 'Uitstekend werk geleverd. Onze website ziet er modern en verzorgd uit.' },
    // Add more reviews similar to the above for additional items
  ];

  return (
    <div className="container mx-auto py-8 max-w-screen-lg">
      <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-10 text-[#232323] text-center">
        Reviews<span className='text-[#496488]'>.</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mx-6">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-semibold mr-2">{review.name}</h3>
              <div className="flex">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
            <p className="text-gray-700 mb-2">{review.comment}</p>
            <p className="text-sm text-gray-500">Geverifieerde Google review</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
