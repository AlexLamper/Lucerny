import Head from 'next/head'
import React from 'react'

const Offerte = () => {
    return (
        <div className="container mx-auto py-10">
          <Head>
            <title>Offerte Aanvragen</title>
            <meta name="description" content="Our portfolio of projects" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <div className="text-center mb-10">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-[#232323] text-center">
                Offerte aanvragen<span className='text-[#496488]'>.</span>
            </h1>
            <p className="text-lg text-gray-600">Wij staan in de startblokken! Vul onderstaand formulier in en we sturen binnen 1 werkdag een vrijblijvende offerte naar je toe.</p>
          </div>
        </div>
  )
};

export default Offerte;