import React from 'react'
import Image from 'next/image'

const Waarom = () => {
  return (
    <div>
    <section className="bg-white max-w-[70%] max-sm:max-w-[85%] py-28 mx-auto">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-8/12">
                <h2 className="lg:text-5xl text-3xl mb-6">Waarom kiezen voor Lucerny<span className="text-black">?</span></h2>
                <p className="text-xl leading-7 text-[#0f0f0f] mb-8 max-w-[80%]">
                <span className='text-lg text-[#3a3a3a]'>Lucerny, van lūceō: &quot;schijn, wees een licht&quot;.</span>
                <br /><br />
                Bij ons krijgt u op maat gemaakte websites tegen een betaalbare prijs. Dit betekent unieke ontwerpmogelijkheden die perfect aansluiten bij uw wensen. We garanderen een snelle, veilige website en nemen het onderhoud voor onze rekening.
                </p>
            </div>
            <div className="lg:w-4/12 flex lg:justify-end max-lg:pt-4">
              <Image 
                className="mb-4 brightness-90 rounded-md "
                src="/images/images/waarom1.jpg" width={0} 
                // <a href="https://iconscout.com/illustrations/delivery" class="text-underline font-size-sm" target="_blank">Delivery person holding package</a> by <a href="https://iconscout.com/contributors/tdaystudio" class="text-underline font-size-sm" target="_blank">Tdays Tudio</a>
                alt='service 1'
                height={0}
                sizes="100vw"
                style={{ width: '80%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Waarom