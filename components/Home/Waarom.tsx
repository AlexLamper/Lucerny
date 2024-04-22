import React from 'react';
import Image from 'next/image';

const Waarom = () => {
  return (
    <div>
      <section className="py-16 mx-auto">
        <div className="container mx-auto max-w-[100%] max-sm:max-w-[85%]">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-6/12 lg:pr-10 py-12 flex lg:justify-center lg:items-center lg:mb-0 lg:ml-0 md:ml-8 sm:ml-8">
              <div className='lg:mx-12 max-w-[70%]'>
                <h2 className="lg:text-5xl text-3xl mb-6">Waarom kiezen voor Lucerny<span className="text-black">?</span></h2>
                <p className="text-xl leading-7 text-[#6b6b6b] mb-8 lg:ml-0">
                  <span className='text-[18px] text-[#6b6b6b] italic'>Lucerny, van lūceō: &quot;schijn, wees een licht&quot;.</span>
                  <br /><br />
                  Bij Lucerny krijgt u voor een betaalbare prijs een professionele website. Dit betekend dat u een website krijgt die er niet alleen goed uitziet, maar ook goed werkt en volledig naar uw wensen is gemaakt.
                </p>
                <div className='pt-6'>
                  <a href='/over-ons' className="text-[#6b6b6b] text-lg p-5 border border-[#1b1b1b50] rounded-3xl transition-all duration-300 hover:bg-[#7d6cec] hover:text-white hover:border-none">Lees meer →</a>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 lg:bg-[#F1F2F3] py-12 flex lg:justify-center rounded-tl-3xl rounded-bl-3xl">
              <Image 
                className="rounded-2xl lg:mb-0 md:mb-8 sm:mb-4 lg:ml-0 md:ml-8 sm:ml-8"
                src="/images/images/waarom1.jpg"
                width={0} 
                alt='Lucerny Waarom'
                height={0}
                sizes="100vw"
                style={{ 
                  width: '60%', 
                  height: 'auto',
                  filter: 'drop-shadow(6px 6px 12px rgba(255, 255, 255, 0.15))'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waarom;