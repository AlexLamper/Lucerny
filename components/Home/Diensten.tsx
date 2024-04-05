import React from 'react';
import Button from '../Button/Button';

const Services = () => {

    return (
        <section className="container mx-auto py-20 bg-white max-w-[70%] max-sm:max-w-[95%]">
            <div className="text-center mb-8">
                <p className="lg:text-3xl text-xl text-black mb-6 mt-6">Onze Diensten</p>
                <h2 className="lg:text-5xl text-3xl mb-12 max-w-[60%] max-sm:max-w-[95%] mx-auto">Ontdek onze Webdesign Pakketten</h2>
            </div>

            <div className="flex flex-wrap max-md:max-w-[95%] mx-auto">
                {/* Service 1 */}
                <div className="md:w-1/2 lg:w-1/3 px-4 mb-4 max-md:mb-5">
                    <a href="/diensten">
                        <div className="bg-white p-6 transition-all duration-500 shadow-[0_3px_5px_rgb(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer border border-[#1b1b1b2f] h-full">
                            <h3 className="text-xl font-bold mb-3">Startpakket</h3>
                            <p className="mb-2">
                            Een website van max. 3 pagina’s; Perfect voor de startende ondernemer die een simpele informatieve website wilt.
                            <br /> <br />
                            Een eenvoudige, op maat gemaakte website met alle essentiële informatie voor uw onderneming of uzelf, zonder functies zoals een contactformulier of blog.
                            </p>
                        </div>
                    </a>
                </div>

                {/* Service 2 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 max-md:mb-5">
                    <a href="/diensten">
                        <div className="bg-white p-6 transition-all duration-500 shadow-[0_3px_5px_rgb(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer border border-[#1b1b1b2f] h-full">
                            <h3 className="text-xl font-bold mb-3">Basispakket</h3>
                            <p className="mb-2">Een website van 4 of meer pagina’s. Voor een ondernemer die een complete website wilt voor zijn of haar bedrijf.
                            <br /> <br />
                            Een complete, op maat gemaakte website met meerdere pagina’s en herzieningsrondes om uw onderneming professioneel te presenteren.
                            </p>
                        </div>
                    </a>
                </div>

                {/* Service 3 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 max-md:mb-5">
                    <a href="/diensten">
                        <div className="bg-white p-6 transition-all duration-500 shadow-[0_3px_5px_rgb(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:cursor-pointer border border-[#1b1b1b2f] h-full">
                            <h3 className="text-xl font-bold mb-3">Premiumpakket</h3>
                            <p className="mb-2">Een website van 7 of meer pagina’s. Voor een professionele en geavanceerde website met alle benodigde informatie en functionaliteiten.
                            <br /> <br />
                            Breng uw onderneming naar een hoger niveau met het premiumpakket, inclusief geavanceerde functionaliteiten, een professioneel ontwerp, en meer.
                            </p>
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
