import React from 'react';
import LightButton from '../Button/LightButton';

const Services = () => {

    return (
        <section className="container mx-auto py-20 max-w-[70%] max-sm:max-w-[95%]">
            <div className="text-center mb-8">
                <p className="lg:text-3xl text-xl text-[#e2e2e2] mb-6 mt-6">Onze Diensten</p>
                <h2 className="lg:text-5xl text-3xl mb-12 max-w-[60%] max-sm:max-w-[95%] mx-auto text-[#e2e2e2]">Ontdek onze Webdesign Pakketten</h2>
            </div>

            <div className="flex flex-wrap max-md:max-w-[95%] mx-auto">
                {/* Service 1 */}
                <div className="md:w-1/2 lg:w-1/3 px-4 mb-4 max-md:mb-5">
                    <a href="/diensten">
                        <div className="bg-[#fffffff6] p-6 transition-all rounded-md duration-500 shadow-[0_3px_5px_rgb(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer border border-[#1b1b1b2f] h-full">
                            <h3 className="text-xl font-bold mb-3">Alles-in-één Oplossing</h3>
                            <p className="mb-2">
                            Ontvang een exclusieve website die volledig aan uw wensen voldoet en binnen de kortste tijd online beschikbaar is.
                            <br /> <br />
                            Inclusief aangepast design, hosting, beveiliging en domein, zodat u nergens meer naar om hoeft te kijken.
                            </p>
                        </div>
                    </a>
                </div>

                {/* Service 2 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 max-md:mb-5">
                    <a href="/diensten">
                        <div className="bg-[#fffffff6] p-6 rounded-md transition-all duration-500 shadow-[0_3px_5px_rgb(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer border border-[#1b1b1b2f] h-full">
                            <h3 className="text-xl font-bold mb-3">Onepager.</h3>
                            <p className="mb-2">Een simpele website met één pagina. Perfect voor een portfolio of een kleine onderneming.
                            <br /> <br />
                            Een onepager is een website met één pagina, perfect voor een portfolio of een kleine onderneming. Inclusief een aangepast design, hosting, en domeinnaam.
                            </p>
                        </div>
                    </a>
                </div>

                {/* Service 3 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 max-md:mb-5">
                    <a href="/diensten">
                        <div className="bg-[#fffffff6] p-6 rounded-md transition-all duration-500 shadow-[0_3px_5px_rgb(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer border border-[#1b1b1b2f] h-full">
                            <h3 className="text-xl font-bold mb-3">Webdesign.</h3>
                            <p className="mb-2">Een gepersonaliseerd design voor uw website. Perfect voor een nieuwe look of een rebranding.
                            <br /> <br />
                            <span className='font-bold'>Let op:</span> Dit pakket bevat alleen het design van de website. Hosting en domeinnaam zijn niet inbegrepen.
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="button-container mt-8 flex justify-center">
                <LightButton href="/diensten" text="Bekijk al onze diensten" />
            </div>
        </section>
    );
};

export default Services;
