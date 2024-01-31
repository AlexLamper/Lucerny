import React from 'react';
import Image from 'next/image';
import styles from '@/styles/hero.module.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <div>
      <section className={`hero relative min-h-screen flex items-center justify-center overflow-hidden pt-32 max-lg:pt-24 max-md:pt-16 max-sm:pt-10 ${styles.hero}`}>
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/backgrounds/over-ons/background.svg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-center lg:max-w-[60%] mx-auto relative z-10">
          <div>
            <h2 className="text-xl lg:text-3xl mb-8">Exclusieve Digitale Oplossingen</h2>
            <h1 className="text-4xl lg:text-[66px] leading-none mb-12 relative max-sm:max-w-[90%] mx-auto font-medium">
              Breng Uw Online Visie tot <span className='underline decoration-4 underline-offset-4'>Licht</span> met een Gepersonaliseerde Website
            </h1>
            <p className="text-lg lg:text-xl mb-12 max-w-[70%] mx-auto">
              Verbeter uw digitale aanwezigheid. Wij bieden complete op maat gemaakte websites met hosting en domein, zodat u zich kunt focussen op uw doelen.
            </p>
            <Button href="/diensten" text="Bekijk onze diensten" />
            <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '75%', paddingTop: '100px', marginBottom: '50px' }}>
              <Image 
                src={'/images/images/image.webp'} 
                alt={'Hero Image'} 
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>
      <div className='border-b-2 mx-auto border-[#20202011]'></div>
    </div>
  );
};

export default Hero;
