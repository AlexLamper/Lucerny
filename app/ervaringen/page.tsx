import React from 'react';

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
      <h1 className="text-3xl font-bold text-center mb-10">Ervaringen van Onze Klanten</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
