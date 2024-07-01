import React from 'react';
import LightBlueButton from '../Button/LightBlueButton';

const CTA = () => {

  return (
    <section className="container mx-auto py-20 mt-[4rem]">
      <div className="container mx-auto text-center">
        <p className="lg:text-3xl text-xl mb-6 mt-6 text-[#6b6b6b] lg:max-w-[100%] max-w-[90%]">
          Ontdek wat wij voor u kunnen betekenen.
        </p>
        <h2 className="text-3xl lg:text-5xl font-semibold text-black mb-12 mx-auto max-w-[60%] max-sm:max-w-[95%]">Neem vandaag nog <span className="text-[#7664F3]">contact</span> met ons op!</h2>
        <LightBlueButton href="/contact" text="Neem contact op" />
      </div>
    </section>
  );
};

export default CTA;
