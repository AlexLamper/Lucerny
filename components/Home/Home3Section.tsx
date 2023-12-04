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
                Op maat gemaakte websites: betaalbaar en uniek<span className='text-[#496488]'>.</span>
            </h1>
            <p className={styles.sectionText}>
                Een unieke – op maat gemaakte – website voor een voordelige prijs. Dat is wat wij bieden. Perfect voor de startende ondernemer en het MKB. Jouw wensen, doelgroep en de nieuwste trends vormen de basis voor het ontwerp van de website. Tijdens het maken van de website heb je ruimte om je feedback door te geven. Zo komen we samen tot een mooi resultaat
            </p>
            <h2 className={styles.sectionSubtitle}>
                Eenvoudig in beheer<span className='text-[#496488]'>.</span>
            </h2>
            <p className={styles.sectionText}>
                De website wordt ontwikkeld met eenvoudige software. Hierdoor kun je zelf aanpassingen maken aan de website. Bij oplevering sturen we je een gepersonaliseerde video om uit te leggen hoe je dat doet
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