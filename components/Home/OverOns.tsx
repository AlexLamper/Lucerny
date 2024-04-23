import React from 'react';
import Image from 'next/image';

const OverOns = () => {
  return (
    <div>
      <section className="py-16 mx-auto lg:bg-transparent bg-[#F1F2F3]">
        <div className="container mx-auto max-w-[100%] max-sm:max-w-[85%]">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-6/12 lg:bg-[#F1F2F3] py-12 flex lg:justify-center rounded-tr-3xl rounded-br-3xl">
              <Image 
                className="rounded-2xl lg:mb-0 md:mb-8 sm:mb-4 lg:ml-0 md:ml-8 sm:ml-8"
                src="/images/images/me/2.jpg" 
                width={0} 
                alt='Lucerny Alex'
                height={0}
                sizes="100vw"
                style={{ 
                  width: '40%',
                  height: 'auto',
                  filter: 'drop-shadow(6px 6px 12px rgba(255, 255, 255, 0.15))'
                }}
              />
            </div>
            <div className="lg:w-6/12 lg:pr-10 py-12 flex lg:justify-center lg:items-center lg:mb-0 lg:ml-0 md:ml-8 sm:ml-8">
              <div className='lg:mx-12 lg:max-w-[70%] max-w-[90%]'>
                <h2 className="lg:text-5xl text-3xl mb-6 text-black">Over Ons<span className="text-black">.</span></h2>
                <p className="text-xl leading-7 text-[#6b6b6b] mb-8">
                  Lucerny is een modern bedrijf gefocust op webdesign en ontwikkeling. Wij zetten ons in om uw bedrijf online te laten groeien. 
                  <br /><br />
                  We zorgen voor een unieke website die perfect aansluit bij uw wensen en behoeften. Daarnaast bieden we onderhoud, support en SEO-diensten zodat u zich nergens zorgen over hoeft te maken en kunt focussen op uw bedrijf.
                </p>
                <div className='pt-6'>
                  <a href='/over-ons' className="text-[#6b6b6b] text-lg p-5 border border-[#1b1b1b50] rounded-3xl transition-all duration-300 bg-white hover:bg-[#7d6cec] hover:text-white hover:border-none">Lees meer →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverOns;
