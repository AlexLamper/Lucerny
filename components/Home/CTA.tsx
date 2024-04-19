import React from 'react';
import LightBlueButton from '../Button/LightBlueButton';

const CTA = () => {

  return (
    <section className="container mx-auto py-20 mt-[4rem]">
      <div className="container mx-auto text-center">
        <p className="lg:text-3xl text-xl mb-6 mt-6 text-[#6b6b6b]">
          Ontdek wat wij voor u kunnen betekenen.
        </p>
        <h2 className="lg:text-5xl text-3xl mb-12 max-w-[60%] max-sm:max-w-[95%] mx-auto text-black">Neem vandaag nog contact met ons op!</h2>
        <LightBlueButton href="/contact" text="Neem contact op" />
      </div>
    </section>
  );
};

export default CTA;
