// pages/contact.tsx
import Head from 'next/head';
import type { Metadata } from 'next';
import ContactForm from '@/components/Contact/ContactForm';

import AdresIcon from '@/public/assets/icons/contact/adres.png';
import MailIcon from '@/public/assets/icons/contact/mail.png';
import PhoneIcon from '@/public/assets/icons/contact/phone.png';

import FaceBookIcon from '@/public/assets/icons/social-media/facebook.png';
import InstagramIcon from '@/public/assets/icons/social-media/instagram.png';
import LinkedInIcon from '@/public/assets/icons/social-media/linkedin.png';
import WhatsAppIcon from '@/public/assets/icons/social-media/whatsapp.png';
import Image from 'next/image';

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="container mx-auto mb-10 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-[#232323] text-center">
          Neem Contact Op<span className='text-[#496488]'>.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-[50%] max-sm:max-w-[70%] mx-auto">
          Vragen of iets onduidelijk? Bel ons, stuur een mailtje, of vul het formulier hieronder in en we nemen zo snel mogelijk contact met je op.
        </p>
      </div>

      <div className="container mx-auto max-w-[80%] flex justify-between">
        {/* Left Div */}
        <div className="w-1/2 p-4">
          <div className="flex max-w-[80%] mt-12">
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mb-2">Adres</h1>
              <div className="flex">
                <div className="mt-1">
                  <Image src={AdresIcon} alt="Contact Icon" width={24} height={24} className="mr-2" />
                </div>
                <div>
                  <p className="text-lg mb-2 text-[#3c3c3c]">Oost Voorgors 3</p>
                  <p className="text-lg text-[#3c3c3c]">3241 KD, Middelharnis</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mb-2">Contact</h1>
              <p className="text-lg mb-2 text-[#3c3c3c] flex items-center">
                <Image src={MailIcon} alt="Contact Icon" width={24} height={24} className="mr-2" />
                info@lucerny.net
              </p>
              <p className="text-lg text-[#3c3c3c] flex items-center">
                <Image src={PhoneIcon} alt="Contact Icon" width={24} height={24} className="mr-2" />
                +31 6 57586667
              </p>
            </div>
          </div>
          <div className="flex mt-20">
            <h1 className="text-xl font-bold mb-2">Bekijk onze social media kanalen</h1>
          </div>
          <div className="flex mt-2">
            <a href="https://www.facebook.com/" target="_blank"><Image src={FaceBookIcon} alt="Contact Icon" width={35} height={35} className="mr-4" /></a>
            <a href="https://www.instagram.com/" target="_blank"><Image src={InstagramIcon} alt="Contact Icon" width={35} height={35} className="mr-4" /></a>
            <a href="https://www.linkedin.com/" target="_blank"><Image src={LinkedInIcon} alt="Contact Icon" width={35} height={35} className="mr-4" /></a>
            <a href="https://www.whatsapp.com/" target="_blank"><Image src={WhatsAppIcon} alt="Contact Icon" width={35} height={35} className="mr-4" /></a>
          </div>
        </div>
        {/* Right Div */}
        <div className="w-1/2 p-4 flex justify-end">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
