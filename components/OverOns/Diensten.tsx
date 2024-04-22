import React from 'react'
import Image from 'next/image'
import styles from '@/styles/over-ons.module.css';

const DienstenOverOns = () => {
  return (
    <div>
        <section className="bg-transparent max-w-[70%] max-sm:max-w-[85%] lg:py-32 pt-6 pb-6 mx-auto">
          <div className="container mx-auto">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-4/12">
                <Image 
                  className={styles.image2}
                  src="/images/images/overons7.svg" width={0} 
                  // <a href="https://iconscout.com/illustrations/web-exploring" class="text-underline font-size-sm" target="_blank">Web Exploring</a> by <a href="https://iconscout.com/contributors/iconscout" class="text-underline font-size-sm" target="_blank">IconScout Store</a>
                  alt='service 1'
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </div>
              <div className="lg:w-8/12 lg:pl-12">
                <h1 className={styles.sectionTitle}>
                Onze Diensten<span className='text-black'>.</span>
                </h1>
                <p className={styles.sectionText}>
                Bij Lucerny gaan we voor webdesign en webontwikkeling op maat dat perfect past bij wat uw bedrijf nodig heeft. We bouwen niet alleen mooie en snelle websites die er op elk apparaat goed uitzien, maar zorgen er ook voor dat ze gelijk online kunnen.
                <br /> <br />
                We bieden ook regelmatig onderhoud en blijven altijd klaarstaan voor support, zodat uw website altijd up-to-date en probleemloos blijft draaien. Daarnaast richten we ons op het verbeteren van uw online aanwezigheid door SEO toe te passen, waardoor uw bedrijf makkelijker te vinden is voor potentiële klanten.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default DienstenOverOns