const Footer = () => {
    return (
      <footer className="bg-[#141414] py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} Lucerny. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Website door <a href="https://www.lucerny.nl"><span className='text-[#87b0f1] font-bold'>Lucerny</span></a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  