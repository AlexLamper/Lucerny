import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[rgba(14,14,14,0.98)] h-full flex flex-col'>

        {/* Top section */}
        <div className='h-[7rem]'></div>

        {/* Middle section */}
        <div className='h-auto lg:h-3/6'>
            <div className='max-w-[70%] mx-auto flex flex-col lg:flex-row h-auto lg:h-[20rem]'>
                <div className='w-full lg:w-3/5 flex lg:justify-start'>
                    <h2 className="text-4xl lg:text-6xl font-semibold text-white mb-12 lg:mb-4 max-w-[95%] lg:max-w-[85%]">Wij realiseren uw digitale visie.</h2>
                </div>
                <div className='w-full lg:w-1/5 mb-8 lg:mb-0'>
                    <div>
                        <p className="text-lg text-zinc-400">PAGINAS</p>
                    </div>
                    <div>
                        <Link href='/' className='text-base lg:text-base py-2 lg:py-4'><p className="text-base text-white my-2 lg:my-4">Home</p></Link>
                        <Link href='/over-ons' className='text-base lg:text-base py-2 lg:py-4'><p className="text-base text-white my-2 lg:my-4">Over Ons</p></Link>
                        <Link href='/diensten' className='text-base lg:text-base py-2 lg:py-4'><p className="text-base text-white my-2 lg:my-4">Diensten</p></Link>
                        <Link href='/casus' className='text-base lg:text-base py-2 lg:py-4'><p className="text-base text-white my-2 lg:my-4">Casus</p></Link>
                        <Link href='/contact' className='text-base lg:text-base py-2 lg:py-4'><p className="text-base text-white my-2 lg:my-4">Contact</p></Link>
                    </div>
                </div>
                <div className='w-full lg:w-1/5 mb-8 lg:mb-0'>
                    <div>
                        <p className="text-lg text-zinc-400">CONTACT</p>
                    </div>
                    <div>
                        <Link href='' className='text-base lg:text-base py-2 lg:py-4'><p className="text-base text-white my-2 lg:my-4">Mail: info@lucerny.nl</p></Link>
                        <Link href='' className='text-base lg:text-base py-2 lg:py-4'><p className="text-base text-white my-2 lg:my-4">Telefoonnummer: 06-57586667</p></Link>
                        <Link href='' className='text-base lg:text-base py-2 lg:py-4'><p className="text-base text-white my-2 lg:my-4">KVK-nummer: 92873324</p></Link>
                        <Link href='' className='text-base lg:text-base py-2 lg:py-4'><p className="text-base text-white my-2 lg:my-4">Oost Voorgors 3, 3241KD Middelharnis</p></Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom section */}
        <div className='h-auto lg:h-1/6'>
          <div className='max-w-[70%] mx-auto border-t border-white'>
            <div className='flex justify-between items-center py-4 lg:py-8'>
              <p className='text-sm lg:text-base text-white'>Website door <a href="https://www.lucerny.nl"><span className='text-blue-300 font-semibold'>Lucerny</span></a></p>
              <p className='text-white'>&copy; {new Date().getFullYear()} Lucerny. All rights reserved.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer