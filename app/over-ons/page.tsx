import React from 'react'
import type { Metadata } from 'next';
import Image from 'next/image'
import styles from '@/styles/over-ons.module.css';

export const metadata: Metadata = {
  title: 'Lucerny | Op Maat Gemaakte Webdesign & Webdevelopment',
  description: 'Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['webdesign', 'webontwikkeling', 'website', 'webdesigner', 'webdeveloper', 'webdevelopment', 'webdesignbureau', 'webdesignbedrijf', 'webdevelopmentbureau', 'webdevelopmentbedrijf', 'webdesignerbedrijf', 'webdeveloperbedrijf', 'webdeveloperbureau', 'lucerny', 'lucerny webdesign', 'lucerny webdevelopment', 'lucerny webdesignbureau', 'lucerny webdevelopmentbureau', 'lucerny webdesignbedrijf', 'lucerny webdevelopmentbedrijf', 'lucerny webdesignerbedrijf', 'lucerny webdeveloperbedrijf', 'lucerny webdeveloperbureau', 'op maat gemaakte websites', 'op maat gemaakte webdesign', 'op maat', 'gemaakte', 'websites', 'webdesign', 'webdevelopment', 'webdesignbureau', 'webdevelopmentbureau', 'webdesignbedrijf', 'ontwikkeling', 'webontwikkeling', 'Nederland', 'goedkoop', 'cheap', 'goedkope', 'betaalbaar', 'affordable', 'professioneel', 'professional', 'professionele', 'professionaliteit', 'kwaliteit', 'quality', 'kwalitatief', 'kwalitatieve', 'kwalitatief hoogstaand', 'kwalitatief hoogstaande', 'hoogstaand', 'hoogstaande', 'middelharnis', 'middelharnis webdesign', 'middelharnis webdevelopment', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesigner', 'middelharnis webdeveloper', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesigner', 'middelharnis webdeveloper', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesigner', 'middelharnis webdeveloper', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'Goeree-overflakkee', 'goeree-overflakkee webdesign', 'goeree-overflakkee webdevelopment', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesignbedrijf', 'goeree-overflakkee webdevelopmentbedrijf', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesigner', 'goeree-overflakkee webdeveloper', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesignbedrijf', 'goeree-overflakkee webdevelopmentbedrijf', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesigner', 'goeree-overflakkee webdeveloper', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesignbedrijf', 'goeree-overflakkee webdevelopmentbedrijf', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesigner', 'goeree-overflakkee webdeveloper', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesign', 'sommelsdijk', 'sommelsdijk webdesign', 'sommelsdijk webdevelopment', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesigner', 'sommelsdijk webdeveloper', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesigner', 'sommelsdijk webdeveloper', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesigner', 'sommelsdijk webdeveloper', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf'],
  openGraph: {
    title: 'Lucerny | Op Maat Gemaakte Webdesign & Webdevelopment',
    description: "Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.",
    url: "https://lucerny.nl",
    siteName: "Lucerny | Webdesign & Webdevelopment",
    type: "website",
    locale: "nl_NL",
  },
  metadataBase: new URL("https://lucerny.nl"),
};

const OverOns = () => {
  return (
    <>
      <div style={{ backgroundImage: 'url("/images/backgrounds/over-ons/background.svg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <section className="text-center pt-[7rem]">
          <div className="container mx-auto mb-10">
            <h1 className="text-3xl max-sm:max-w-[85%] lg:text-5xl font-bold leading-tight mb-4 text-black max-w-[50%] mx-auto">
              Wij Creëren op maat gemaakte oplossingen<span className='text-black'>.</span>
            </h1>
            <p className="lg:text-lg text-base text-gray-900 mb-8 max-sm:max-w-[90%] mx-auto">Uw ideeën, onze kennis, een digitaal avontuur.</p>
          </div>
        </section>

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

      <section className="lg:pt-20 lg:pb-20 pt-6 pb-6 mx-auto bg-[#141414ef]">
        <div className="container mx-auto max-w-[70%] max-sm:max-w-[85%]">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-8/12 lg:pl-10">
              <h1 className={styles.sectionTitle}>
                <span className='text-[#e2e2e2]'>Onze Doelstelling<span className='text-[#e2e2e2]'>.</span></span>
              </h1>
              <p className={styles.sectionTextDoel}>
                <span className='text-[#d8d8d8]'>
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

      <section className="bg-transparent max-w-[70%] max-sm:max-w-[85%] lg:pt-20 lg:pb-20 pt-6 pb-6 mx-auto">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-4/12">
              <Image 
                className={styles.image2}
                src="/images/images/me/3.jpg" width={0} 
                // <a href="https://iconscout.com/illustrations/delivery" class="text-underline font-size-sm" target="_blank">Delivery person holding package</a> by <a href="https://iconscout.com/contributors/tdaystudio" class="text-underline font-size-sm" target="_blank">Tdays Tudio</a>
                alt='Lucerny Alex'
                height={0}
                sizes="100vw"
                style={{ width: '70%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="lg:w-8/12 lg:pl-10">
              <h1 className={styles.sectionTitle}>
              Ons Verhaal<span className='text-black'>.</span>
              </h1>
              <p className={styles.sectionText}>
              In 2023 is Lucerny begonnen, met het doel om ondernemers online te laten opvallen met prachtige, gebruiksvriendelijke websites. 
              <br /> <br />
              We zijn een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.
              <br /> <br />
              Onze focus ligt op het bouwen van sterke partnerschappen en het bieden van innovatieve oplossingen die bijdragen aan uw succes en groei. Ons doel is uw tevredenheid door expertise, creativiteit en inzet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OverOns;
