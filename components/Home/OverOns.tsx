import React from 'react'
import Image from 'next/image'

const OverOns = () => {
  return (
    <div>
    <section className=" max-w-[70%] max-sm:max-w-[85%] py-28 mx-auto">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-4/12">
              <Image 
                className="mt-2 rounded-md mb-4 lg:mb-0"
                src="/images/images/me/2.jpg" width={0} 
                alt='Lucerny Alex'
                height={0}
                sizes="100vw"
                style={{ width: '70%', height: 'auto' }}
              />
            </div>
            <div className="lg:w-8/12 lg:pl-10">
                <h2 className="lg:text-5xl text-3xl mb-6 text-[#e2e2e2]">Over Ons<span className="text-[#e2e2e2]">.</span></h2>
                <p className="text-xl leading-7 text-[#d8d8d8] mb-8">
                Bij Lucerny bieden we op maat gemaakt webdesign en ontwikkeling die perfect past bij uw bedrijf. We zorgen voor mooie, snelle en veilige websites die op elk apparaat goed werken.
                <br /><br />
                Daarnaast bieden we onderhoud, support en SEO-diensten om uw online aanwezigheid te verbeteren en uw website probleemloos te laten functioneren.
                </p>
                <div className='pt-6'>
                  <a href='/over-ons' className="text-[#ffffffb2] text-lg p-4 border border-[#ffffffb2] rounded-md transition-all duration-300 hover:bg-[#ffffffb2] hover:text-[#000] hover:border-transparent">Lees meer →</a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OverOns