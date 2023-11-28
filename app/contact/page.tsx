import Head from 'next/head';
import styles from '@/styles/contact.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

export default function Contact() {
  return (
    <div className="container mx-auto py-10">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for inquiries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-[#232323] text-center">
          Contact Us<span className='text-[#0393c4]'>.</span>
        </h1>
        <p className="text-lg text-gray-600 text-center">Vragen of iets onduidelijk? Vul het formulier hieronder in en we nemen zo snel mogelijk contact met je op.</p>
      </div>
      <form className="max-w-2xl mx-auto p-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-base font-bold text-gray-700">
              Voornaam
            </label>
            <input
              className={`${styles.input} w-full h-8`}
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-base font-bold text-gray-700">
              Achternaam
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`${styles.input} w-full h-8`}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-bold text-gray-700">
              E-mailadres
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`${styles.input} w-full h-8`}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-base font-bold text-gray-700">
              Telefoonnummer
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className={`${styles.input} w-full h-8`}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="message" className="block text-base font-bold text-gray-700">
              Wat kunnen we voor je doen?
            </label>
            <textarea
              id="message"
              name="message"
              rows={6} // Increased the rows to make it larger
              className={`${styles.input} w-full`}
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="inline-block w-40 px-6 py-3 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
