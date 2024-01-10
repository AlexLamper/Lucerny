import React from 'react'
import type { Metadata } from 'next';
import Image from 'next/image'
import styles from '@/styles/over-ons.module.css';
import { CiCirclePlus } from "react-icons/ci";

export const metadata: Metadata = {
  title: 'Over Ons | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const OverOns = () => {
  return (
    <>
      {/* Sectie 1 */}
      <section className={styles.overOnsHero}>
        <div className="container mx-auto mb-10">
          <h1 className="text-3xl max-sm:max-w-[90%] max-sm:mx-auto lg:text-5xl font-bold leading-tight mb-4 text-[#232323]">
            Meer Over Ons<span className='text-[#496488]'>.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-sm:max-w-[90%] max-sm:mx-auto">Uw ideeën, onze kennis, een digitaal avontuur.</p>
          <p className="text-lg lg:text-xl mb-16 text-[#414141] max-w-[85%]" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Bij Lucerny staan we voor een vastberaden aanpak van uw online succes. Wij geloven in het leveren van kwalitatieve diensten die voldoen aan uw behoeften. Onze focus ligt bij de klant en we streven ernaar meerwaarde te bieden door middel van onze expertise en creativiteit.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kaart 1 */}
          <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center text-center ml-4 mr-4 shadow-md">
            <div className="mb-4 text-496488 text-4xl">
              <CiCirclePlus />
            </div>
            <h1 className="text-xl font-bold mb-3">Gebruiksvriendelijkheid</h1>
            <p>
              Bij ons draait alles om een vlotte en fijne ervaring voor de bezoekers. We willen dat ze zonder gedoe en met gemak door onze sites kunnen klikken. Elke knop, menu en functie wordt goed doordacht en getest, zodat iedereen snel vindt wat ze zoeken.
            </p>
          </div>

          {/* Kaart 2 */}
          <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center text-center ml-4 mr-4 shadow-md">
            <div className="mb-4 text-496488 text-4xl">
              <CiCirclePlus />
            </div>
            <h1 className="text-xl font-bold mb-3">Grafisch ontwerp</h1>
            <p>
              Wij bij Lucerny focussen op mooie websites die echt passen bij bedrijven en individuen. We mixen creativiteit met bruikbaarheid om een tof ontwerp neer te zetten dat meteen de aandacht trekt en een indruk achterlaat.
            </p>
          </div>

          {/* Kaart 3 */}
          <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center text-center ml-4 mr-4 shadow-md">
            <div className="mb-4 text-496488 text-4xl">
              <CiCirclePlus />
            </div>
            <h1 className="text-xl font-bold mb-3">Ontwikkeling</h1>
            <p>
              We vinden het cruciaal dat onze websites stevig in elkaar zitten, zonder ruimte voor onvoorziene fouten. Daarom gebruiken we de nieuwste tools en frameworks voor moderne, veilige en krachtige websites. Met topkwaliteit streven we naar een geweldige gebruikerservaring.
            </p>
          </div>
        </div>
      </section>

      {/* Sectie 2 */}
      <section className="bg-white w-full py-20">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-4/12">
              <Image 
                className={styles.image2}
                src="/images/images/diensten.svg" width={0} 
                // <a href="https://iconscout.com/illustrations/delivery" class="text-underline font-size-sm" target="_blank">Delivery person holding package</a> by <a href="https://iconscout.com/contributors/tdaystudio" class="text-underline font-size-sm" target="_blank">Tdays Tudio</a>
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '65%', height: 'auto' }}
              />
            </div>
            <div className="lg:w-8/12 lg:pl-10">
              <h1 className={styles.sectionTitle}>
              Onze Diensten<span className='text-[#496488]'>.</span>
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

      {/* Sectie 3 */}
      <section className={styles.section3}>
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-8/12 lg:pl-10">
              <h1 className={styles.sectionTitle}>
              Onze Missie<span className='text-[#496488]'>.</span>
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
                src="/images/images/missie.svg" width={0}
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '75%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OverOns;