const Footer = () => {
    return (
      <footer className="bg-[#141414] py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} Lucerny. All rights reserved.
          </p>
          <br />
          <p className=" text-stone-300">
            Mail: info@lucerny.nl
            <br />
            Telefoonnummer: 06-57586667
            <br />
            KVK-nummer: 92873324
            <br />
            Oost Voorgors 3, 3241KD Middelharnis
          </p>
          <br />
          <p className="text-sm text-gray-400 mt-2">
            Website door <a href="https://www.lucerny.nl"><span className='text-[#87b0f1] font-bold'>Lucerny</span></a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  