"use client"

import { useState } from 'react';
import { LiaInfoCircleSolid } from "react-icons/lia";
import LightBlueButton from '../Button/LightBlueButton';

const packages = [
  {
    title: 'Alles-in-één Oplossing (Volledige Website)',
    description: (
      <>
       Ontvang een exclusieve website die volledig aan uw wensen voldoet en binnen de kortste tijd online beschikbaar is.
       <br />
       Inclusief aangepast design, hosting, beveiliging en domein, zodat u nergens meer naar om hoeft te kijken.
       <br />
       Neem contact op voor meer informatie.
      </>
    ),
    features: [
      'Aangepast web design naar uw wensen',
      'Web hosting',
      'Domeinnaam',
      'max. 10 pagina\'s gevuld',
      'Inclusief gratis stockfoto\'s',
      'Geschikt voor alle apparaten',
      '2 herzieningsronden',
      'Maandelijks onderhoud (max. 3 uur per maand)',
      'SEO-optimalisatie',
      'Blog functionaliteiten',
    ],
    nonFeatures: []
  },
  {
    title: 'Onepager',
    description: 'Een simpele website met één pagina. Perfect voor een portfolio of een kleine onderneming.',
    oneTimeFee: 'Eenmalig €249,99',
    price: 'daarna vanaf €12,50/maand',
    features: [
      '1 lange pagina\'s gevuld',
      'Inclusief gratis stockfoto\'s',
      'Ontwerp op maat',
      'Geschikt voor alle apparaten',
      '1 herzieningsronde',
      'hosting en domeinnaam',
    ],
    nonFeatures: [
      'Geavanceerde web functionaliteiten',
      'SEO optimalisatie',
      'Maandelijks onderhoud',
      'Contactformulier',
    ]
  },
  {
    title: 'Webdesign',
    description: 'Een gepersonaliseerd design voor uw website. Perfect voor een nieuwe look of een rebranding.',
    oneTimeFee: 'Eenmalig €149,99',
    price: '',
    features: [
      'Ontwerp op maat',
      '2 herzieningsronden',
      'Verschillende bestandstypes',
      'Unieke merkgerichte ontwerpen',
      'Gebruiksvriendelijke interface',
      'Aanpasbare kleurenschema\'s',
    ],
    nonFeatures: [
      'Site ontwikkeling',
      'Hosting en domeinnaam',
    ]
  },
  {
    title: 'Logo Ontwerp',
    description: 'Een professioneel logo dat past bij uw bedrijf. Ideaal voor een nieuwe onderneming of een rebranding.',
    oneTimeFee: 'Eenmalig €69,99',
    price: '',
    features: [
      "3 unieke logo concepten",
      "Logo in diverse formaten/grootte",
      "Logo in verschillende kleuren",
      "Logo in andere stijlen",
      "Diverse bestandstypes beschikbaar",
      "Gratis herzieningen van het logo",
      "Zwart-wit versies van het logo",
    ],
    featureLink: 'voorbeelden',
    nonFeatures: []
  },
];

const DienstenSection = () => {
  // const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const [hoveredInfoFunction, setHoveredInfoFunction] = useState<number | null>(null);
  const [hoveredSEOFunction, setHoveredSEOFunction] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-6 mb-24">
      {packages.map((pkg, index) => (
        <div key={index} className={`relative p-8 flex flex-col lg:mb-0 border border-[#1b1b1b50] rounded-3xl mx-auto text-[#e2e2e2] ${pkg.title === 'Alles-in-één Oplossing (Volledige Website)' ? 'lg:col-span-3 w-full' : ''}`}>
          <h2 className="text-3xl font-bold mb-4 text-white">{pkg.title}<span className='text-white'>.</span></h2>
          <p className="text-[#d8d8d8] text-lg mb-4">{pkg.description}</p>
          <div className="relative flex items-center justify-between">
            <p className="text-[#e2e2e2] text-xl font-bold mb-1">
              {pkg.oneTimeFee}
            </p>
          </div>
          <p className="text-[#e2e2e2] text-md font-normal mb-4">{pkg.price}</p>
          <hr className="w-full border-t border-[#93a1e052] mb-4" />
          {/* Features */}
          <h3 className="font-bold mt-4 text-2xl mb-4 text-[#d8d8d8]">Mogelijke functionaliteiten</h3>
          <ul className="flex-1 list-disc justify-start">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="text-[#d8d8d8] flex items-center">
                <img
                  src="/assets/icons/diensten/checkmark2.png"
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
              <li key={idx} className="text-[#d8d8d8] flex items-center">
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
          <div className="flex mt-4">
            <LightBlueButton href="/contact" text="Neem contact op 🡢" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DienstenSection;
