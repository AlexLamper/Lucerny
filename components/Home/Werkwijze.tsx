import React from 'react'
import Image from 'next/image'

const Werkwijze = () => {
  return (
    <div>
      <section className="max-w-[70%] max-sm:max-w-[90%] py-28 lg:mx-auto lg:pl-12 max-md:ml-12 md:ml-12 max-sm:ml-12">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-6/12 lg:ml-0">
              <Image 
                className="mb-4 border border-gray-600 rounded-md max-lg:mb-12"
                src="/images/images/stappenplan1.png" width={0} 
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '60%', height: 'auto' }}
              />
            </div>
            <div className="lg:w-6/12 lg:pl-10">
                <h2 className="lg:text-5xl text-3xl mb-6">Hoe gaan wij te werk<span className="text-black">?</span></h2>
                <p className="text-xl leading-7 text-[#6b6b6b] mb-8">
                  Wij gebruiken een 5-stappenplan voor uw website. Dit zorgt voor een duidelijke werkwijze.
                  <br /><br />
                  <div className='max-w-[85%]'>
                    <span className='text-lg'>1. Inleidend Gesprek</span>: Bespreking van wensen en behoeften, en vaststellen van projecttijdlijnen.
                    <br /><br />
                    <span className='text-lg'>2. Concept en Ontwerp</span>: Definiëren van visueel en functioneel ontwerp.
                    <br /><br />
                    <span className='text-lg'>3. Herzieningsronde</span>: Feedback verzamelen over het ontwerp om aan uw wensen te voldoen.
                    <br /><br />
                    <span className='text-lg'>4. Ontwikkeling</span>: Maken van de website volgens de definitieve ontwerpen, rekening houdend met beveiliging en functionaliteit.
                    <br /><br />
                    <span className='text-lg'>5. Het eindproduct</span>: Publicatie van de website naar de live-omgeving.
                  </div>
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Werkwijze