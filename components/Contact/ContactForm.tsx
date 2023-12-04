"use client";

import React, { useState } from 'react';
import styles from '@/styles/contact.module.css';

export default function BasicForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/Vb1mWIo2Xm", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("We hebben je bericht ontvangen, bedankt!");
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message)
      }
      else {
        // other error from formcarry
        setError(response.message)
      }
    })
    .catch(error => {
      // request related error.
      setError(error.message ? error.message : error);
    });
  }


  return (
    <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
    
      <div className="formcarry-block">
        <label htmlFor="name" className="block text-base font-bold text-gray-700">Volledige Naam</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Uw voor en achternaam" className={styles.input} />
      </div>
      
      <div className="formcarry-block">
        <label htmlFor="email" className="block text-base font-bold text-gray-700">E-mailadres</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="voorbeeld@gmail.com" className={styles.input} />
      </div>
      
      <div className="formcarry-block">
        <label htmlFor="message" className="block text-base font-bold text-gray-700">Wat kunnen we voor je doen?</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Licht je wensen zo gedetailleerd toe." className={styles.input}></textarea>
      </div>
      
      <div className="formcarry-block">  
        <button type="submit" className={styles.button}>Send</button>
      </div>
    </form>
  )
}