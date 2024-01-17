import React from 'react'
import type { Metadata } from 'next';
import Image from 'next/image'
import styles from '@/styles/over-ons.module.css';

export const metadata: Metadata = {
  title: 'Over Ons | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

// Bij Lucerny staan we voor een vastberaden aanpak van uw online succes. Wij geloven in het leveren van kwalitatieve diensten die voldoen aan uw behoeften. Onze focus ligt bij de klant en we streven ernaar meerwaarde te bieden door middel van onze expertise en creativiteit.

const OverOns = () => {
  return (
    <>
      <section className="text-center pt-20">
        <div className="container mx-auto mb-10">
          <h1 className="text-3xl max-sm:max-w-[90%] lg:text-5xl font-bold leading-tight mb-4 text-black max-w-[50%] mx-auto">
            Wij Creëren op maat gemaakte oplossingen<span className='text-black'>.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-sm:max-w-[90%] mx-auto">Uw ideeën, onze kennis, een digitaal avontuur.</p>
        </div>
      </section>

      <section className="bg-white w-[70%] py-20 mx-auto">
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
                style={{ width: '70%', height: 'auto' }}
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

      <section className="bg-white w-[70%] py-20 mx-auto">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-8/12 lg:pl-10">
              <h1 className={styles.sectionTitle}>
              Onze Doelstelling<span className='text-[#496488]'>.</span>
              </h1>
              <p className={styles.sectionTextMissie}>
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
                style={{ width: '75%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-[70%] py-20 mx-auto">
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
                style={{ width: '70%', height: 'auto' }}
              />
            </div>
            <div className="lg:w-8/12 lg:pl-10">
              <h1 className={styles.sectionTitle}>
              Ons Verhaal<span className='text-black'>.</span>
              </h1>
              <p className={styles.sectionText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum delectus, atque possimus iste perferendis, necessitatibus vitae voluptatibus saepe ipsam, commodi tempore consequuntur ad sequi illo corrupti minus asperiores culpa!
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sed ipsa odit, itaque dolore quam repudiandae sint porro repellendus voluptatibus tempora officia nemo illo unde a quidem impedit. Ratione, fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem natus corrupti totam repellat, consequuntur nulla alias itaque quis, maiores, voluptatum distinctio repellendus! Enim earum id asperiores officiis laborum dolores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OverOns;
