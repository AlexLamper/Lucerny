import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 lg:py-32 h-90vh">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-90vh">
        <div className="lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Welkom bij Lucerny
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Uw partner in op maat gemaakte websites voor bedrijven en individuen.
          </p>
          <a
            href="#services"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 inline-block"
          >
            Bekijk onze diensten
          </a>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative h-64 lg:h-auto">
            <Image
              src="/images/main02.svg"
              alt="Hero Image"
              className="rounded-lg"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
  };
  
  export default HeroSection;
  

  // #0a2234 // Dark blue for darker background
  // #ffffff // White for text
  // #f5f8fa // Light gray for background 2
  // #ffffff // White for lighter background
  // #387ff6 to #56bdf9 // Blue gradient for button
  // #232323 // For extra dark titles (Main title)
  // #414141 // For gray/dark titles and text 