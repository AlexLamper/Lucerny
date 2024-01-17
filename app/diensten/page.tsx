import React from 'react'
import { Metadata } from "next";
import DienstenSection from '@/components/Diensten/DienstenSection';
import styles from '@/styles/diensten.module.css';

export const metadata: Metadata = {
  title: "Diensten | Lucerny",
  description: "Diensten Pagina van Lucerny",
};

const Diensten = () => {

  return (
    <div className={styles.container}>

      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 text-[#232323] text-center">
          Onze Diensten<span className='text-[#496488]'>.</span>
        </h1>
        <p className="text-lg text-gray-600 mx-4">Bekijk onze verschillende pakketten en kies wat het beste bij jou past.</p>
      </div>
  
      <DienstenSection />
      <div className="text-center mb-8">
        <p className=" text-gray-600 mt-12 mx-6">Niet het pakket wat u zoekt? Neem <a href="/contact" className=' text-blue-500'>contact</a> op voor een gepersonaliseerd pakket.</p>
      </div>
    </div>
  );
};

export default Diensten;
