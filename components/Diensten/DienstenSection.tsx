"use client"

import { useState } from 'react';
import { LiaInfoCircleSolid } from "react-icons/lia";
import Button from '../Button/Button';

const packages = [
  {
    title: 'Een gepersonaliseerde website',
    description: (
      <>
        Ontvang een aangepaste website, perfect afgestemd op uw wensen;<br />
        We passen onze prijzen aan op basis van uw ideeën.<br />
        Neem direct contact op voor meer informatie.
      </>
    ),
    features: [],
    nonFeatures: []
  }
  // {
  //   title: 'Startpakket',
  //   description: 'Een website van max. 3 pagina’s; Perfect voor de startende ondernemer die een simpele informatieve website wilt.',
  //   oneTimeFee: 'Eenmalig €249,99',
  //   price: 'daarna vanaf €12,50 /maand',
  //   features: [
  //     '1, 2 of 3 pagina\'s gevuld',
  //     'Inclusief gratis stockfoto\'s',
  //     'Ontwerp op maat',
  //     'Geschikt voor alle apparaten',
  //     '1 herzieningsronde',
  //     'hosting en domeinnaam',
  //   ],
  //   nonFeatures: [
  //     'Geavanceerde web functionaliteiten',
  //     'SEO optimalisatie',
  //     'Maandelijks onderhoud',
  //     'Contactformulier',
  //   ]
  // },
  // {
  //   title: 'Basispakket',
  //   description: 'Een website van 4 of meer pagina’s. Voor een ondernemer die een complete website wilt voor zijn of haar bedrijf.',
  //   oneTimeFee: 'Eenmalig €349,99',
  //   price: 'daarna vanaf €14,50/maand',
  //   features: [
  //     '4 pagina\'s gevuld (max. 6)',
  //     'Inclusief gratis stockfoto\'s',
  //     'Ontwerp op maat',
  //     'Geschikt voor alle apparaten',
  //     '2 herzieningsronden',
  //     'hosting en domeinnaam',
  //     'Maandelijks onderhoud (max. 3 uur per maand)',
  //     'Contactformulier',
  //   ],
  //   nonFeatures: [
  //     'Geavanceerde web functionaliteiten',
  //     'SEO optimalisatie',
  //   ]
  // },
  // {
  //   title: 'Premiumpakket',
  //   description: 'Een website van 7 of meer pagina’s. Voor een professionele en geavanceerde website met alle benodigde informatie en functionaliteiten.',
  //   oneTimeFee: 'Eenmalig €499,99',
  //   price: 'daarna €19,50/maand',
  //   features: [
  //     '7 pagina\'s gevuld (max. 10)',
  //     'Inclusief gratis stockfoto\'s',
  //     'Ontwerp op maat',
  //     'Geschikt voor alle apparaten',
  //     '3 herzieningsronden',
  //     'hosting en domeinnaam',
  //     'Maandelijks onderhoud (max. 6 uur per maand)',
  //     'Contactformulier',
  //     'Geavanceerde web functies',
  //     'SEO optimalisatie',
  //   ],
  //   featureLink: 'voorbeelden',
  //   nonFeatures: []
  // };
];

const DienstenSection = () => {
  // const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const [hoveredInfoFunction, setHoveredInfoFunction] = useState<number | null>(null);
  const [hoveredSEOFunction, setHoveredSEOFunction] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-6">
      {packages.map((pkg, index) => (
        <div key={index} className={`relative bg-[#ffffff50] p-6 flex flex-col border border-[#1b1b1bb0] ${pkg.title === 'Een gepersonaliseerde website' ? 'lg:col-span-3 w-full text-center items-center justify-center' : ''}`}>
          <h2 className="text-3xl font-bold mb-4 text-black">{pkg.title}<span className='text-black'>.</span></h2>
          <p className="text-gray-700 text-lg mb-4">{pkg.description}</p>
          <div className="relative flex items-center justify-between">
            {/* <p className="text-black text-xl font-bold mb-1">
              {pkg.oneTimeFee}
            </p> */}
          </div>
          {/* <p className="text-black text-md font-normal mb-4">{pkg.price}</p> */}
          <hr className="w-full border-t border-gray-700 mb-4" />
          <ul className="flex-1 list-disc">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="text-gray-700 flex items-center">
                <img
                  src="/assets/icons/diensten/checkmark-thin.svg"
                  alt="Checkmark"
                  width={14}
                  height={14}
                  className="mr-3"
                />
                {feature === 'Geavanceerde web functies' || feature === 'SEO optimalisatie' ? (
                  <>
                    {feature}{' '}
                    <span
                      className="relative ml-2"
                      onMouseEnter={() => {
                        if (feature === 'Geavanceerde web functies') setHoveredInfoFunction(index);
                        if (feature === 'SEO optimalisatie') setHoveredSEOFunction(index);
                      }}
                      onMouseLeave={() => {
                        setHoveredInfoFunction(null);
                        setHoveredSEOFunction(null);
                      }}
                    >
                      <LiaInfoCircleSolid className="cursor-pointer text-black text-lg" />
                      {feature === 'Geavanceerde web functies' && hoveredInfoFunction === index && (
                        <div className="absolute z-10 bg-white p-2 border border-[#1b1b1bb0] text-sm text-black top-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-40">
                          Bijv: Inlogpagina, een database, blog functionaliteiten, etc.
                        </div>
                      )}
                      {feature === 'SEO optimalisatie' && hoveredSEOFunction === index && (
                        <div className="absolute z-10 bg-white p-2 border border-[#1b1b1bb0] text-sm text-black top-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-56">
                          SEO, oftewel &apos;Search Engine Optimization&apos;, vergroot de vindbaarheid van een website in zoekmachines.
                        </div>
                      )}
                    </span>
                  </>
                ) : (
                  feature
                )}
              </li>
            ))}
          </ul>
          <ul className="flex-1 list-disc mb-4 mt-2">
            {pkg.nonFeatures.map((nonFeatures, idx) => (
              <li key={idx} className="text-gray-700 flex items-center">
              <img
                src="/assets/icons/diensten/cross-red.svg"
                alt="Cross"
                width={17}
                height={17}
                className="mr-3"
              />
              {nonFeatures}
            </li>
            ))}
          </ul>
          {/* Button */}
          <div className="flex mb-4">
            <Button href="/contact" text="Neem contact op" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DienstenSection;
