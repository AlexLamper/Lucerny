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
  description: 'Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.',
};

export default function Contact() {
  return (
  <>
  <div style={{ backgroundImage: 'url("/images/backgrounds/casus/background.svg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    <div className="container mx-auto pb-20">

      <section className="text-center pt-20">
        <div className="container mx-auto mb-10">
          <h1 className="text-3xl max-sm:max-w-[90%] lg:text-5xl font-bold leading-tight mb-4 text-black max-w-[50%] mx-auto">
            Neem Contact Op<span className='text-black'>.</span>
          </h1>
          <p className="text-lg text-gray-900 mb-8 max-w-[50%] max-sm:max-w-[90%] mx-auto">Vragen of iets onduidelijk? Bel ons, stuur een mailtje, of vul het formulier hieronder in en we nemen zo snel mogelijk contact met je op.</p>
        </div>
      </section>

      <section className="container mx-auto max-w-[70%] flex justify-between">
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
                  <p className="text-lg mb-2 text-black">Oost Voorgors 3</p>
                  <p className="text-lg text-black">3241 KD, Middelharnis</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mb-2">Contact</h1>
              <p className="text-lg mb-2 text-black flex items-center">
                <Image src={MailIcon} alt="Contact Icon" width={24} height={24} className="mr-2" />
                info@lucerny.nl
              </p>
              <p className="text-lg text-black flex items-center">
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
      </section>
    </div>
  </div>
  </>
  );
}
