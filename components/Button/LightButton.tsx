import React from 'react';

interface LightButtonProps {
  href: string;
  text: string;
}

const LightButton: React.FC<LightButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="bg-gradient-to-r from-blueButtonStart to-blueButtonEnd text-black py-3 px-8 rounded-xl text-lg transition duration-300 inline-block hover:bg-gradient-to-r hover:from-blueButtonHoverStart hover:to-blueButtonHoverEnd hover:shadow-lg"
      style={{ background: "linear-gradient(90deg, #fff, #fff)" }}
    >
      {text}
    </a>
  );
};

export default LightButton;
