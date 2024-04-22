import React from 'react'
import Image from 'next/image'
import styles from '@/styles/over-ons.module.css';

const Verhaal = () => {
  return (
    <div>
        <section className="bg-transparent max-w-[70%] max-sm:max-w-[85%] lg:pt-20 lg:pb-20 pt-6 pb-6 mx-auto">
            <div className="container mx-auto">
                <div className="lg:flex lg:justify-between">
                    <div className="lg:w-4/12">
                        <Image 
                            className={styles.image2}
                            src="/images/images/me/3.jpg" width={0} 
                            // <a href="https://iconscout.com/illustrations/delivery" class="text-underline font-size-sm" target="_blank">Delivery person holding package</a> by <a href="https://iconscout.com/contributors/tdaystudio" class="text-underline font-size-sm" target="_blank">Tdays Tudio</a>
                            alt='Lucerny Alex'
                            height={0}
                            sizes="100vw"
                            style={{ width: '70%', height: 'auto', borderRadius: '8px' }}
                        />
                    </div>
                    <div className="lg:w-8/12 lg:pl-10">
                        <h1 className={styles.sectionTitle}>
                        Ons Verhaal<span className='text-black'>.</span>
                        </h1>
                        <p className={styles.sectionText}>
                        In 2023 is Lucerny begonnen, met het doel om ondernemers online te laten opvallen met prachtige, gebruiksvriendelijke websites. 
                        <br /> <br />
                        We zijn een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.
                        <br /> <br />
                        Onze focus ligt op het bouwen van sterke partnerschappen en het bieden van innovatieve oplossingen die bijdragen aan uw succes en groei. Ons doel is uw tevredenheid door expertise, creativiteit en inzet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Verhaal