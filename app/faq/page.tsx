import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const Faq = () => {
  const faq = [
    {
      question: "Biedt u website-onderhoudsdiensten aan?",
      answer: "Ja, we bieden website-onderhoudsdiensten aan om uw site up-to-date, veilig en functioneel te houden."
    },
    {
      question: "Wat is uw webontwikkelingsproces?",
      answer: "Ons proces omvat consultatie, planning, ontwerp, ontwikkeling, testen en implementatie."
    },
    {
      question: "Kunt u helpen met zoekmachineoptimalisatie (SEO)?",
      answer: "Absoluut! We bieden SEO-diensten om de zichtbaarheid van uw website in zoekmachines te vergroten."
    },
    {
      question: "Wat voor soort websites bouwt u?",
      answer: "We bouwen verschillende soorten sites, waaronder e-commerce, portfolio's, blogs en zakelijke sites."
    },
    {
      question: "Hoe lang duurt het om een website te bouwen?",
      answer: "De projectduur varieert op basis van complexiteit en functies. Tijdlijnen worden geschat na evaluatie."
    },
    {
      question: "Welke betalingsmethoden accepteert u?",
      answer: "We accepteren credit-/debetkaarten, PayPal, bankoverschrijvingen en beveiligde betaalgateways."
    },
    {
      question: "Biedt u webhostingdiensten aan?",
      answer: "Ja, we bieden op maat gemaakte webhosting aan met betrouwbare servers en technische ondersteuning."
    },
    {
      question: "Kunt u een bestaande website opnieuw ontwerpen?",
      answer: "Zeker! We zijn gespecialiseerd in het opnieuw ontwerpen van websites om functionaliteit en esthetiek te verbeteren."
    },
    {
      question: "Wat onderscheidt uw webontwikkelingsdiensten?",
      answer: "Ons ervaren team, oog voor detail, klantgerichte aanpak en het gebruik van geavanceerde technologieën."
    },
    {
      question: "Is er doorlopende ondersteuning nadat de website is gelanceerd?",
      answer: "Ja, we bieden ondersteuning na de lancering voor updates, onderhoud en vragen."
    }    
  ];

  return (
    <div className="container mx-auto py-8 max-w-screen-xl">
      <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-10 text-[#232323] text-center">
        Frequently Asked Questions<span className='text-[#496488]'>.</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mx-6">
        {faq.map((faq, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-semibold mr-2">{faq.question}</h3>
            </div>
            <p className="text-gray-700 mb-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
