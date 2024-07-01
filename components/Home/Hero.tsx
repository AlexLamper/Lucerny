'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/hero.module.css';
import LightBlueButton from '../Button/LightBlueButton';

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById('diensten');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section className={`hero relative min-h-screen pt-[10%] overflow-hidden ${styles.hero}`}>
        <div className="flex justify-between">
          <div className="lg:w-[45%] relative z-10 lg:ml-32 ml-8" id='left-div'>
            <div className='lg:mt-0 mt-10'>
              <h1 className="text-4xl lg:text-[66px] leading-none mb-12 relative max-w-[90%]" style={{ fontWeight: '500' }}>
                Breng Uw Visie tot <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7664F3] to-[#b0a8ff]' style={{ textShadow: '0 2px 4px rgba(118, 100, 243, 0.3)' }}>Licht</span> met een Unieke Website
              </h1>
              <p className="text-lg lg:text-xl mb-12 max-w-[75%]">
                Verbeter uw digitale aanwezigheid. Wij bieden complete op maat gemaakte websites met hosting en domein, zodat u zich kunt focussen op uw doelen.
              </p>
              <div className='mb-12'>
                <LightBlueButton href="/diensten" text="Bekijk onze diensten" />
              </div>
            </div>
          </div>
          <div className="lg:w-[25%] relative z-10 max-lg:hidden mr-[9%] mt-[-2%]">
            <Image src="/images/hero/hero2.svg" alt="Hero Image" layout="responsive" width={0} height={0} />
          </div>
        </div>
        <div className='h-[15vh] flex items-center justify-center'>
          <a onClick={scrollToSection} style={{ cursor: 'pointer' }}>
            <Image 
              src="/images/icons/arrow-down.svg" 
              alt="Arrow Down" 
              width={35} 
              height={35} 
            />
          </a>
        </div>
        <a id='diensten'></a>
      </section>
    </div>
  );
};

export default Hero;
