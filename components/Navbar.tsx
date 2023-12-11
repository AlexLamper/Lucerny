"use client";

import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import { useState } from 'react';
import { BsArrowRightShort, BsList } from 'react-icons/bs'; // Import the hamburger menu icon

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // State to manage the dropdown menu

  return (
    <nav className={styles.navbar}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex items-center h-full">
          <a href="/" className="flex items-center h-full">
            <span className={styles.logo}>Lucerny</span>
          </a>
        </div>

        {/* Hamburger menu icon */}
        <div className="md:hidden absolute right-4">
          <button onClick={() => setShowMenu(!showMenu)} className="focus:outline-none">
            <BsList className="text-white text-2xl" />
          </button>
        </div>

        {/* Dropdown menu */}
        <div className={`${showMenu ? 'absolute' : 'hidden'} md:hidden top-full right-0 left-0 bg-[#eeeeee] p-4`}>
          <ul className="text-center">
            <li><a href="/" className="text-black hover:text-gray-600 block py-2">Home</a></li>
            <li><a href="/over-ons" className="text-black hover:text-gray-600 block py-2">Over Ons</a></li>
            <li><a href="/diensten" className="text-black hover:text-gray-600 block py-2">Diensten</a></li>
            <li><a href="/portfolio" className="text-black hover:text-gray-600 block py-2">Portfolio</a></li>
            <li><a href="/ervaringen" className="text-black hover:text-gray-600 block py-2">Ervaringen</a></li>
          </ul>
        </div>

        {/* Links in fullscreen */}
        <ul className="hidden md:flex space-x-8 h-full">
          <li className={styles.link}><a href="/" className="text-white hover:text-gray-300 h-full flex items-center">Home</a></li>
          <li className={styles.link}><a href="/over-ons" className="text-white hover:text-gray-300 h-full flex items-center">Over Ons</a></li>
          <li className={styles.link}><a href="/diensten" className="text-white hover:text-gray-300 h-full flex items-center">Diensten</a></li>
          <li className={styles.link}><a href="/portfolio" className="text-white hover:text-gray-300 h-full flex items-center">Portfolio</a></li>
          <li className={styles.link}><a href="/ervaringen" className="text-white hover:text-gray-300 h-full flex items-center">Ervaringen</a></li>
        </ul>

        {/* Contact button */}
        <Link href="/contact">
          <button className={`${styles.button} hidden md:block`}>
            <span>Neem contact op</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;