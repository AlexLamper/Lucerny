import Image from 'next/image';
import styles from '@/styles/hero.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/2 lg:pr-10">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Welkom bij Lucerny
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              Uw partner in op maat gemaakte websites voor bedrijven en individuen.
            </p>
            <a
              href="#services"
              className="bg-gradient-to-r from-blueButtonStart to-blueButtonEnd hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 inline-block"
            >
              Bekijk onze diensten
            </a>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/images/main02.svg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;