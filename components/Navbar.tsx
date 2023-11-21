import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className='text-white'>
          Lucerny
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className='text-white'>
                Home
            </Link>
          </li>
          <li>
            <Link href="/about" className='text-white'>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className='text-white'>
              Contact
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;