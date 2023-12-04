// pages/contact.tsx
import Head from 'next/head';
import type { Metadata } from 'next';
import ContactForm from '@/components/Contact/ContactForm';
import ClientSideComponent from '@/components/TestComponents/ClientSideComponent';
import BasicForm from '@/components/BasicForm';
// import { useForm } from '@formcarry/react';

export const metadata: Metadata = {
  title: 'Contact | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

// function MyFormcarry() {
//   const {state: formcarryState, submit: formcarrySubmit} = useForm({
// 	id: 'Your-Form-ID-From-Formcarry'
//   });

//   if (formcarryState.submitted) {
//     return <div>Thank you! We received your submission.</div>;
//   }

//   return (
//     <form onSubmit={formcarrySubmit}>
// 		<label htmlFor="name">Name</label>
// 		<input id="name" type="text" name="text" />

// 		<label htmlFor="surname">Surname</label>
// 		<input id="surname" type="text" name="surname" />
		
// 		<label htmlFor="email">Email</label>
// 		<input id="email" type="email" name="email" />
		
// 		<label htmlFor="message">Message</label>
// 		<textarea id="message" name="message" />
		
// 		<button type="submit">Send</button>
//     </form>
//   );
// }

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
        <p className="text-lg text-gray-600 max-w-[50%] mx-auto">Vragen of iets onduidelijk? Vul het formulier hieronder in en we nemen zo snel mogelijk contact met je op.</p>
      </div>

      {/* <ContactForm /> */}
      {/* <ContactForm /> */}
      <BasicForm />
    </div>
  );
}
