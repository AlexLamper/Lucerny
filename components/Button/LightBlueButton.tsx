import React from 'react';

interface LightBlueButtonProps {
  href: string;
  text: string;
}

const LightBlueButton: React.FC<LightBlueButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="bg-gradient-to-r font-medium from-blueButtonStart to-blueButtonEnd text-white py-3 px-8 rounded-full text-lg transition duration-300 inline-block hover:bg-gradient-to-r hover:from-blueButtonHoverStart hover:to-blueButtonHoverEnd hover:shadow-lg"
      style={{ background: "linear-gradient(90deg, #7F6EEB, #7563F3)" }}
    >
      {text}
    </a>
  );
};

export default LightBlueButton;
