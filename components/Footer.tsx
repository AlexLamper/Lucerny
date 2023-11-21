const Footer = () => {
    return (
      <footer className="bg-gray-200 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} BlogPage. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built by Lucerny
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  