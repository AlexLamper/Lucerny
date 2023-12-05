// pages/contact.tsx
import Head from 'next/head';
import type { Metadata } from 'next';
import ContactForm from '@/components/Contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

export default function Contact() {
  return (
    <div className="container mx-auto py-10">
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact us for inquiries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto mb-10 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-[#232323] text-center">
          Neem Contact Op<span className='text-[#496488]'>.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-[50%] max-sm:max-w-[70%] mx-auto">Vragen of iets onduidelijk? Vul het formulier hieronder in en we nemen zo snel mogelijk contact met je op.</p>
      </div>

      <ContactForm />
    </div>
  );
}
