import Head from 'next/head';
import styles from '@/styles/contact.module.css';

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
          Contact Us.
        </h1>
        <p className="text-xl lg:text-xl mb-16 text-[#424242] italic text-center">Have any questions or inquiries? Fill in the form below and we will get back to you.</p>
      </div>
      <form className="max-w-lg mx-auto p-6 rounded-lg shadow-md bg-gray-200">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-base font-bold text-gray-700">
              Voornaam
            </label>
            <input
              className={styles.input}
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
              className={styles.input}
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
              className={styles.input}
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
              className={styles.input}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="message" className="block text-base font-bold text-gray-700">
              Wat kunnen we voor je doen?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={styles.input}
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
