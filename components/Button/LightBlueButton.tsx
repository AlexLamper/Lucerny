import React from 'react';

interface LightBlueButtonProps {
  href: string;
  text: string;
}

const LightBlueButton: React.FC<LightBlueButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="bg-gradient-to-r font-medium from-blueButtonStart to-blueButtonEnd text-white py-3 px-8 rounded-full text-lg transition duration-300 inline-flex items-center justify-center hover:bg-gradient-to-r hover:from-blueButtonHoverStart hover:to-blueButtonHoverEnd hover:shadow-lg"
      style={{ background: "linear-gradient(90deg, #7F6EEB, #7563F3)" }}
    >
      <span>{text}</span>
      <span
        className="ml-2 w-6 h-6 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/icons/arrow3.png')" }}
      />
    </a>
  );
};

export default LightBlueButton;
