import React from 'react';

interface ButtonProps {
  href: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="bg-gradient-to-r from-blueButtonStart to-blueButtonEnd text-white py-3 px-8 rounded-xl text-lg transition duration-300 inline-block hover:bg-gradient-to-r hover:from-blueButtonHoverStart hover:to-blueButtonHoverEnd hover:shadow-lg"
      style={{ background: "linear-gradient(90deg, #000000, #181818)" }}
    >
      {text}
    </a>
  );
};

export default Button;
