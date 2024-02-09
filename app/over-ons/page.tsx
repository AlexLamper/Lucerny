import React from 'react'
import type { Metadata } from 'next';
import Image from 'next/image'
import styles from '@/styles/over-ons.module.css';

export const metadata: Metadata = {
  title: 'Lucerny | Op Maat Gemaakte Webdesign & Webdevelopment Diensten',
  description: 'Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['webdesign', 'webontwikkeling', 'website', 'webdesigner', 'webdeveloper', 'webdevelopment', 'webdesignbureau', 'webdesignbedrijf', 'webdevelopmentbureau', 'webdevelopmentbedrijf', 'webdesignerbedrijf', 'webdeveloperbedrijf', 'webdeveloperbureau', 'lucerny', 'lucerny webdesign', 'lucerny webdevelopment', 'lucerny webdesignbureau', 'lucerny webdevelopmentbureau', 'lucerny webdesignbedrijf', 'lucerny webdevelopmentbedrijf', 'lucerny webdesignerbedrijf', 'lucerny webdeveloperbedrijf', 'lucerny webdeveloperbureau', 'op maat gemaakte websites', 'op maat gemaakte webdesign', 'op maat', 'gemaakte', 'websites', 'webdesign', 'webdevelopment', 'webdesignbureau', 'webdevelopmentbureau', 'webdesignbedrijf', 'ontwikkeling', 'webontwikkeling', 'Nederland', 'goedkoop', 'cheap', 'goedkope', 'betaalbaar', 'affordable', 'professioneel', 'professional', 'professionele', 'professionaliteit', 'kwaliteit', 'quality', 'kwalitatief', 'kwalitatieve', 'kwalitatief hoogstaand', 'kwalitatief hoogstaande', 'hoogstaand', 'hoogstaande'],
  openGraph: {
    title: 'Lucerny | Op Maat Gemaakte Webdesign & Webdevelopment Diensten',
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
        <section className="text-center pt-20">
          <div className="container mx-auto mb-10">
            <h1 className="text-3xl max-sm:max-w-[85%] lg:text-5xl font-bold leading-tight mb-4 text-black max-w-[50%] mx-auto">
              Wij Creëren op maat gemaakte oplossingen<span className='text-black'>.</span>
            </h1>
            <p className="lg:text-lg text-base text-gray-900 mb-8 max-sm:max-w-[90%] mx-auto">Uw ideeën, onze kennis, een digitaal avontuur.</p>
          </div>
        </section>

        <section className="bg-transparent max-w-[70%] max-sm:max-w-[85%] lg:pt-20 lg:pb-20 pt-6 pb-6 mx-auto">
          <div className="container mx-auto">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-4/12">
                <Image 
                  className={styles.image2}
                  src="/images/images/missie.webp" width={0} 
                  // <a href="https://iconscout.com/illustrations/delivery" class="text-underline font-size-sm" target="_blank">Delivery person holding package</a> by <a href="https://iconscout.com/contributors/tdaystudio" class="text-underline font-size-sm" target="_blank">Tdays Tudio</a>
                  alt='service 1'
                  height={0}
                  sizes="100vw"
                  style={{ width: '70%', height: 'auto', borderRadius: '8px' }}
                />
              </div>
              <div className="lg:w-8/12 lg:pl-10">
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

      <section className="bg-transparent max-w-[70%] max-sm:max-w-[85%] lg:pt-20 lg:pb-20 pt-6 pb-6 mx-auto">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-8/12 lg:pl-10">
              <h1 className={styles.sectionTitle}>
              Onze Doelstelling<span className='text-[#496488]'>.</span>
              </h1>
              <p className={styles.sectionTextDoel}>
                Onze missie is duidelijk, we streven ernaar om elke ondernemer online te laten opvallen door het maken van prachtige websites die perfect werken en gebruiksvriendelijk zijn.
                <br /> <br />
                Onze focus ligt op het bouwen van sterke partnerschappen en het bieden van innovatieve oplossingen die bijdragen aan uw succes en groei. Ons doel is uw tevredenheid door expertise, creativiteit en inzet.
              </p>
            </div>
            <div className="lg:w-4/12 lg:pl-10">
              <Image 
                className={styles.image2}
                src="/images/images/doelstelling.webp" width={0}
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '75%', height: 'auto', borderRadius: '8px' }}
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
                src="/images/images/verhaal.webp" width={0} 
                // <a href="https://iconscout.com/illustrations/delivery" class="text-underline font-size-sm" target="_blank">Delivery person holding package</a> by <a href="https://iconscout.com/contributors/tdaystudio" class="text-underline font-size-sm" target="_blank">Tdays Tudio</a>
                alt='service 1'
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
              Bij Lucerny draait alles om webdesign en webontwikkeling die bij jouw bedrijf past. We maken niet alleen mooie en snelle websites, maar zorgen er ook voor dat ze meteen online zijn.
              <br /> <br />
              Onze missie is simpel: ondernemers online laten opvallen met prachtige, gebruiksvriendelijke websites. We hechten waarde aan sterke samenwerkingen en bieden innovatieve oplossingen voor jouw succes en groei.
              <br /> <br />
              Bij Lucerny gaat ons verhaal verder dan tech; het draait om jouw online succes en de unieke reis die we samen maken. Laten we jouw verhaal tot leven brengen in de digitale wereld.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OverOns;
