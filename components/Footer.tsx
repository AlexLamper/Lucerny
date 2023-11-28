const Footer = () => {
    return (
      <footer className="bg-[#0a2234] py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} Lucerny. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Built by Lucerny
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  