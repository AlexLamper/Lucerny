import React from 'react'
import styles from '@/styles/hero.module.css';
import Image from 'next/image';

const Home2Section = () => {
  return (
    <section className="bg-white w-full py-20">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-4/12">
            <Image 
              className={styles.image2}
              src="/images/images/services.svg" width={0}
              alt='service 1'
              height={0}
              // sizes="100vw"
              style={{ width: '70%', height: 'auto' }}
            />
          </div>
          <div className="lg:w-8/12 lg:pl-10">
            <h1 className={styles.sectionTitle}>
              Online zichtbaarheid voor elke ondernemer<span className='text-[#496488]'>.</span>
            </h1>
            <p className={styles.sectionText}>
              Bij Lucerny geloven we dat elke ondernemer online opgemerkt moet worden. Daarom richten wij ons op het leveren van op maat gemaakte, mobielvriendelijke websites die snel online staan en eenvoudig te beheren zijn. We begrijpen dat er vaak beperkte budgetten zijn, vooral voor beginnende ondernemers. Daarom bieden wij hoogwaardig webdesign op maat, zonder de hoge kosten.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home2Section;