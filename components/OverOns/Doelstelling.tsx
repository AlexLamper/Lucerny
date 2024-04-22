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
              <h1 className={styles.sectionTitle}>
                <span className='text-black'>Onze Doelstelling<span className='text-black'>.</span></span>
              </h1>
              <p className={styles.sectionTextDoel}>
                <span className='text-[#6b6b6b]'>
                  Onze missie is duidelijk, we streven ernaar om elke ondernemer online te laten opvallen door het maken van prachtige websites die perfect werken en gebruiksvriendelijk zijn.
                  <br /> <br />
                  Onze focus ligt op het bouwen van sterke partnerschappen en het bieden van innovatieve oplossingen die bijdragen aan uw succes en groei. Ons doel is uw tevredenheid door expertise, creativiteit en inzet.
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