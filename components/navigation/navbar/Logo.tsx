"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton] = useState(false);

  return (
    <>
        <Link href="/" style={{ display: showButton ? "none" : "flex", alignItems: "center" }}>
            <Image 
                src={"/assets/Icon/Lucerny-logo-no-bg.png"}
                alt={""}
                width={50}
                height={50}
            />
            <h1 className="text-black font-semibold tracking-wider text-3xl ml-2">Lucerny</h1>
        </Link>
        <div
            style={{
            display: showButton ? "block" : "none",
            }}
        >
            <Button />
        </div>
    </>
  );
};

export default Logo;