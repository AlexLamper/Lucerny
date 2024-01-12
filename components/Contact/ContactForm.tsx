'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import styles from '@/styles/contact.module.css'

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

  function onSubmit(data: FormData) {
    sendEmail(data);

    setValue('firstName', '');
    setValue('surName', '');
    setValue('phone', '');
    setValue('email', '');
    setValue('company', '');
    setValue('message', '');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-[#e7e9f1] p-6 rounded-lg border border-[#cdced3]'>

        <label htmlFor="name" className="block text-base font-bold text-gray-700 mb-2">Volledige Naam</label>
        <div className="flex mb-2">
          <input
            type="text"
            placeholder="Voornaam"
            className="w-1/2 mr-2 rounded-md py-3 px-4 bg-white text-black focus:outline-none"
            {...register('firstName', { required: true })}
          />
          <input
            type="text"
            placeholder="Achternaam"
            className="w-1/2 ml-2 rounded-md py-3 px-4 bg-white text-black focus:outline-none"
            {...register('surName', { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-base font-bold text-gray-700 mb-2">Telefoon</label>
          <input
            type="tel"
            placeholder="+31 6 12345678"
            className="w-full rounded-md py-3 px-4 bg-white text-black focus:outline-none"
            {...register('phone', { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-base font-bold text-gray-700 mb-2">E-mailadres</label>
          <input
            type="email"
            placeholder="voorbeeld@gmail.com"
            className="w-full rounded-md py-3 px-4 bg-white text-black focus:outline-none"
            {...register('email', { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-base font-bold text-gray-700 mb-2">Bedrijfsnaam*</label>
          <input
            type="text"
            placeholder="Uw bedrijfsnaam (optioneel)"
            className="w-full rounded-md py-3 px-4 bg-white text-black focus:outline-none"
            {...register('company', { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-base font-bold text-gray-700 mb-2">Wat kunnen we voor je doen?</label>
          <textarea
            placeholder="Licht uw wensen zo gedetailleerd toe. Is het voor uw bedrijf, voor u zelf etc..."
            rows={5}
            cols={40}
            maxLength={200}
            className="w-full rounded-md py-3 px-4 bg-white text-black focus:outline-none resize-none"
            {...register('message', { required: true })}
          />
        </div>

        <button type="submit" className={styles.button}>Verzend uw bericht</button>
    </form>
  )
}

export default ContactForm;