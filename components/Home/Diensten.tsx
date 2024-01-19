import React from 'react';
import Button from '../Button/Button';

const Services = () => {

    return (
        <section className="container mx-auto pt-20 bg-white max-w-[70%] max-sm:max-w-[95%]">
            <div className="text-center mb-8">
                <p className="lg:text-3xl text-xl text-black mb-6 mt-6">Onze Diensten</p>
                <h2 className="lg:text-5xl text-3xl mb-12 max-w-[60%] max-sm:max-w-[95%] mx-auto">Ontdek onze Webdesign Pakketten</h2>
            </div>

            <div className="flex flex-wrap max-md:max-w-[95%] mx-auto">
                {/* Service 1 */}
                <div className="md:w-1/2 lg:w-1/3 px-4 mb-4">
                    <a href="/diensten">
                        <div className="bg-white p-6 transition-all duration-500 shadow-[0_3px_5px_rgb(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer rounded-lg border border-[#1b1b1b1c] h-full">
                            <h3 className="text-xl font-bold mb-3">Startpakket</h3>
                            <p className="mb-3">Een website van een 1, 2 of 3 pagina&apos;s. Perfect voor de startende ondernemer of als persoonlijke website.</p>
                            <p className="mb-3">vanaf €29/maand</p>
                            <p>Eenmalig startbedrag van €249.99</p>
                        </div>
                    </a>
                </div>

                {/* Service 2 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                    <a href="/diensten">
                        <div className="bg-white p-6 transition-all duration-500 shadow-[0_3px_5px_rgb(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer rounded-lg border border-[#1b1b1b1c] h-full">
                            <h3 className="text-xl font-bold mb-3">Basispakket</h3>
                            <p className="mb-3">Een website van 4 of meer pagina&apos;s. Voor de ondernemer die een complete website wilt.</p>
                            <p className="mb-3">vanaf €39/maand</p>
                            <p>Eenmalig startbedrag van €299.99</p>
                        </div>
                    </a>
                </div>

                {/* Service 3 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                    <a href="/diensten">
                        <div className="bg-white p-6 transition-all duration-500 shadow-[0_3px_5px_rgb(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer rounded-lg border border-[#1b1b1b1c] h-full">
                            <h3 className="text-xl font-bold mb-3">Uitgebreid Pakket</h3>
                            <p className="mb-3">Een website van 7 of meer pagina&apos;s. Voor een complete en uitgebreide website met alle benodigde informatie.</p>
                            <p className="mb-3">vanaf €49/maand</p>
                            <p>Eenmalig startbedrag van €399.99</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="button-container mt-8 flex justify-center">
                <Button href="/diensten" text="Bekijk al onze diensten" />
            </div>
        </section>
    );
};

export default Services;