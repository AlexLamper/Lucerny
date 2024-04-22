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
                        We zijn gespecialiseerd in het bouwen van een volledige oplossing voor uw bedrijf, van webdesign tot webdevelopment en online marketing. We vinden het leuk om met u samen te werken en uw ideeën tot leven te brengen!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Verhaal