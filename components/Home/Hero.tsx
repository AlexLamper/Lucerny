import React from 'react';
import Image from 'next/image';
import styles from '@/styles/hero.module.css';
import Button from '../Button/Button';
import LightBlueButton from '../Button/LightBlueButton';

const Hero = () => {
  return (
    <div>
      <section className={`hero relative min-h-screen pt-[10%] overflow-hidden ${styles.hero}`}>
        <div className="flex justify-between">
          <div className="lg:w-[45%] relative z-10 lg:ml-32 ml-8" id='left-div'>
            <div className='lg:mt-0 mt-10'>
              <h1 className="text-4xl lg:text-[66px] leading-none mb-12 relative max-w-[90%]" style={{ fontWeight: '500' }}>
                Breng Uw Visie tot <span className='underline decoration-4 underline-offset-4'>Licht</span> met een Unieke Website
              </h1>
              <p className="text-lg lg:text-xl mb-12 max-w-[75%]">
                Verbeter uw digitale aanwezigheid. Wij bieden complete op maat gemaakte websites met hosting en domein, zodat u zich kunt focussen op uw doelen.
              </p>
              <div  className='mb-12'>
                <LightBlueButton href="/diensten" text="Bekijk onze diensten 🡢" />
              </div>
            </div>
          </div>
          <div className="lg:w-[45%] relative z-10 max-lg:hidden" id='right-div'>
            <Image src="/images/hero/hero.png" alt="Hero Image" layout="responsive" width={0} height={0} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
