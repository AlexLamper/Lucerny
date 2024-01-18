// Hero.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/hero.module.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <div>
      <section className={`hero relative min-h-screen flex items-center justify-center overflow-hidden pt-32 ${styles.hero}`}>
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/backgrounds/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-center lg:max-w-[60%] mx-auto relative z-10">
          <div>
            <h2 className="text-xl lg:text-3xl mb-8">Exclusieve Digitale Oplossingen</h2>
            <h1 className="text-4xl lg:text-6xl leading-tight mb-12 relative max-sm:max-w-[90%] mx-auto">
            Breng Uw Online Visie tot <span className={styles.glow}>Licht</span> met een Gepersonaliseerde Website
            </h1>
            <p className="text-lg lg:text-xl mb-12 max-w-[70%] mx-auto">
              Verbeter uw digitale aanwezigheid. Wij bieden complete op maat gemaakte websites met hosting en domein, zodat u zich kunt focussen op uw doelen.
            </p>
            <Button href="/diensten" text="Bekijk onze diensten" />
            <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '75%', paddingTop: '100px', marginBottom: '150px' }}>
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
      <div className='border-b-2 mx-auto'></div>
    </div>
  );
};

export default Hero;
