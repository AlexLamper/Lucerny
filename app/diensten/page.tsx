import React from 'react'
import { Metadata } from "next";
import Head from 'next/head';
import DienstenSection from '@/components/Diensten/DienstenSection';

export const metadata: Metadata = {
  title: "Diensten | Lucerny",
  description: "Diensten Pagina van Lucerny",
  // other metadata
};

const Diensten = () => {

  return (
    <div className="container mx-auto py-10">
      <Head>
        <title>Diensten</title>
        <meta name="description" content="Onze diensten" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 text-[#232323] text-center">
          Onze Diensten<span className='text-[#496488]'>.</span>
        </h1>
        <p className="text-lg text-gray-600 mx-4">Bekijk onze verschillende pakketten en kies wat het beste bij jou past.</p>
      </div>
  
      <DienstenSection />
    </div>
  );
};

export default Diensten;
