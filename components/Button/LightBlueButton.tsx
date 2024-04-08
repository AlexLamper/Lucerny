import React from 'react';

interface LightBlueButtonProps {
  href: string;
  text: string;
}

const LightBlueButton: React.FC<LightBlueButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="bg-gradient-to-r font-medium from-blueButtonStart to-blueButtonEnd text-[#141414] py-3 px-8 rounded-xl text-lg transition duration-300 inline-block hover:bg-gradient-to-r hover:from-blueButtonHoverStart hover:to-blueButtonHoverEnd hover:shadow-lg"
      style={{ background: "linear-gradient(90deg, #f5f8ff, #aac3f0)" }}
    >
      {text}
    </a>
  );
};

export default LightBlueButton;
