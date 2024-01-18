import React from 'react';
import type { Metadata } from 'next';
import FAQ from '@/components/FAQ/FAQ';

export const metadata: Metadata = {
  title: 'FAQ | Lucerny',
  description: 'Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.',
};

const Faq = () => {
  return (
    <>
      <div style={{ backgroundImage: 'url("/images/backgrounds/over-ons/background.svg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <section className="text-center pt-20">
          <div className="container mx-auto mb-10">
            <h1 className="text-3xl max-sm:max-w-[90%] lg:text-5xl font-bold leading-tight mb-4 text-black max-w-[50%] mx-auto">
              Dit zijn Veelgestelde Vragen die klanten hebben<span className='text-black'>.</span>
            </h1>
            <p className="text-lg text-gray-900 mb-8 max-w-[30%] max-sm:max-w-[90%] mx-auto">Ontdek hier de meest voorkomende vragen van onze klanten.</p>
          </div>
        </section>
        <section className='pb-12'>
          <FAQ />
        </section>
      </div>
    </>
  );
};

export default Faq;
