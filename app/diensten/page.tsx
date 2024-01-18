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
    <>
      <div className='min-h-screen' style={{ backgroundImage: 'url("/images/backgrounds/casus/background.svg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <section className="text-center pt-20">
          <div className="container mx-auto mb-10">
            <h1 className="text-3xl max-sm:max-w-[90%] lg:text-5xl font-bold leading-tight mb-4 text-black max-w-[50%] mx-auto">
            Onze Diensten<span className='text-black'>.</span>
            </h1>
            <p className="text-lg text-gray-900 mb-8 max-sm:max-w-[90%] mx-auto">Bekijk onze verschillende pakketten en kies wat het beste bij jou past.</p>
          </div>
        </section>

        <section className="bg-transparent max-w-[70%] max-sm:max-w-[90%] max- pt-6 mx-auto">
          <DienstenSection />
        </section>
        <div className="text-center mb-12">
          <p className=" text-black mt-12 mx-6 font-thin">Niet het pakket wat u zoekt? Neem <a href="/contact" className=' text-blue-500'>contact</a> op voor een gepersonaliseerd pakket.</p>
        </div>
      </div>
    </>
  );
};

export default Diensten;