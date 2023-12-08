import React from 'react'
import styles from '@/styles/hero.module.css';
import Image from 'next/image';

const Home3Section = () => {
  return (
    <section className={styles.section3}>
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-8/12">
            <h1 className={styles.sectionTitle}>
              Gemakkelijk te beheren<span className='text-[#496488]'>.</span>
            </h1>
            <p className={styles.sectionText}>
              Wij leveren een volledig pakket. De website word geleverd met een domeinnaam, hosting en SSL-certificaat, zodat u zich nergens zorgen over hoeft te maken. 
              Ook zijn onze websites gemakkelijk te beheren. U heeft geen technische kennis of ervaring nodig om uw website te beheren.
            </p>
            <h2 className={styles.sectionSubtitle}>
              Budgetvriendelijke websites<span className='text-[#496488]'>.</span>
            </h2>
            <p className={styles.sectionText}>
              Wij begrijpen dat budgetten soms beperkt zijn, vooral voor startende ondernemers. Daarom bieden wij betaalbare op maat gemaakte websites, zodat u een professionele online aanwezigheid kunt opbouwen zonder uw budget te overschrijden.
            </p>
          </div>
          <div className="lg:w-4/12 lg:pl-10">
            <Image 
              className={styles.image2}
              src="/images/images/laptop.png" width={0}
              alt='service 1'
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home3Section;