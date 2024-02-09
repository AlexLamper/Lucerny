import React from 'react'
import Image from 'next/image'

const OverOns = () => {
  return (
    <div>
    <section className="bg-white max-w-[70%] max-sm:max-w-[85%] pt-28 mx-auto">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-4/12">
              <Image 
                className="mb-4 rounded-md max-lg:mb-12"
                src="/images/images/overons2.png" width={0} 
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '70%', height: 'auto' }}
              />
            </div>
            <div className="lg:w-8/12 lg:pl-10">
                <h2 className="lg:text-5xl text-3xl mb-6">Over Ons<span className="text-black">.</span></h2>
                <p className="text-lg leading-7 text-black mb-8">
                Bij Lucerny gaan we voor webdesign en webontwikkeling op maat dat perfect past bij wat uw bedrijf nodig heeft. We bouwen niet alleen mooie, snelle en veilige websites die er op elk apparaat goed uitzien, maar zorgen er ook voor dat ze gelijk online kunnen.
                <br /><br />
                We bieden ook onderhoud en blijven altijd klaarstaan voor support, zodat uw website altijd up-to-date en probleemloos blijft draaien. Daarnaast richten we ons op het verbeteren van uw online aanwezigheid door SEO toe te passen, waardoor uw bedrijf makkelijker te vinden is voor potentiële klanten.
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OverOns