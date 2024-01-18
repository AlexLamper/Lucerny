"use client"

import { useState } from 'react';
import Link from "next/link";
import styles from '@/styles/diensten.module.css';
import { LiaInfoCircleSolid } from "react-icons/lia";
import Button from '../Button/Button';

const packages = [
  {
    title: 'Startpakket',
    description: 'Een website van een 1, 2 of 3 pagina’s. Perfect voor de startende ondernemer of als persoonlijke website.',
    price: 'vanaf €29/maand',
    oneTimeFee: 'Eenmalig startbedrag van €249.99',
    features: [
      '1, 2 of 3 pagina\'s gevuld',
      'Inclusief gratis stockfoto\'s',
      'Ontwerp op maat',
      'Geschikt voor alle apparaten',
      '2 herzieningsronden',
      'Inclusief kwartaal onderhoud wanneer nodig, hosting en domeinnaam',
    ]
  },
  {
    title: 'Basispakket',
    description: 'Een website van 4 of meer pagina’s. Voor de ondernemer die een complete website wilt.',
    price: 'vanaf €39/maand',
    oneTimeFee: 'Eenmalig startbedrag van €299.99',
    features: [
      '4 pagina\'s gevuld (max. 6)',
      'Ontwerp op maat',
      'Geschikt voor alle apparaten',
      'Inclusief gratis stockfoto\'s',
      '3 herzieningsronden',
      'Inbegrepen functionaliteiten: Contactformulier, Simpele Animaties (optioneel), Videoweergave etc...',
      'Inclusief maandelijks onderhoud wanneer nodig, hosting en domeinnaam',
    ]
  },
  {
    title: 'Premiumpakket',
    description: 'Een website van 7 of meer pagina’s. Voor een complete en uitgebreide website met alle benodigde informatie.',
    price: 'vanaf €49/maand',
    oneTimeFee: 'Eenmalig startbedrag van €399.99',
    features: [
      '7 pagina\'s gevuld (max. 10)',
      'Ontwerp op maat',
      'Geschikt voor alle apparaten',
      'Inclusief gratis stockfoto\'s',
      '3 herzieningsronden',
      'Inbegrepen functionaliteiten: Contactformulier, Simpele Animaties (optioneel), Videoweergave etc...',
      'Inclusief maandelijks onderhoud wanneer nodig, hosting en domeinnaam'
    ]
  }
];

const DienstenSection = () => {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-6">
      {packages.map((pkg, index) => (
        <div key={index} className="relative bg-white p-6 flex flex-col border border-[#1b1b1bb0]">
          <h2 className="text-3xl font-bold mb-4 text-black">{pkg.title}<span className='text-black'>.</span></h2>
          <p className="text-gray-700 text-lg mb-4">{pkg.description}</p>
          <div className="relative flex items-center justify-between">
            <p className="text-black text-xl font-bold mb-1">
              {pkg.price}
            </p>
            <span
              className="relative"
              onMouseEnter={() => setHoveredPackage(index)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              <LiaInfoCircleSolid className="cursor-pointer text-black text-lg" />
              {hoveredPackage === index && (
                <div className="absolute z-10 bg-white p-2 border border-[#1b1b1bb0] text-sm text-black top-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-40">
                  De betalingen worden per kwartaal in rekening gebracht
                </div>
              )}
            </span>
          </div>
          <p className="text-black text-sm font-normal mb-4">{pkg.oneTimeFee}</p>
          <hr className="w-full border-t border-gray-700 mb-4" />
          <ul className="flex-1 list-disc ml-6 mb-4">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="text-gray-700">{feature}</li>
            ))}
          </ul>
          {/* Button */}
          <div className="flex mb-4">
            <Button href="/contact" text="Stuur een bericht" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DienstenSection;
