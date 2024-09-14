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
  title: 'Lucerny | Op Maat Gemaakte Webdesign & Webdevelopment',
  description: 'Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['webdesign', 'webontwikkeling', 'website', 'webdesigner', 'webdeveloper', 'webdevelopment', 'webdesignbureau', 'webdesignbedrijf', 'webdevelopmentbureau', 'webdevelopmentbedrijf', 'webdesignerbedrijf', 'webdeveloperbedrijf', 'webdeveloperbureau', 'lucerny', 'lucerny webdesign', 'lucerny webdevelopment', 'lucerny webdesignbureau', 'lucerny webdevelopmentbureau', 'lucerny webdesignbedrijf', 'lucerny webdevelopmentbedrijf', 'lucerny webdesignerbedrijf', 'lucerny webdeveloperbedrijf', 'lucerny webdeveloperbureau', 'op maat gemaakte websites', 'op maat gemaakte webdesign', 'op maat', 'gemaakte', 'websites', 'webdesign', 'webdevelopment', 'webdesignbureau', 'webdevelopmentbureau', 'webdesignbedrijf', 'ontwikkeling', 'webontwikkeling', 'Nederland', 'goedkoop', 'cheap', 'goedkope', 'betaalbaar', 'affordable', 'professioneel', 'professional', 'professionele', 'professionaliteit', 'kwaliteit', 'quality', 'kwalitatief', 'kwalitatieve', 'kwalitatief hoogstaand', 'kwalitatief hoogstaande', 'hoogstaand', 'hoogstaande', 'middelharnis', 'middelharnis webdesign', 'middelharnis webdevelopment', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesigner', 'middelharnis webdeveloper', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesigner', 'middelharnis webdeveloper', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesigner', 'middelharnis webdeveloper', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'middelharnis webdeveloperbureau', 'middelharnis webdesignbureau', 'middelharnis webdevelopmentbureau', 'middelharnis webdesignbedrijf', 'middelharnis webdevelopmentbedrijf', 'middelharnis webdesignerbedrijf', 'middelharnis webdeveloperbedrijf', 'Goeree-overflakkee', 'goeree-overflakkee webdesign', 'goeree-overflakkee webdevelopment', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesignbedrijf', 'goeree-overflakkee webdevelopmentbedrijf', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesigner', 'goeree-overflakkee webdeveloper', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesignbedrijf', 'goeree-overflakkee webdevelopmentbedrijf', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesigner', 'goeree-overflakkee webdeveloper', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesignbedrijf', 'goeree-overflakkee webdevelopmentbedrijf', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesigner', 'goeree-overflakkee webdeveloper', 'goeree-overflakkee webdesignerbedrijf', 'goeree-overflakkee webdeveloperbedrijf', 'goeree-overflakkee webdeveloperbureau', 'goeree-overflakkee webdesignbureau', 'goeree-overflakkee webdevelopmentbureau', 'goeree-overflakkee webdesign', 'sommelsdijk', 'sommelsdijk webdesign', 'sommelsdijk webdevelopment', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesigner', 'sommelsdijk webdeveloper', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesigner', 'sommelsdijk webdeveloper', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesigner', 'sommelsdijk webdeveloper', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf', 'sommelsdijk webdeveloperbureau', 'sommelsdijk webdesignbureau', 'sommelsdijk webdevelopmentbureau', 'sommelsdijk webdesignbedrijf', 'sommelsdijk webdevelopmentbedrijf', 'sommelsdijk webdesignerbedrijf', 'sommelsdijk webdeveloperbedrijf'],
  openGraph: {
    title: 'Lucerny | Op Maat Gemaakte Webdesign & Webdevelopment',
    description: "Lucerny is een webontwikkelingsbureau dat gespecialiseerd is in het bouwen van op maat gemaakte, gepersonaliseerde websites voor bedrijven.",
    url: "https://lucerny.nl",
    siteName: "Lucerny | Webdesign & Webdevelopment",
    type: "website",
    locale: "nl_NL",
  },
  metadataBase: new URL("https://lucerny.nl"),
};

export default function Contact() {
  return (
  <>
  <div>
    <div className="container mx-auto pb-20">

      <section className="text-center pt-20">
        <div className="container mx-auto mb-10">
          <h1 className="text-3xl max-sm:max-w-[90%] lg:text-5xl font-bold leading-tight mb-4 text-black max-w-[50%] mx-auto">
            Neem <span className='text-[#7664F3]'>Contact</span> Op<span className='text-black'>.</span>
          </h1>
          <p className="text-xl text-[#6b6b6b] mb-8 max-w-[50%] max-sm:max-w-[90%] mx-auto">Vragen of iets onduidelijk? Bel, stuur een mailtje, of vul het formulier hieronder in en ik neem zo snel mogelijk contact met je op.</p>
        </div>
      </section>

      <section className="container mx-auto max-w-[80%] max-lg:max-w-[95%] flex flex-col lg:flex-row justify-between">
        {/* Left Div */}
        <div className="w-1/2 max-lg:w-full p-4">
          <div className="flex max-w-[90%] max-lg:max-w-[100%] mt-12">
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
          <div className='my-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.5667725266594!2d4.168797976880523!3d51.75924509227383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4456ae2d0d31b%3A0xa8325705820d70f5!2sOost%20Voorgors%203%2C%203241%20KD%20Middelharnis!5e0!3m2!1snl!2snl!4v1713788219870!5m2!1snl!2snl" 
              className="border-2 border-zinc-200 rounded-xl w-full h-80 lg:h-[400px]"
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen>
            </iframe>
          </div>
          <div className="flex mt-12">
            <h1 className="text-xl font-bold mb-2">Bekijk onze social media kanalen</h1>
          </div>
          <div className="flex mt-2">
            <a href="https://wa.me/+310657586667" target="_blank"><Image src={WhatsAppIcon} alt="Contact Icon" width={35} height={35} className="mr-4" /></a>
            <a href="https://www.instagram.com/lucerny.nl" target="_blank"><Image src={InstagramIcon} alt="Contact Icon" width={35} height={35} className="mr-4" /></a>
            <a role="link" aria-disabled="true"><Image src={FaceBookIcon} alt="Contact Icon" width={35} height={35} className="mr-4" /></a>
            <a role="link" aria-disabled="true"><Image src={LinkedInIcon} alt="Contact Icon" width={35} height={35} className="mr-4" /></a>
          </div>
        </div>
        {/* Right Div */}
        <div className="w-1/2 max-lg:w-full p-4 flex lg:justify-end max-lg:pt-12">
          <ContactForm />
        </div>
      </section>
    </div>
  </div>
  </>
  );
}
