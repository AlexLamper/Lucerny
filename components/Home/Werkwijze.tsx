import React from 'react'
import Image from 'next/image'

const Werkwijze = () => {
  return (
    <div>
    <section className="max-w-[70%] max-sm:max-w-[85%] py-28 mx-auto">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-4/12">
              <Image 
                className="mb-4 border border-gray-600 rounded-md max-lg:mb-12"
                src="/images/images/stappenplan1.png" width={0} 
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '70%', height: 'auto' }}
              />
            </div>
            <div className="lg:w-8/12 lg:pl-10">
                <h2 className="lg:text-5xl text-3xl mb-6">Hoe gaan wij te werk<span className="text-black">?</span></h2>
                <p className="text-lg leading-7 text-black mb-8">
                Wij maken gebruik van een 5-stappenplan om uw website te maken. Dit zorgt voor een duidelijke en gestructureerde werkwijze, waardoor u altijd weet wat er gebeurt en wat u kunt verwachten.
                <br /><br />
                <span className='text-xl'>1. Inleidend Gesprek</span>. U vertelt ons wat de wensen en behoeften zijn. Ook worden projecttijdlijnen vastgesteld.
                <br /><br />
                <span className='text-xl'>2. Concept en Ontwerp</span>. Het visuele en functionele ontwerp van de website definiëren. Door het creëren van conceptdesigns  en een website structuurdiagram  
                <br /><br />
                <span className='text-xl'>3. Herzieningsronde</span>. Bij de herzieningsrondes kunt u feedback geven over het ontwerp om aan uw wensen te voldoen. Het aantal rondes varieert per pakket.
                <br /><br />
                <span className='text-xl'>4. Ontwikkeling</span>. De website wordt door ons daadwerkelijk op maat gemaakt volgens de definitieve en vastgestelde ontwerpen. We houden er rekening mee dat de website beveiligd is, op elk apparaat geschikt is, en volledig functioneert.
                <br /><br />
                <span className='text-xl'>5. Het eindproduct</span>. Klaar! De website zal gepubliceerd worden naar de live-omgeving. U kunt uw website nu bezoeken via uw gekozen domein.
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Werkwijze