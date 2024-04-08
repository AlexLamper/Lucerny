import React from 'react';
import LightBlueButton from '../Button/LightBlueButton';

const CTA = () => {

  return (
    <section className="container mx-auto py-20">
      <div className="container mx-auto text-center">
        <p className="lg:text-3xl text-xl mb-6 mt-6" style={{backgroundImage: 'linear-gradient(#fff, #aac3f0)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent'}}>
          Ontdek wat wij voor u kunnen betekenen.
        </p>
        <h2 className="lg:text-5xl text-3xl mb-12 max-w-[60%] max-sm:max-w-[95%] mx-auto text-[#e2e2e2]">Neem vandaag nog contact met ons op!</h2>
        <LightBlueButton href="/contact" text="Neem contact op" />
      </div>
    </section>
  );
};

export default CTA;
