import React from 'react'
import styles from '@/styles/hero.module.css';

const Hero2Section = () => {
  return (
    <section className="bg-amber-600 w-100">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/2 lg:pr-10">
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-6 text-[#232323]">
              Online zichtbaarheid voor elke ondernemer
            </h1>
            <p className="text-sm lg:text-xl mb-8 text-[#414141]">
              Bij Lucerny geloven we dat elke ondernemer online opgemerkt moet worden. Daarom richten wij ons op het leveren van op maat gemaakte, mobielvriendelijke websites die snel online staan en eenvoudig te beheren zijn. We begrijpen dat er vaak beperkte budgetten zijn, vooral voor beginnende ondernemers. Daarom bieden wij hoogwaardig webdesign op maat, zonder de hoge kosten.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero2Section