import React from 'react'
import Image from 'next/image'
import styles from '@/styles/over-ons.module.css';

const Doelstelling = () => {
  return (
    <div>
        <section className="lg:pt-20 lg:pb-20 pt-6 pb-6 mx-auto bg-[#F1F2F3]">
        <div className="container mx-auto max-w-[70%] max-sm:max-w-[85%]">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-8/12 lg:pl-10">
              <h2 className="text-3xl lg:text-5xl font-semibold text-black mb-6 max-w-[95%] lg:max-w-[85%]"><span className='text-black'>Onze <span className="text-[#7664F3]">Doelstelling</span><span className='text-black'>.</span></span></h2>
              <p className="text-xl leading-7 text-[#6b6b6b] mb-8 lg:max-w-[85%]">
                <span className='text-[#6b6b6b]'>
                  Onze missie is duidelijk: ondernemers laten opvallen met prachtige, gebruiksvriendelijke websites die perfect werken. 
                  <br /><br />
                  Wij focusen ons op kwaliteit en bied uitstekende service, zodat u zich volledig kunt richten op het laten groeien van uw bedrijf.
                </span>
              </p>
            </div>
            <div className="lg:w-4/12 lg:pl-10">
              <Image 
                className={styles.image2}
                src="/images/images/doelstelling2.svg" width={0}
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '75%', height: 'auto', borderRadius: '8px', opacity: '0.8' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Doelstelling