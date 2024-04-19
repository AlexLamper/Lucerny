import React from 'react'
import Image from 'next/image'

const OverOns = () => {
  return (
    <div>
      <section className="py-16 mx-auto">
        <div className="container mx-auto max-w-[100%] max-sm:max-w-[85%]">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-6/12 bg-[#F1F2F3] py-12 flex justify-center rounded-tr-3xl rounded-br-3xl">
              <Image 
                className="rounded-2xl mb-12 lg:mb-0"
                src="/images/images/me/2.jpg" 
                width={0} 
                alt='Lucerny Alex'
                height={0}
                sizes="100vw"
                style={{ 
                  width: '40%', 
                  height: 'auto',
                  filter: 'drop-shadow(6px 6px 12px rgba(255, 255, 255, 0.15))'
                }}
              />
            </div>
            <div className="lg:w-6/12 lg:pl-10 py-12 flex justify-center items-center">
              <div className='mx-12 max-w-[70%]'>
                <h2 className="lg:text-5xl text-3xl mb-6 text-black">Over Ons<span className="text-black">.</span></h2>
                <p className="text-xl leading-7 text-[#6b6b6b] mb-8">
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
        </div>
      </section>
    </div>
  )
}

export default OverOns