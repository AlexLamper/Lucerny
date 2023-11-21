import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <Navbar />
  );

  const footer = (
    <Footer />
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto bg-[#f6f9fc]">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
