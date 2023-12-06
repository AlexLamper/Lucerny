import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import { BsArrowRightShort } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* <Image src="/favicon.ico" alt="Lucerny Logo" className="h-8 mr-2" width={35} height={200} /> */}
          <a href="/"><span className={styles.logo}>Lucerny</span></a>
        </div>

        <div className="hidden md:block">
        <ul className="flex space-x-8">
          <li className={styles.link}><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li className={styles.link}><Link href="/over-ons" className="text-white hover:text-gray-300">Over Ons</Link></li>
          <li className={styles.link}><Link href="/diensten" className="text-white hover:text-gray-300">Diensten</Link></li>
          <li className={styles.link}><Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link></li>
          <li className={styles.link}><Link href="/ervaringen" className="text-white hover:text-gray-300">Ervaringen</Link></li>
        </ul>
        </div>

        <Link href="/contact">
        <button className={styles.button}>
          <span>Neem contact op</span>
          <span className={styles.icon}><BsArrowRightShort /></span>
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
