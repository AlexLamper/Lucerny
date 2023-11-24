import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/navbar.module.css';
import { SlArrowRight } from "react-icons/sl";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* <Image src="/favicon.ico" alt="Lucerny Logo" className="h-8 mr-2" width={35} height={200} /> */}
          <a href="/"><span className="text-white font-bold text-lg">Lucerny</span></a>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-8">
            <li className={styles.link}><Link href="/" className="text-white">Home</Link></li>
            <li className={styles.link}><Link href="/over-ons" className="text-white">Over Ons</Link></li>
            <li className={styles.link}><Link href="/diensten" className="text-white">Diensten</Link></li>
            <li className={styles.link}><Link href="/tarieven" className="text-white">Tarieven</Link></li>
            <li className={styles.link}><Link href="/portfolio" className="text-white">Portfolio</Link></li>
            <li className={styles.link}><Link href="/ervaringen" className="text-white">Ervaringen</Link></li>
            <li className={styles.link}><Link href="/contact" className="text-white">Contact</Link></li>
          </ul>
        </div>

        <button className={styles.button}>
          <span>Offerte Aanvragen</span>
          <span className={styles.icon}><SlArrowRight /></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
