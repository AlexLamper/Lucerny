import React from 'react'
import Image from 'next/image'
import styles from '@/styles/over-ons.module.css';

const DienstenOverOns = () => {
  return (
    <div>
      <section className="bg-transparent max-w-[70%] max-sm:max-w-[85%] lg:py-32 pt-6 pb-6 mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="lg:w-4/12">
              <Image 
                className={styles.image2}
                src="/images/images/me/3.jpg"
                width={0}
                // <a href="https://iconscout.com/illustrations/web-exploring" class="text-underline font-size-sm" target="_blank">Web Exploring</a> by <a href="https://iconscout.com/contributors/iconscout" class="text-underline font-size-sm" target="_blank">IconScout Store</a>
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '70%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="lg:w-8/12 lg:pl-12 mt-6 lg:mt-0">
              <h2 className="text-3xl lg:text-5xl font-semibold text-black mb-6 max-w-[95%] lg:max-w-[85%]">
                Over <span className="text-[#7664F3]">Lucerny</span><span className='text-black'>.</span>
              </h2>
              <p className="text-xl leading-7 text-[#6b6b6b] mb-8 lg:max-w-[85%]">
                Lucerny is een modern bedrijf dat zich richt op webdesign en ontwikkeling om uw bedrijf online te laten groeien.
                <br /><br />
                Wij zorgen voor een unieke website die perfect aansluit bij uw wensen en behoeften. Daarnaast bied Lucerny onderhoud, support en SEO-diensten zodat u zich nergens zorgen over hoeft te maken en kunt focussen op uw bedrijf.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DienstenOverOns
