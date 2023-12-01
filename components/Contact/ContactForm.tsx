import React from 'react'
import styles from '@/styles/contact.module.css';

const ContactForm = () => {
  return (
    <div>
        <form className="max-w-2xl mx-auto p-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-base font-bold text-gray-700">
              Naam
            </label>
            <input
              className={`${styles.input} w-30 h-12`}
              type="text"
              id="Name"
              name="Name"
              placeholder="Volledige naam"
              style={{ paddingLeft: '0.75rem' }}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-base font-bold text-gray-700">
              Bedrijf
            </label>
            <input
              type="text"
              id="bedrijf"
              name="bedrijf"
              className={`${styles.input} w-30 h-12`}
              placeholder="Bedrijfsnaam"
              style={{ paddingLeft: '0.75rem' }}
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
              className={`${styles.input} w-30 h-12`}
              placeholder="E-mailadres"
              style={{ paddingLeft: '0.75rem' }}
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
              className={`${styles.input} w-30 h-12`}
              placeholder="Telefoonnummer"
              style={{ paddingLeft: '0.75rem' }}
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
              placeholder="Licht je wensen zo gedetailleerd toe."
              style={{ paddingLeft: '0.75rem', paddingTop: '0.75rem' }}
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <button type='submit' className={styles.button}>
            <span>Verstuur</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm