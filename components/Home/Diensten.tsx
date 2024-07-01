import React from 'react';
import LightBlueButton from '../Button/LightBlueButton';
import Image from 'next/image';

const Services = () => {

    return (
        <section className="container mx-auto py-20 max-w-[70%] max-sm:max-w-[95%]">
            <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-5xl font-semibold text-black mb-4 mx-auto lg:mb-4 max-w-[95%] lg:max-w-[85%]">Ontdek onze <span className='text-[#7664F3]'>Webdesign</span> Pakketten<span className='text-[#7664F3]'>.</span></h2>
                <p className="lg:text-lg text-sm mb-12 max-w-[60%] mx-auto text-[#6b6b6b]">
                    Bekijk onze diensten en ontdek welk pakket het beste bij u past.
                </p>
            </div>

            <div className="flex flex-wrap max-md:max-w-[95%] mx-auto">
                {/* Service 1 */}
                <div className="md:w-1/2 lg:w-1/3 px-4 mb-4 max-md:mb-5">
                    <a href="/diensten">
                        <div className="bg-[#fffffff6] p-6 transition-all rounded-3xl duration-500 hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer border border-[#1b1b1b50] h-full flex flex-col justify-between">
                            <div id='top-div' className='relative w-8 h-8 mb-12'>
                                <Image
                                    src="/assets/icons/diensten/graph.png"
                                    alt="Service 1"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div id='bottom-div' className="items-end">
                                <h3 className="text-xl font-bold mb-3">Alles-in-één Oplossing.</h3>
                                <p className="mb-2">
                                Ontvang een exclusieve website die volledig aan uw wensen voldoet en binnen de kortste tijd online beschikbaar is.
                                </p>
                            </div>
                        </div>                 
                    </a>
                </div>

                {/* Service 2 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 max-md:mb-5">
                    <a href="/diensten">
                        <div className="bg-[#fffffff6] p-6 transition-all rounded-3xl duration-500 hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer border border-[#1b1b1b50] h-full flex flex-col justify-between">
                            <div id='top-div' className='relative w-8 h-8 mb-12'>
                                <Image
                                    src="/assets/icons/diensten/page.png"
                                    alt="Service 1"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div id='bottom-div' className="items-end">
                                <h3 className="text-xl font-bold mb-3">Onepager, 1 pagina gevuld.</h3>
                                <p className="mb-2">Een simpele website met één pagina. Perfect voor een portfolio of een kleine onderneming.
                                </p>
                            </div>
                        </div> 
                    </a>
                </div>

                {/* Service 3 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 max-md:mb-5">
                    <a href="/diensten">
                        <div className="bg-[#fffffff6] p-6 transition-all rounded-3xl duration-500 hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer border border-[#1b1b1b50] h-full flex flex-col justify-between">
                            <div id='top-div' className='relative w-8 h-8 mb-12'>
                                <Image
                                    src="/assets/icons/diensten/pencil.png"
                                    alt="Service 1"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div id='bottom-div' className="items-end">
                                <h3 className="text-xl font-bold mb-3">Een design voor uw website.</h3>
                                <p className="mb-2">Een gepersonaliseerd design voor uw website. Perfect voor een nieuwe look of een rebranding.
                                </p>
                            </div>
                        </div> 
                    </a>
                </div>
            </div>

            <div className="button-container mt-8 flex justify-center">
                <LightBlueButton href="/diensten" text="Bekijk al onze diensten" />
            </div>
        </section>
    );
};

export default Services;
