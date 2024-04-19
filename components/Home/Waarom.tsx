import React from 'react'
import Image from 'next/image'

const Waarom = () => {
  return (
    <div>
      <section className="py-16 mx-auto">
        <div className="container mx-auto max-w-[100%] max-sm:max-w-[85%]">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-6/12 lg:pl-10 py-12 flex justify-center items-center">
              <div className='mx-12 max-w-[70%]'>
                <h2 className="lg:text-5xl text-3xl mb-6">Waarom kiezen voor Lucerny<span className="text-black">?</span></h2>
                <p className="text-xl leading-7 text-[#6b6b6b] mb-8">
                  <span className='text-[18px] text-[#6b6b6b] italic'>Lucerny, van lūceō: &quot;schijn, wees een licht&quot;.</span>
                  <br /><br />
                  Bij ons krijgt u op maat gemaakte websites tegen een betaalbare prijs. Dit betekent unieke ontwerpmogelijkheden die perfect aansluiten bij uw wensen. We garanderen een snelle, veilige website en nemen het onderhoud voor onze rekening.
                </p>
                <div className='pt-6'>
                  <a href='/over-ons' className="text-[#ffffffb2] text-lg p-4 border border-[#ffffffb2] rounded-md transition-all duration-300 hover:bg-[#ffffffb2] hover:text-[#000] hover:border-transparent">Lees meer →</a>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 bg-[#F1F2F3] py-12 flex justify-center rounded-tl-3xl rounded-bl-3xl">
              <Image 
                  className="mb-4 brightness-90 rounded-2xl"
                  src="/images/images/waarom1.jpg" width={0} 
                  // <a href="https://iconscout.com/illustrations/delivery" class="text-underline font-size-sm" target="_blank">Delivery person holding package</a> by <a href="https://iconscout.com/contributors/tdaystudio" class="text-underline font-size-sm" target="_blank">Tdays Tudio</a>
                  alt='service 1'
                  height={0}
                  sizes="100vw"
                  style={{ width: '40%', height: 'auto' }}
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Waarom