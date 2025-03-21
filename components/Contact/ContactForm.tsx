'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import styles from '@/styles/contact.module.css';

export type FormData = {
  firstName: string;
  surName: string;
  phone: string;
  email: string;
  company: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await sendEmail(data);
      alert('Email sent successfully!');
      // Reset form values after successful submission
      setValue('firstName', '');
      setValue('surName', '');
      setValue('phone', '');
      setValue('email', '');
      setValue('company', '');
      setValue('message', '');
    } catch (error) {
      alert('Failed to send email. Please try again later.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='p-6 border border-[#1b1b1b50] rounded-3xl bg-[#F1F2F3] dark:bg-[#111827]'>
      <label htmlFor="name" className="block text-base font-medium text-black dark:text-white tracking-wide mb-2">Volledige Naam</label>
        <div className="flex mb-2">
          <input
            type="text"
            placeholder="Voornaam"
            className="w-1/2 mr-2 py-3 px-4 bg-white text-black dark:text-white focus:outline-none border border-[#1b1b1b50] rounded-lg"
            {...register('firstName', { required: true })}
          />
          <input
            type="text"
            placeholder="Achternaam"
            className="w-1/2 ml-2 py-3 px-4 bg-white text-black dark:text-white focus:outline-none border border-[#1b1b1b50] rounded-lg"
            {...register('surName', { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-base font-medium text-black dark:text-white tracking-wide mb-2">Telefoon</label>
          <input
            type="tel"
            placeholder="+31 6 12345678"
            className="w-full py-3 px-4 bg-white text-black dark:text-white focus:outline-none border border-[#1b1b1b50] rounded-lg"
            {...register('phone', { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-base font-medium text-black dark:text-white tracking-wide mb-2">E-mailadres</label>
          <input
            type="email"
            placeholder="voorbeeld@gmail.com"
            className="w-full py-3 px-4 bg-white text-black dark:text-white focus:outline-none border border-[#1b1b1b50] rounded-lg"
            {...register('email', { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-base font-medium text-black dark:text-white tracking-wide mb-2">Bedrijfsnaam*</label>
          <input
            type="text"
            placeholder="Uw bedrijfsnaam (optioneel)"
            className="w-full py-3 px-4 bg-white text-black dark:text-white focus:outline-none border border-[#1b1b1b50] rounded-lg"
            {...register('company', { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-base font-medium text-black dark:text-white tracking-wide mb-2">Wat kunnen we voor je doen?</label>
          <textarea
            placeholder="Licht uw wensen zo gedetailleerd toe. Is het voor uw bedrijf, voor u zelf etc..."
            rows={5}
            cols={40}
            maxLength={200}
            className="w-full py-3 px-4 bg-white text-black dark:text-white focus:outline-none resize-none border border-[#1b1b1b50] rounded-lg"
            {...register('message', { required: true })}
          />
        </div>
        <button
          className="mt-8 bg-gradient-to-r from-blueButtonStart to-blueButtonEnd text-white py-3 px-8 rounded-xl text-lg transition duration-300 inline-block hover:bg-gradient-to-r hover:from-blueButtonHoverStart hover:to-blueButtonHoverEnd hover:shadow-lg"
          style={{ background: "linear-gradient(90deg, #7E6CED, #7E6CED)" }}
          type='submit'
        >
          Verzend uw bericht 
        </button>
    </form>
  );
};

export default ContactForm;
