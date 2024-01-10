import React from 'react';
import styles from '@/styles/hero.module.css';

const Home4Section = () => {
  return (
    <section className="bg-white text-white py-16">
      <div className="container mx-auto max-w-[80%] text-center">
        <h1 className={`${styles.sectionTitle} mx-auto`}>
          Klaar voor een compleet nieuwe website<span className='text-[#496488]'>?</span>
        </h1>
        <p className={styles.sectionText}>
            Laten we samenwerken om een aantrekkelijke en effectieve online aanwezigheid voor je bedrijf te creëren.
        </p>
        <a
          href="/contact"
          className="bg-gradient-to-r from-blueButtonStart to-blueButtonEnd hover:bg-blue-600 text-white bg-blue-500 py-3 px-8 rounded-xl text-lg font-semibold transition duration-300 inline-block"
          style={{ background: "linear-gradient(90deg, #488bff, #48a1d4)" }}
        >
          Kom nu in contact
        </a>
      </div>
    </section>
  );
};

export default Home4Section;
