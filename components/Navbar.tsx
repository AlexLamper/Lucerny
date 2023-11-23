import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Business Name */}
        <div className="flex items-center">
          <Image src="/images/logo/favicon.png" alt="Lucerny Logo" className="h-8 mr-2" width={35} height={200} />
          <a href="/"><span className="text-white font-bold text-lg">Lucerny</span></a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white">
              Over Ons
            </Link>
          </li>
          <li>
            <Link href="/diensten" className="text-white">
              Diensten
            </Link>
          </li>
          <li>
            <Link href="/tarieven" className="text-white">
              Tarieven
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-white">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/ervaringen" className="text-white">
              Ervaringen
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white">
              Contact
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>

        {/* Button */}
        <button className={styles.button}>
          Offerte Aanvragen &gt;
        </button>
      </div>
    </nav>
  );
};


export default Navbar;
