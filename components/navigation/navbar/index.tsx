import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Image from "next/image";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 bg-[#F1F2F3] z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <Image src={"/images/icons/menu.svg"} alt={"Hamburger Menu Icon"} width={37} height={37} />
            </button>
            <ul className="hidden md:flex gap-x-6 text-black text-lg">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/over-ons">
                  <p>Over Ons</p>
                </Link>
              </li>
              <li>
                <Link href="/diensten">
                  <p>Diensten</p>
                </Link>
              </li>
              <li>
                <Link href="/casus">
                  <p>Casus</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;