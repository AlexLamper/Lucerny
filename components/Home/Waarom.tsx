import React from 'react'
import Image from 'next/image'

const Waarom = () => {
  return (
    <div>
    <section className="bg-white max-w-[70%] max-sm:max-w-[85%] pt-28 mx-auto">
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-8/12">
                <h2 className="lg:text-5xl text-3xl mb-6">Waarom kiezen voor Lucerny<span className="text-black">?</span></h2>
                <p className="text-lg leading-7 text-black mb-8">
                <span className='text-xl'>Lucerny, van lūceō: &quot;schijn, wees een licht&quot;.</span>
                <br /><br /> 
                Waarom kiezen voor Lucerny? 
                Bij Lucerny maken wij op maat gemaakte websites voor een betaalbare prijs. Dit zorgt voor unieke ontwerpmogeijkheden en een website die perfect aansluit bij uw wensen. Ook zorgen wij voor een snelle en veilige website, zodat u zich geen zorgen hoeft te maken over de technische aspecten van uw website. Daarnaast zorgen wij voor onderhoud van uw website, zodat u zich kunt focussen op uw doelen.
                </p>
            </div>
            <div className="lg:w-4/12 flex lg:justify-end max-lg:pt-4">
              <Image 
                className="mb-4 p-4 brightness-90 border rounded-md "
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