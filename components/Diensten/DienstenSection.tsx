const packages = [
  {
    title: 'Startpakket',
    description: 'Een website van een enkele pagina. Perfect voor de startende ondernemer.',
    price: '€39/maand',
    features: [
      '1 pagina gevuld',
      'Ontwerp op maat',
      'Gratis Stockfoto’s',
      'Geschikt voor alle apparaten',
      '3 herzieningsronden',
      'Inbegrepen functionaliteiten: Contactformulier, Google Maps locatie weergave, WordPress CMS'
    ]
  },
  {
    title: 'Basispakket',
    description: 'Een website van 4 pagina’s. Voor de ondernemer die een complete website wilt.',
    price: '€59/maand',
    features: [
      '4 pagina\'s gevuld',
      'Ontwerp op maat',
      'Gratis Stockfoto’s',
      'Geschikt voor alle apparaten',
      '3 herzieningsronden',
      'Inbegrepen functionaliteiten: Contactformulier, Google Maps locatie weergave, WordPress CMS'
    ]
  },
  {
    title: 'Premiumpakket',
    description: 'Een website van 7 of meer pagina’s. Voor uitgebreide informatie over het bedrijf.',
    price: '€89/maand',
    features: [
      '7 pagina\'s gevuld',
      'Ontwerp op maat',
      'Gratis Stockfoto’s',
      'Geschikt voor alle apparaten',
      '3 herzieningsronden',
      'Inbegrepen functionaliteiten: Contactformulier, Google Maps locatie weergave, WordPress CMS'
    ]
  }
];

const DienstenSection = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-4 text-[#232323]">{pkg.title}<span className='text-[#496488]'>.</span></h2>
            <p className="text-gray-500 text-lg mb-4">{pkg.description}</p>
            <p className="text-[#496488] text-xl font-bold mb-4">{pkg.price}*</p>
            <hr className="w-100 border-t border-gray-300" style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem'}} />
            <ul className="list-disc ml-6">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  );
};

export default DienstenSection;
