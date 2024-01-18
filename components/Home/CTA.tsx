import React from 'react';
import Button from '../Button/Button';

const CTA = () => {

  return (
    <section className="container mx-auto pt-20 pb-20  bg-white">
      <div className="container mx-auto text-center">
        <p className="text-3xl text-black mb-6 mt-6">
          Ontdek wat wij voor u kunnen betekenen.
        </p>
        <h2 className="text-5xl mb-12">Neem vandaag nog contact met ons op!</h2>
        <Button href="/contact" text="Neem contact op" />
      </div>
    </section>
  );
};

export default CTA;
